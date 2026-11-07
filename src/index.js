// Mini API for deploy practice on Cloudflare Workers.
// Mirrors the shapes of the FastAPI books API in Concepts/API, but as a
// single Worker script with an in-memory book collection.

const jsonHeaders = { "Content-Type": "application/json" };

function jsonResponse(status, body) {
  return new Response(JSON.stringify(body), { status, headers: jsonHeaders });
}

const books = [
  { id: 1, title: "The Great Gatsby", author: "F. Scott Fitzgerald", released: 1925, price: 10, available: true },
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
