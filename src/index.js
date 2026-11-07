// Mini API for deploy practice on Cloudflare Workers.
// Mirrors the shapes of the FastAPI books API in Concepts/API, but as a
// single Worker script with an in-memory book collection.

const jsonHeaders = { "Content-Type": "application/json" };

function jsonResponse(status, body) {
  return new Response(JSON.stringify(body), { status, headers: jsonHeaders });
}

const books = [
    {
        "id": 1,
        "title": "1984",
        "author": "George Orwell",
        "released": 1949,
        "price": 9.99,
        "available": true
    },
    {
        "id": 2,
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "released": 1960,
        "price": 12.99,
        "available": true
    },
    {
        "id": 3,
        "title": "Brave New World",
        "author": "Aldous Huxley",
        "released": 1932,
        "price": 8.99,
        "available": true
    },
    {
        "id": 4,
        "title": "Fahrenheit 451",
        "author": "Ray Bradbury",
        "released": 1953,
        "price": 10.99,
        "available": true
    },
    {
        "id": 5,
        "title": "The Red Book",
        "author": "Carl Jung",
        "released": 2009,
        "price": 29.99,
        "available": true
    },
    {
        "id": 7,
        "title": "Man and His Symbols",
        "author": "Carl Jung",
        "released": 1964,
        "price": 19.99,
        "available": true
    },
    {
        "id": 8,
        "title": "Memories, Dreams, Reflections",
        "author": "Carl Jung",
        "released": 1961,
        "price": 14.99,
        "available": true
    },
    {
        "id": 99,
        "title": "Psychological Types",
        "author": "Carl Jung",
        "released": 1921,
        "price": 24.99,
        "available": true
    },
    {
        "id": 6,
        "title": "The Great Gatsby",
        "author": "F. Scott Fitzgerald",
        "released": 1925,
        "price": 11.99,
        "available": true
    },
    {
        "title": "The Archaic Revival",
        "author": "Terence McKenna",
        "released": 2014,
        "price": 9.99,
        "id": 100,
        "available": false
    }
];

function findBook(bookId) {
  return books.find((b) => b.id === bookId);
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const method = request.method;

    if (url.pathname === "/books" && method === "GET") {
      return Response.json(books);
    }

    const single = url.pathname.match(/^\/books\/(\d+)$/);
    if (single) {
      const bookId = Number(single[1]);
      const book = findBook(bookId);
      const notFound = () => jsonResponse(404, { detail: "No book with the given ID was found!" });

      if (method === "GET") {
        if (!book) return notFound();
        return Response.json(book);
      }

      if (!book) return notFound();

      if (method === "PUT") {
        const body = await request.json();
        const updated = { ...book, ...body, id: bookId };
        books[books.indexOf(book)] = updated;
        return jsonResponse(200, { status: "updated", data: updated });
      }

      if (method === "PATCH") {
        const body = await request.json();
        const updated = { ...book, ...body };
        books[books.indexOf(book)] = updated;
        return jsonResponse(200, { status: "patched", data: updated });
      }

      if (method === "DELETE") {
        books.splice(books.indexOf(book), 1);
        return jsonResponse(200, { status: "deleted" });
      }
    }

    if (url.pathname === "/books" && method === "POST") {
      const body = await request.json();
      const book = { ...body, id: body.id ?? books.length + 1, available: body.available ?? true };
      books.push(book);
      return jsonResponse(201, { status: "inserted", data: book });
    }

    return jsonResponse(404, { detail: "Not Found" });
  },
};
