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
        "id": 100,
        "title": "The Archaic Revival",
        "author": "Terence McKenna",
        "released": 2014,
        "price": 9.99,
        "available": false
    },
];

function findBook(bookId) {
  return books.find((b) => b.id === bookId);
}

// Personal CV served by this Worker, styled after
// https://www.creativewebmanual.com/ (The Creative Website Manual).
const cv = {
  identity: {
    name: "Your Name",
    role: "Creative Developer",
    location: "Your Location",
    email: "you@example.com",
  },
  headline: "The creative process of<br/>crafting stand-out websites",
  ingredients: ["Webflow", "GSAP"],
  chapters: [
    { index: "01", label: "about", title: "Why creative websites?", active: true },
    { index: "02", label: "design + dev", title: "Design & Development", active: false },
  ],
};

const cvPage = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>CVM — The Creative Website Manual</title>
<style>
  :root {
    --bg: #070707;
    --text: #eaeaea;
    --muted: #515151;
    --accent: #c6fb50;
    --accent-2: #ffb700;
    --line: rgba(234, 234, 234, 0.14);
    --font-primary: "PP Neue Montreal", "Helvetica Neue", Helvetica, Arial, sans-serif;
    --font-mono: ui-monospace, "SF Mono", SFMono-Regular, Menlo, Consolas, monospace;
  }
  * { box-sizing: border-box; }
  html, body { margin: 0; padding: 0; }
  body { background: var(--bg); color: var(--text); font-family: var(--font-primary); -webkit-font-smoothing: antialiased; }
  ::selection { background: var(--accent); color: #070707; }
  .u-mono { font-family: var(--font-mono); text-transform: uppercase; letter-spacing: 0.02em; }
  .container { width: min(100% - 48px, 1440px); margin-inline: auto; }
  .hero_wrap { min-height: 100vh; min-height: 100svh; background: var(--bg); color: var(--text); display: flex; flex-direction: column; position: relative; overflow: hidden; }
  .hero_wrap::before { content: ""; position: absolute; inset: 0; background-image: linear-gradient(to right, var(--line) 1px, transparent 1px), linear-gradient(to bottom, var(--line) 1px, transparent 1px); background-size: 96px 96px; opacity: 0.5; pointer-events: none; }
  .hero_topbar { position: relative; z-index: 2; padding: 28px 0; }
  .hero_topbar-inner { display: flex; flex-direction: row; flex-wrap: nowrap; justify-content: space-between; gap: 16px; }
  .hero_topbar p { font-family: var(--font-mono); text-transform: uppercase; letter-spacing: 0.02em; font-size: 11px; color: var(--muted); margin: 0; }
  .hero_main { position: relative; z-index: 1; flex: 1; display: flex; align-items: center; padding: 64px 0; }
  .hero_copy { max-width: 980px; }
  .hero_eyebrow { font-family: var(--font-mono); text-transform: uppercase; letter-spacing: 0.02em; font-size: 12px; color: var(--accent); margin: 0 0 28px; }
  .hero_headline { font-size: clamp(2.8rem, 8vw, 7.5rem); line-height: 0.98; letter-spacing: -0.04em; font-weight: 500; margin: 0 0 64px; text-wrap: balance; }
  .hero_rows { display: flex; flex-direction: column; gap: 40px; }
  .hero_row { display: flex; flex-direction: column; gap: 16px; }
  .hero_row-label { font-family: var(--font-mono); text-transform: uppercase; letter-spacing: 0.02em; font-size: 11px; color: var(--muted); margin: 0; }
  .hero_row-items { display: flex; flex-wrap: wrap; gap: 12px; }
  .info_stroke { border: 1px solid var(--line); border-radius: 999px; padding: 10px 22px; font-family: var(--font-mono); text-transform: uppercase; letter-spacing: 0.02em; font-size: 12px; display: inline-block; }
  .info_no_stroke { border-color: var(--accent); color: var(--accent); }
  .hero_bottom { position: relative; z-index: 2; padding: 32px 0; }
  .hero_bottom-inner { display: flex; flex-direction: row; flex-wrap: nowrap; justify-content: space-between; align-items: flex-end; gap: 24px; }
  .hero_coord { font-family: var(--font-mono); text-transform: uppercase; letter-spacing: 0.02em; font-size: 11px; color: var(--muted); margin: 0; }
  .hero_credits { font-family: var(--font-mono); text-transform: uppercase; letter-spacing: 0.02em; font-size: 11px; color: var(--muted); margin: 0; }
  .hero_credits a { color: var(--text); }
  .hero_barcode { opacity: 0.8; }
  @media (max-width: 700px) {
    .hero_topbar { padding: 20px 0; }
    .hero_main { padding: 40px 0; }
    .hero_bottom { padding: 24px 0; }
    .hero_bottom-inner { flex-direction: column; align-items: flex-start; }
  }
</style>
</head>
<body>
<section class="hero_wrap" id="home">
  <header class="hero_topbar">
    <div class="container hero_topbar-inner">
      <p>©CVM — FW25</p>
      <p>prjct by huy + ivor</p>
      <p>[l] vn.us</p>
    </div>
  </header>
  <main class="hero_main">
    <div class="container hero_copy">
      <p class="hero_eyebrow">the creative process</p>
      <h1 class="hero_headline" id="hero-headline">The creative process of crafting stand-out websites</h1>
      <div class="hero_rows">
        <div class="hero_row">
          <p class="hero_row-label">active ingredients</p>
          <div class="hero_row-items" id="cv-ingredients"></div>
        </div>
        <div class="hero_row">
          <p class="hero_row-label">chapters</p>
          <div class="hero_row-items" id="cv-chapters"></div>
        </div>
      </div>
    </div>
  </main>
  <footer class="hero_bottom">
    <div class="container hero_bottom-inner">
      <p class="hero_coord"><span>[X]</span> <span>0</span>px</p>
      <p class="hero_credits">project by <a href="https://bymonolog.com/" target="_blank">huy</a> + <a href="https://www.ivorjian.com/" target="_blank">ivor</a></p>
      <svg class="hero_barcode" width="140" height="44" viewBox="0 0 140 44" fill="none" aria-hidden="true">
        <rect x="0" y="6" width="2" height="32" fill="currentColor"></rect>
        <rect x="5" y="2" width="3" height="40" fill="currentColor"></rect>
        <rect x="10" y="8" width="2" height="28" fill="currentColor"></rect>
        <rect x="14" y="0" width="4" height="44" fill="currentColor"></rect>
        <rect x="21" y="5" width="2" height="34" fill="currentColor"></rect>
        <rect x="25" y="1" width="3" height="42" fill="currentColor"></rect>
        <rect x="30" y="7" width="2" height="30" fill="currentColor"></rect>
        <rect x="34" y="3" width="5" height="38" fill="currentColor"></rect>
        <rect x="40" y="9" width="2" height="26" fill="currentColor"></rect>
        <rect x="44" y="0" width="3" height="44" fill="currentColor"></rect>
        <rect x="48" y="6" width="2" height="32" fill="currentColor"></rect>
        <rect x="53" y="2" width="4" height="40" fill="currentColor"></rect>
        <rect x="58" y="8" width="2" height="28" fill="currentColor"></rect>
        <rect x="62" y="4" width="3" height="36" fill="currentColor"></rect>
        <rect x="67" y="0" width="2" height="44" fill="currentColor"></rect>
        <rect x="71" y="5" width="4" height="34" fill="currentColor"></rect>
        <rect x="77" y="1" width="2" height="42" fill="currentColor"></rect>
        <rect x="81" y="7" width="3" height="30" fill="currentColor"></rect>
        <rect x="86" y="3" width="2" height="38" fill="currentColor"></rect>
        <rect x="90" y="0" width="4" height="44" fill="currentColor"></rect>
        <rect x="96" y="6" width="2" height="32" fill="currentColor"></rect>
        <rect x="100" y="2" width="3" height="40" fill="currentColor"></rect>
        <rect x="105" y="8" width="2" height="28" fill="currentColor"></rect>
        <rect x="109" y="4" width="4" height="36" fill="currentColor"></rect>
      </svg>
    </div>
  </footer>
</section>
<script>
  fetch("/api/cv").then(function (r) { return r.json(); }).then(function (data) { renderCv(data); }).catch(function () { return null; });
  function renderCv(data) {
    var headline = document.getElementById("hero-headline");
    if (headline && data.headline) { headline.innerHTML = data.headline; }
    var ing = document.getElementById("cv-ingredients");
    if (ing) {
      ing.innerHTML = "";
      (data.ingredients || []).forEach(function (item) {
        var box = document.createElement("div");
        box.className = "info_stroke";
        box.textContent = item;
        ing.appendChild(box);
      });
    }
    var ch = document.getElementById("cv-chapters");
    if (ch) {
      ch.innerHTML = "";
      (data.chapters || []).forEach(function (c) {
        var box = document.createElement("div");
        box.className = "info_stroke";
        if (c.active) { box.className = "info_stroke info_no_stroke"; }
        box.textContent = c.label;
        ch.appendChild(box);
      });
    }
  }
</script>
</body>
</html>
`;

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const method = request.method;

    if (url.pathname === "/") {
      return new Response(cvPage, {
        status: 200,
        headers: { "Content-Type": "text/html; charset=utf-8" },
      });
    }

    if (url.pathname === "/api/cv" && method === "GET") {
      return Response.json(cv);
    }

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
