const jsonHeaders = { "Content-Type": "application/json" }
function jsonResponse(status, body) {
  return new Response(JSON.stringify(body), { status, headers: jsonHeaders });
}

const cv = {
  identity: {
    name: "Borislav Radushev",
    role: "Business Analyst / PM",
    location: "Varna, Bulgaria",
    phone: "0890 18 27 36",
    email: "netacc@gmail.com",
  },
  headline: "Borislav Radushev<br/>Business Analyst / PM",
  ingredients: ["Data Governance", "Information Security", "Process Automation", "AI"],
  chapters: [
    { index: "01", label: "01. dsk-bank", title: "Business Analyst, Data and Access Governance", period: "Sep 2025 - Present", active: true },
    { index: "02", label: "02. eon-group", title: "Business Analyst, E.ON Home Application", period: "Aug 2020 - Aug 2025", active: false },
    { index: "03", label: "03. duke", title: "Business Analyst, Duke University", period: "Oct 2015 - May 2020", active: false },
    { index: "04", label: "04. taxback", title: "Business Analyst, Tax Return & Refund", period: "2015", active: false },
    { index: "05", label: "05. first-online", title: "Team Lead, First Online Solutions", period: "May 2010 - Dec 2014", active: false },
  ],
  summary: "Business Analyst focusing on data governance and compliance processes in regulated and financial domains. Elicit requirements and map processes, write technical specifications and acceptance criteria for development, testing, and UAT. Work in Agile/Scrum environments using Jira and Confluence for scope, requirements, and UAT tracking. Interested in process automation, information security, data quality and lineage, and AI solutions.",
  skills: {
    skills: ["Elicit Requirements", "User Stories", "Acceptance Criteria", "Process Mapping", "Stakeholder Management", "UAT"],
    tools: ["Jira", "Confluence", "SQL", "Miro"],
    domains: ["Data Governance", "Information Security", "BCBS 239/RDARR", "GDPR", "ISO 27001", "Banking Operations"],
    methodologies: ["Agile", "Scrum", "Kanban"],
  },
  experience: [
    {
      employer: "DSK Bank",
      role: "Business Analyst, Data and Access Governance",
      location: "Varna, Bulgaria",
      period: "Sep 2025 - Present",
      points: [
        "Worked on a centralized IAM solution to meet ECB regulations, with input from business, security and risk.",
        "Coordinated a data pipeline to securely pull data from multiple sources into a single information catalog.",
        "Documented the structure of the information catalog, assigning business, technical, and data ownership in line with BCBS 239.",
      ],
    },
    {
      employer: "E.ON Group",
      role: "Business Analyst, E.ON Home Application",
      location: "International",
      period: "Aug 2020 - Aug 2025",
      points: [
        "Worked on data classification policies, security standards and access rules for GDPR and ISO 27001 requirements, worked with compliance and development teams on data aggregation, security and retention.",
        "Created access policies with information security for Entra ID (Azure AD) for international development teams to keep data secure while meeting EU regulation, documented asset inventories with business owners across countries and white label partners.",
        "Supported compliance audit teams with necessary documentation and setup guides for security configuration.",
      ],
    },
    {
      employer: "The Center for Advanced Hindsight",
      role: "Business Analyst",
      location: "North Carolina, USA",
      period: "Oct 2015 - May 2020",
      points: [
        "Worked with research teams from Duke University on behavioral science proof-of-concept (PoC) programs funded by the U.S. Government.",
        "Documented technical requirements with research teams to communicate with university approval bodies and coordinated development.",
      ],
    },
    {
      employer: "Taxback International",
      role: "Business Analyst",
      location: "Varna, Bulgaria",
      period: "2015",
      points: [
        "Worked with Taxback product owner and a delivery team (IT, design, development, and marketing) on redesigning and rebuilding Taxback core Tax Return and Refund service across all web and mobile platforms.",
        "Was responsible for projects aligned with the new strategy and business objectives. We ensured data compliance with GDPR.",
      ],
    },
    {
      employer: "First Online Solutions",
      role: "Team Lead",
      location: "Varna, Bulgaria",
      period: "May 2010 - Dec 2014",
      points: [
        "Led design and development teams to build additional services for Fantastic Services, including e-commerce solutions, SaaS applications, local search marketing platform.",
        "We developed custom software solutions for the service industry including the CRM system, fleet management tools, and on-demand apps for iOS and Android. First Online Solutions was a top-5 UK service provider across multiple sectors.",
      ],
    },
  ],
  education: [
    { school: "Technical University of Varna", degree: "Automation and Information Technology", period: "2000 - 2004" },
    { school: "Vocational Technical High School", degree: "Technologist Programmer of Numerical Control Systems", period: "1996 - 2000" },
  ],
  certifications: [
    { name: "AWS Cloud", detail: "Architecture, compute, storage, networking, cost optimisation" },
    { name: "Microsoft Entra / Azure AD / Active Directory", detail: "Identity management, access governance" },
    { name: "Apache Atlas", detail: "Metadata management, lineage, classification, and governance" },
    { name: "BCBS 239 / RDARR", detail: "Risk data aggregation and reporting" },
    { name: "CompTIA A+, Network+, Security+", detail: "IT infrastructure, networking, and cybersecurity" },
  ],
};

const cvPage = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>Borislav Radushev | CV</title>
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
  .api_section { position: relative; z-index: 1; padding: 40px 0 110px; }
  .api_console { display: flex; flex-direction: column; gap: 24px; border: 1px solid var(--line); border-radius: 16px; padding: 28px; background: rgba(234, 234, 234, 0.03); }
  .api_curl-label { font-family: var(--font-mono); text-transform: uppercase; letter-spacing: 0.02em; font-size: 11px; color: var(--muted); margin: 0 0 12px; }
  .api_curl-cmd { font-family: var(--font-mono); font-size: 14px; color: var(--text); word-break: break-all; margin: 0; }
  .api_curl-bar { height: 4px; background: var(--line); border-radius: 4px; margin-top: 18px; overflow: hidden; }
  .api_curl-bar-fill { height: 100%; width: 0; background: var(--accent); border-radius: 4px; animation: api-curl 1.6s ease forwards; }
  @keyframes api-curl { to { width: 100%; } }
  .api_response { border: 1px solid var(--line); border-radius: 16px; overflow: hidden; }
  .api_response-head { display: flex; align-items: center; gap: 12px; padding: 16px 20px; border-bottom: 1px solid var(--line); font-family: var(--font-mono); font-size: 12px; }
  .api_path { color: var(--accent); }
  .api_status { margin-left: auto; color: var(--muted); }
  .api_json { margin: 0; padding: 20px; font-family: var(--font-mono); font-size: 12px; line-height: 1.6; overflow: auto; max-height: 480px; white-space: pre; color: var(--text); }
  .api_json .json-key { color: var(--accent); }
  .api_endpoints { display: flex; flex-direction: column; gap: 8px; margin-top: 24px; }
  .api_endpoint { display: flex; align-items: center; gap: 12px; padding: 14px 16px; border: 1px solid var(--line); border-radius: 12px; cursor: pointer; background: transparent; color: var(--text); font-family: var(--font-mono); font-size: 12px; text-align: left; }
  .api_endpoint:hover { border-color: var(--accent); }
  .api_endpoint_active { border-color: var(--accent); background: rgba(198, 251, 80, 0.06); }
  .api_method { font-weight: 700; font-size: 11px; padding: 4px 10px; border-radius: 6px; letter-spacing: 0.05em; }
  .api_method-get { background: var(--accent); color: #070707; }
  .api_method-post { background: var(--accent-2); color: #070707; }
  .api_endpoint-path { color: var(--text); }
  .api_endpoint-status { margin-left: auto; color: var(--muted); }
  html { scroll-behavior: smooth; }
  .info_stroke { text-decoration: none; color: var(--text); display: inline-block; }
  .info_stroke:hover { border-color: var(--accent); }
  .cv_ingredients { position: relative; z-index: 1; padding: 40px 0 110px; }
  .cv_chapters { position: relative; z-index: 1; padding: 40px 0 110px; }
  .chapter-list { display: flex; flex-direction: column; gap: 16px; }
  .chapter { border: 1px solid var(--line); border-radius: 16px; padding: 28px; background: rgba(234, 234, 234, 0.03); }
  .chapter-head { display: flex; flex-wrap: wrap; align-items: baseline; gap: 12px; }
  .chapter_employer { font-size: 28px; margin: 0; }
  .chapter_role { font-family: var(--font-mono); text-transform: uppercase; letter-spacing: 0.02em; font-size: 11px; color: var(--muted); margin: 0; }
  .chapter_period { margin-left: auto; font-family: var(--font-mono); text-transform: uppercase; letter-spacing: 0.02em; font-size: 11px; color: var(--accent); }
  .chapter-points { margin: 18px 0 0; padding-left: 18px; font-size: 15px; line-height: 1.6; color: var(--muted); }
  @media (max-width: 700px) {
    .hero_topbar { padding: 20px 0; }
    .hero_main { padding: 40px 0; }
    .hero_bottom { padding: 24px 0; }
    .hero_bottom-inner { flex-direction: column; align-items: flex-start; }
    .api_section { padding: 24px 0 80px; }
    .api_console { padding: 20px; }
  }
</style>
</head>
<body>
<section class="hero_wrap" id="home">
  <header class="hero_topbar">
    <div class="container hero_topbar-inner">
      <p>©Borislav Radushev — 2026</p>
      <p>prjct by Borislav Radushev</p>
      <p id="cv-topbar-right">Borislav Radushev — GET /cv — 200 OK</p>
    </div>
  </header>
  <main class="hero_main">
    <div class="container hero_copy">
      <p class="hero_eyebrow">the cv</p>
      <h1 class="hero_headline" id="hero-headline">Borislav Radushev<br/>Business Analyst / PM</h1>
      <div class="hero_rows">
        <div class="hero_row">
          <p class="hero_row-label">focus areas</p>
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
      <p class="hero_credits">project by <a href="https://www.linkedin.com/in/ux531/" target="_blank">Borislav Radushev</a></p>
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
<section class="cv_chapters" id="chapters">
  <div class="container">
    <p class="hero_row-label">chapters</p>
    <div class="chapter-list" id="chapter-list"></div>
  </div>
</section>
<section class="api_section" id="api">
  <div class="container">
    <div class="api_console">
      <div>
        <p class="api_curl-label">curl</p>
        <p class="api_curl-cmd">curl -H "Accept: application/json" https://cf.netacc.workers.dev/cv</p>
        <div class="api_curl-bar"><div class="api_curl-bar-fill"></div></div>
      </div>
      <div class="api_response">
        <div class="api_response-head" id="api-response-head">
          <span class="api_method api_method-get">GET</span>
          <span class="api_path" id="api-response-path">/cv</span>
          <span class="api_status">200 OK</span>
        </div>
        <pre class="api_json" id="api-json"></pre>
      </div>
    </div>
    <div class="api_endpoints" id="api-endpoints"></div>
  </div>
</section>
<script>
  var data = null;

  var ENDPOINTS = [
    { method: "GET", path: "/cv", statusText: "200 OK", status: 200, label: "Get full CV" },
    { method: "GET", path: "/cv/experience", statusText: "200 OK", status: 200, label: "Get professional experience" },
    { method: "GET", path: "/cv/skills", statusText: "200 OK", status: 200, label: "Get competencies" },
    { method: "GET", path: "/cv/education", statusText: "200 OK", status: 200, label: "Get education" },
    { method: "POST", path: "/cv/consult", statusText: "201 Created", status: 201, label: "Submit consultation brief" },
  ];

  function renderCv(d) {
    var headline = document.getElementById("hero-headline");
    if (headline && d.headline) { headline.innerHTML = d.headline; }
    var ing = document.getElementById("cv-ingredients");
    if (ing) {
      ing.innerHTML = "";
      (d.ingredients || []).forEach(function (item) {
        var box = document.createElement("a");
        box.className = "info_stroke";
        box.href = "#ingredients";
        box.textContent = item;
        ing.appendChild(box);
      });
    }
    var ch = document.getElementById("cv-chapters");
    if (ch) {
      ch.innerHTML = "";
      (d.chapters || []).forEach(function (c) {
        var box = document.createElement("a");
        box.className = "info_stroke";
        if (c.active) { box.className = "info_stroke info_no_stroke"; }
        box.href = "#chapter-" + c.index;
        box.textContent = c.label;
        ch.appendChild(box);
      });
      var chapterList = document.getElementById("chapter-list");
      if (chapterList) {
        chapterList.innerHTML = "";
        (d.experience || []).forEach(function (job, i) {
          var sec = document.createElement("section");
          sec.className = "chapter";
          sec.id = "chapter-" + String(i + 1).padStart(2, "0");
          var head = document.createElement("div");
          head.className = "chapter-head";
          var emp = document.createElement("h2");
          emp.className = "chapter_employer";
          emp.textContent = job.employer;
          var role = document.createElement("p");
          role.className = "chapter_role";
          role.textContent = job.role;
          var period = document.createElement("p");
          period.className = "chapter_period";
          period.textContent = job.period;
          head.appendChild(emp);
          head.appendChild(role);
          head.appendChild(period);
          sec.appendChild(head);
          var points = document.createElement("div");
          points.className = "chapter-points";
          (job.points || []).forEach(function (pt) {
            var p = document.createElement("p");
            p.textContent = pt;
            points.appendChild(p);
          });
          sec.appendChild(points);
          chapterList.appendChild(sec);
        });
      }
      var ingSection = document.getElementById("cv-ingredients-section");
      if (ingSection) {
        ingSection.innerHTML = "";
        (d.ingredients || []).forEach(function (item) {
          var box = document.createElement("div");
          box.className = "info_stroke";
          box.textContent = item;
          ingSection.appendChild(box);
        });
      }
    }
    var right = document.getElementById("cv-topbar-right");
    if (right && d.identity) { right.textContent = d.identity.name + " - GET /cv - 200 OK"; }
  }

  function bodyFor(ep) {
    if (ep.path === "/cv") { return data; }
    if (ep.path === "/cv/experience") { return data.experience; }
    if (ep.path === "/cv/skills") { return data.skills; }
    if (ep.path === "/cv/education") { return data.education; }
    return { status: "created", data: { name: data.identity.name, email: data.identity.email } };
  }

  function renderJson(ep) {
    var pre = document.getElementById("api-json");
    var pretty = JSON.stringify(bodyFor(ep), null, 2);
    var lines = pretty.split(String.fromCharCode(10));
    var html = "";
    for (var i = 0; i < lines.length; i++) {
      var line = lines[i];
      var idx = line.indexOf(String.fromCharCode(34) + ":"); 
      if (idx > -1) {
        var key = line.slice(0, idx + 2);
        var val = line.slice(idx + 2);
        html = html + '<span class="json-key">' + key + '</span>' + val;
      } else {
        html = html + line;
      }
      if (i < lines.length - 1) { html = html + String.fromCharCode(10); }
    }
    pre.innerHTML = html;
  }

  function renderEndpoints() {
    var host = document.getElementById("api-endpoints");
    host.innerHTML = "";
    ENDPOINTS.forEach(function (ep) {
      var row = document.createElement("div");
      row.className = "api_endpoint";
      if (ep.active) { row.className = "api_endpoint api_endpoint_active"; }
      var method = document.createElement("span");
      method.className = "api_method";
      if (ep.method === "GET") { method.className = "api_method api_method-get"; } else { method.className = "api_method api_method-post"; }
      method.textContent = ep.method;
      var path = document.createElement("span");
      path.className = "api_endpoint-path";
      path.textContent = ep.path;
      var label = document.createElement("span");
      label.className = "api_endpoint-label";
      label.textContent = ep.label;
      var status = document.createElement("span");
      status.className = "api_endpoint-status";
      status.textContent = ep.statusText;
      row.appendChild(method);
      row.appendChild(path);
      row.appendChild(label);
      row.appendChild(status);
      row.addEventListener("click", function () {
        var rows = host.querySelectorAll(".api_endpoint");
        for (var j = 0; j < rows.length; j++) { rows[j].classList.remove("api_endpoint_active"); }
        row.classList.add("api_endpoint_active");
        renderJson(ep);
        var head = document.getElementById("api-response-head");
        var badge = ep.method === "GET" ? "api_method api_method-get" : "api_method api_method-post";
        if (head) {
          head.innerHTML = '<span class="' + badge + '">' + ep.method + '</span><span class="api_path">' + ep.path + '</span><span class="api_status">' + ep.statusText + '</span>';
        }
      });
      host.appendChild(row);
    });
    if (ENDPOINTS.length > 0) {
      var first = host.querySelector(".api_endpoint");
      if (first) { first.classList.add("api_endpoint_active"); }
      renderJson(ENDPOINTS[0]);
      var head = document.getElementById("api-response-head");
      if (head) {
        head.innerHTML = '<span class="api_method api_method-get">GET</span><span class="api_path">/cv</span><span class="api_status">200 OK</span>';
      }
    }
  }

  fetch("/api/cv").then(function (r) { return r.json(); }).then(function (d) { data = d; renderCv(d); renderEndpoints(); }).catch(function () { return null; });
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

    return jsonResponse(404, { detail: "Not Found" });
  },
};
