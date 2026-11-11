import { cv } from "../cv.js";

const jsonHeaders = { "Content-Type": "application/json; charset=utf-8" };

function jsonResponse(status, body) {
  return new Response(JSON.stringify(body), { status, headers: jsonHeaders });
}

export async function handleApiRequest(request, path) {
  const method = request.method;

  if (path === "/api/cv" && method === "GET") return Response.json(cv);
  if (path === "/api/cv/experience" && method === "GET") return Response.json(cv.experience);
  if (path === "/api/cv/skills" && method === "GET") return Response.json(cv.skills);
  if (path === "/api/cv/education" && method === "GET") return Response.json(cv.education);

  if (path === "/api/contact" && method === "POST") {
    let body = {};
    try {
      body = await request.json();
    } catch {
      // Keep the original endpoint behaviour: malformed or empty JSON becomes {}.
    }
    return jsonResponse(201, {
      status: "created",
      received: body,
      reply: "Within one working day.",
    });
  }

  return jsonResponse(404, { detail: "Not Found" });
}
