import { cvPage } from "./views/cv.js";
import { handleApiRequest } from "./api/routes.js";

export default {
  async fetch(request) {
    const url = new URL(request.url);
    const path = url.pathname;

    if ((path === "/" || path === "/cv") && request.method === "GET") {
      return new Response(cvPage, {
        headers: { "Content-Type": "text/html; charset=utf-8" },
      });
    }

    return handleApiRequest(request, path);
  },
};
