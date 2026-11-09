var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// src/index.js
var jsonHeaders = { "Content-Type": "application/json" };
function jsonResponse(status, body) {
  return new Response(JSON.stringify(body), { status, headers: jsonHeaders });
}
__name(jsonResponse, "jsonResponse");
var cv = {
  identity: {
    name: "Borislav Radushev",
    role: "Business Analyst / PM",
    location: "Varna, Bulgaria",
    phone: "0890 18 27 36",
    phoneIntl: "+359890182736",
    email: "netacc@gmail.com",
    linkedin: "https://www.linkedin.com/in/ux531/"
  },
  hero: {
    user_name: "BORISLAV RADUSHEV",
    kicker: "CV \xB7 Varna, BG \xB7 GET /api/cv 200 OK",
    title: "The requirement runs the work.",
    lead: "Business analyst for regulated data. I map the process, write the specification, set the acceptance criteria, and stay until UAT signs off. Banks, energy, research, tax."
  },
  stats: [
    { label: "Now", value: "DSK Bank \u2014 Data & Access Governance" },
    { label: "Based", value: "Varna, Bulgaria" },
    { label: "Record", value: "15+ years \xB7 5 roles" },
    { label: "Frameworks", value: "BCBS 239 \xB7 GDPR \xB7 ISO 27001" }
  ],
  summary: "Business Analyst focusing on data governance and compliance processes in regulated and financial domains. Elicit requirements and map processes, write technical specifications and acceptance criteria for development, testing, and UAT. Work in Agile/Scrum environments using Jira and Confluence for scope, requirements, and UAT tracking. Interested in process automation, information security, data quality and lineage, and AI solutions.",
  skills: {
    skills: ["Elicit Requirements", "User Stories", "Acceptance Criteria", "Process Mapping", "Stakeholder Management", "UAT"],
    tools: ["Jira", "Confluence", "SQL", "Miro"],
    domains: ["Data Governance", "Information Security", "BCBS 239/RDARR", "GDPR", "ISO 27001", "Banking Operations"],
    methodologies: ["Agile", "Scrum", "Kanban"]
  },
  services: [
    {
      n: "01",
      title: "Requirement elicitation",
      sub: "Stories, criteria, process maps",
      body: "I run the workshops, map the current process, and write specifications that development, testing and UAT can all work from without a second interpretation.",
      seen: [
        { label: "DSK Bank", job: "01" },
        { label: "E.ON", job: "02" },
        { label: "Taxback", job: "04" }
      ]
    },
    {
      n: "02",
      title: "Data governance & lineage",
      sub: "Catalog, ownership, BCBS 239",
      body: "I define what data is, who owns it and where it flows. Business, technical and data ownership assigned, lineage documented, evidence ready for the regulator.",
      seen: [{ label: "DSK Bank", job: "01" }]
    },
    {
      n: "03",
      title: "Compliance & access governance",
      sub: "GDPR, ISO 27001, IAM, Entra ID",
      body: "I turn regulation into access rules and configuration guides, working alongside security and risk so the controls survive audit and international teams.",
      seen: [
        { label: "E.ON", job: "02" },
        { label: "DSK Bank", job: "01" }
      ]
    },
    {
      n: "04",
      title: "Agile delivery & UAT",
      sub: "Scrum, Kanban, Jira, Confluence",
      body: "Scope, backlog and acceptance tracked in one place. I stay through testing until UAT signs off, not until the document is handed over.",
      seen: [
        { label: "E.ON", job: "02" },
        { label: "DSK Bank", job: "01" }
      ]
    },
    {
      n: "05",
      title: "Analysis tooling & automation",
      sub: "SQL, Miro, data quality, AI",
      body: "I query the source myself, prototype the flow in Miro, and look for the step that should be automated before it is documented again.",
      seen: [
        { label: "First Online", job: "05" },
        { label: "Taxback", job: "04" }
      ]
    }
  ],
  experience: [
    {
      employer: "DSK Bank",
      role: "Business Analyst, Data and Access Governance",
      location: "Varna, Bulgaria",
      period: "Sep 2025 \u2014 Present",
      tags: ["dsk-bank", "data-governance", "current"],
      points: [
        "Worked on a centralized IAM solution to meet ECB regulations, with input from business, security and risk.",
        "Coordinated a data pipeline to securely pull data from multiple sources into a single information catalog.",
        "Documented the structure of the information catalog, assigning business, technical, and data ownership in line with BCBS 239."
      ],
      proof: "IAM scope covering ECB requirements; information catalog ownership mapped to BCBS 239."
    },
    {
      employer: "E.ON Group",
      role: "Business Analyst, E.ON Home Application",
      location: "International",
      period: "Aug 2020 \u2014 Aug 2025",
      tags: ["eon-group", "infosec"],
      points: [
        "Worked on data classification policies, security standards and access rules for GDPR and ISO 27001 requirements, with compliance and development teams on data aggregation, security and retention.",
        "Created access policies with information security for Entra ID (Azure AD) for international development teams, and documented asset inventories with business owners across countries and white label partners.",
        "Supported compliance audit teams with the documentation and setup guides for security configuration."
      ],
      proof: "Access policy for Entra ID across international teams; GDPR and ISO 27001 evidence packs for audit."
    },
    {
      employer: "The Center for Advanced Hindsight",
      role: "Business Analyst",
      location: "Duke University \xB7 North Carolina, USA",
      period: "Oct 2015 \u2014 May 2020",
      tags: ["duke", "research"],
      points: [
        "Worked with research teams from Duke University on behavioral science proof-of-concept programs funded by the U.S. Government.",
        "Documented technical requirements with research teams to communicate with university approval bodies and coordinated development."
      ],
      proof: "Requirements for U.S.-government-funded behavioural science PoCs; approval bodies signed off, development coordinated."
    },
    {
      employer: "Taxback International",
      role: "Business Analyst",
      location: "Varna, Bulgaria",
      period: "2015",
      tags: ["taxback", "product"],
      points: [
        "Worked with the product owner and a delivery team (IT, design, development and marketing) on redesigning and rebuilding the core Tax Return and Refund service across web and mobile.",
        "Responsible for projects aligned with the new strategy and business objectives; data compliance with GDPR built into delivery."
      ],
      proof: "Core tax return and refund service rebuilt across web and mobile; GDPR built into the delivery."
    },
    {
      employer: "First Online Solutions",
      role: "Team Lead",
      location: "Varna, Bulgaria",
      period: "May 2010 \u2014 Dec 2014",
      tags: ["first-online", "team-lead"],
      points: [
        "Led design and development teams to build additional services for Fantastic Services, including e-commerce solutions, SaaS applications and a local search marketing platform.",
        "Developed custom software for the service industry: CRM, fleet management tools, and on-demand apps for iOS and Android."
      ],
      proof: "CRM, fleet and on-demand apps shipped; top-5 UK service provider across multiple sectors."
    }
  ],
  education: [
    { school: "Technical University of Varna", degree: "Automation and Information Technology", period: "2000 \u2014 2004" },
    { school: "Vocational Technical High School", degree: "Technologist Programmer of Numerical Control Systems", period: "1996 \u2014 2000" }
  ],
  certifications: [
    { name: "AWS Cloud", detail: "Architecture, compute, storage, networking, cost optimisation" },
    { name: "Microsoft Entra / Azure AD / Active Directory", detail: "Identity management, access governance" },
    { name: "Apache Atlas", detail: "Metadata management, lineage, classification and governance" },
    { name: "BCBS 239 / RDARR", detail: "Risk data aggregation and reporting" },
    { name: "CompTIA A+, Network+, Security+", detail: "IT infrastructure, networking and cybersecurity" }
  ]
};
var cvPage = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>Borislav Radushev \u2014 Business Analyst / PM</title>
<meta name="description" content="CV of Borislav Radushev, business analyst for regulated data. Data governance, compliance, access governance and Agile delivery. Served as JSON from Cloudflare Workers."/>
<script>try{var t=localStorage.getItem("br-theme");if(t)document.documentElement.setAttribute("data-theme",t)}catch(e){}<\/script>
<style>
  /* ---------- theme tokens ---------- */
  :root {
    color-scheme: dark;
    --bg: #080808;
    --bg-2: #0e0e0e;
    --text: #ececec;
    --muted: #8a8a8a;
    --line: rgba(236, 236, 236, 0.16);
    --accent: #c6fb50;
    --accent-2: #ffb700;
    --dust: #7A7B7A;
    --on-accent: #080808;
    --sans: "Helvetica Neue", Helvetica, Arial, system-ui, sans-serif;
    --mono: ui-monospace, "SF Mono", SFMono-Regular, Menlo, Consolas, monospace;
    --pad: clamp(20px, 4vw, 56px);
  }
  @media (prefers-color-scheme: light) {
    :root:not([data-theme="dark"]) {
      color-scheme: light;
      --bg: #f4f3ef;
      --bg-2: #eae8e2;
      --text: #121212;
      --muted: #6f6f69;
      --line: rgba(18, 18, 18, 0.16);
      --accent: #fbf250;
      --accent-2: #ffb700;
      --on-accent: #f4f3ef;
    }
  }
  :root[data-theme="light"] {
    color-scheme: light;
    --bg: #f4f3ef;
    --bg-2: #eae8e2;
    --text: #121212;
    --muted: #6f6f69;
    --line: rgba(18, 18, 18, 0.16);
    --accent: #dcb837;
    --accent-2: #945300;
    --on-accent: #f4f3ef;
  }

  /* ---------- base ---------- */
  * { box-sizing: border-box; }
  html { scroll-behavior: smooth; scroll-padding-top: 84px; }
  body {
    margin: 0;
    background: var(--bg);
    color: var(--text);
    font-family: var(--sans);
    font-size: 16px;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  a { color: inherit; }
  canvas { display: block; }
  ::selection { background: var(--accent); color: var(--on-accent); }
  :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; }
  .u-mono { font-family: var(--mono); font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase; }
  .container { width: min(calc(100% - 2 * var(--pad)), 1320px); margin-inline: auto; }
  .skip { position: absolute; left: -9999px; }
  .skip:focus { left: 16px; top: 16px; z-index: 100; padding: 10px 14px; background: var(--bg); border: 1px solid var(--line); }

  /* ---------- header ---------- */
  .hdr { position: fixed; top: 0; left: 0; right: 0; z-index: 50; background: var(--bg); border-bottom: 1px solid var(--line); }
  .hdr__in { display: flex; align-items: center; gap: 24px; padding-block: 14px; }
  .hdr__brand { font-family: var(--mono); font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase; text-decoration: none; white-space: nowrap; }
  .hdr__brand span { color: var(--accent); }
  .hdr__tc { display: flex; align-items: center; gap: 10px; margin: 0; font-family: var(--mono); font-size: 10px; letter-spacing: 0.06em; text-transform: uppercase; color: var(--muted); }
  .hdr__tc b { color: var(--text); font-weight: 400; font-variant-numeric: tabular-nums; }
  .nav { display: flex; align-items: center; gap: clamp(12px, 2vw, 28px); margin-left: auto; }
  .nav a, .theme {
    padding: 4px 0;
    border: 0;
    border-bottom: 1px solid transparent;
    background: none;
    color: var(--muted);
    font-family: var(--mono);
    font-size: 10px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    text-decoration: none;
    cursor: pointer;
    white-space: nowrap;
  }
  .nav a:hover, .nav a[aria-current="true"] { color: var(--text); border-bottom-color: var(--text); }
  .theme { padding: 5px 12px; border: 1px solid var(--line); border-radius: 999px; color: var(--text); }
  .theme:hover { border-color: var(--accent); color: var(--accent); }

  /* ---------- hero ---------- */
  .hero {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    min-height: 100svh;
    padding: 150px 0 0;
    border-bottom: 1px solid var(--line);
  }
  .user_name { font-size: 3rem; color: var(--text); font-weight: 300; }  
  .kicker { margin: 0 0 28px; color: var(--accent); }
  .hero h1 {
    max-width: 15ch;
    margin: 0 0 30px;
    font-size: clamp(2.5rem, 7.6vw, 6.5rem);
    font-weight: 500;
    line-height: 0.94;
    letter-spacing: -0.045em;
    text-wrap: balance;
  }
  .hero__lead { max-width: 60ch; margin: 0 0 36px; color: var(--muted); font-size: clamp(1rem, 1.5vw, 1.25rem); }
  .cta { display: flex; flex-wrap: wrap; gap: 10px; }
  .btn {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 13px 22px;
    border: 1px solid var(--line);
    border-radius: 999px;
    font-family: var(--mono);
    font-size: 10px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    text-decoration: none;
    transition: color 0.2s ease, border-color 0.2s ease, background 0.2s ease;
  }
  .btn:hover { color: var(--accent); border-color: var(--accent); }
  .btn--fill { background: var(--accent); border-color: var(--accent); color: var(--on-accent); }
  .btn--fill:hover { background: var(--text); border-color: var(--text); color: var(--bg); }
  .stats { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); margin: clamp(48px, 7vw, 80px) 0 0; padding: 0; }
  .stats > div { padding: 18px 20px 24px 0; border-top: 1px solid var(--line); }
  .stats > div + div { padding-left: 20px; border-left: 1px solid var(--line); }
  .stats dt { margin: 0 0 8px; font-family: var(--mono); font-size: 9px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted); }
  .stats dd { margin: 0; font-size: 14px; line-height: 1.4; }

  /* ---------- sections ---------- */
  .sec { padding: clamp(64px, 9vw, 120px) 0; border-bottom: 1px solid var(--line); }
  .cue { display: flex; align-items: center; gap: 12px; margin: 0 0 18px; color: var(--muted); }
  .cue::before { content: ""; flex: none; width: 32px; height: 1px; background: var(--accent); }
  .sec h2 {
    max-width: 22ch;
    margin: 0 0 14px;
    font-size: clamp(1.8rem, 4.4vw, 3.4rem);
    font-weight: 500;
    line-height: 1.02;
    letter-spacing: -0.035em;
    text-wrap: balance;
  }
  .sec__sub { max-width: 60ch; margin: 0 0 clamp(32px, 5vw, 56px); color: var(--muted); font-size: 15px; }

  /* ---------- log ---------- */
  .log { list-style: none; margin: 0; padding: 0; }
  .log__row { display: grid; grid-template-columns: 160px minmax(0, 1fr); gap: clamp(16px, 3vw, 48px); padding: clamp(26px, 3.5vw, 40px) 0; border-top: 1px solid var(--line); }
  .log__row:last-child { border-bottom: 1px solid var(--line); }
  .log__meta { font-family: var(--mono); font-size: 10px; letter-spacing: 0.06em; text-transform: uppercase; color: var(--muted); }
  .log__n { display: block; margin-bottom: 12px; font-size: 12px; color: var(--accent); }
  .log__date { display: block; margin-bottom: 12px; color: var(--text); }
  .log__tags { display: flex; flex-wrap: wrap; gap: 5px; }
  .chip { display: inline-block; padding: 3px 7px; border: 1px solid var(--line); border-radius: 3px; font-family: var(--mono); font-size: 9px; letter-spacing: 0.06em; text-transform: uppercase; color: var(--muted); }
  .chip--on { border-color: var(--accent); color: var(--accent); }
  .log__body h3 { margin: 0 0 6px; font-size: clamp(1.3rem, 2.2vw, 1.9rem); font-weight: 500; letter-spacing: -0.02em; }
  .log__role { margin: 0 0 18px; font-family: var(--mono); font-size: 10px; letter-spacing: 0.06em; text-transform: uppercase; color: var(--muted); }
  .log__body ul { display: grid; gap: 10px; max-width: 72ch; margin: 0 0 18px; padding: 0; list-style: none; }
  .log__body li { position: relative; padding-left: 20px; color: var(--muted); font-size: 18px; line-height: 1.55; }
  .log__body li::before { content: "\u2014"; position: absolute; left: 0; color: var(--accent); }
  .proof { max-width: 82ch; margin: 0; padding-top: 14px; border-top: 1px dashed var(--line); font-family: var(--mono); font-size: 11px; line-height: 1.7; letter-spacing: 0.01em; color: var(--muted); }
  .proof b { color: var(--accent); font-weight: 500; font-size: 10px; letter-spacing: 0.08em; text-transform: uppercase; }
  .proof a { color: var(--text); text-decoration: none; border-bottom: 1px solid var(--line); }
  .proof a:hover { color: var(--accent); border-color: var(--accent); }

  /* ---------- services ---------- */
  .services { list-style: none; margin: 0; padding: 0; }
  .service { display: grid; grid-template-columns: 160px minmax(0, 1fr); gap: clamp(16px, 3vw, 48px); padding: clamp(24px, 3vw, 36px) 0; border-top: 1px solid var(--line); }
  .service:last-child { border-bottom: 1px solid var(--line); }
  .service__n { font-family: var(--mono); font-size: 12px; letter-spacing: 0.06em; color: var(--accent); }
  .service h3 { margin: 0 0 4px; font-size: clamp(1.2rem, 2vw, 1.7rem); font-weight: 500; letter-spacing: -0.02em; }
  .service__sub { margin: 0 0 14px; font-family: var(--mono); font-size: 10px; letter-spacing: 0.06em; text-transform: uppercase; color: var(--muted); }
  .service p { max-width: 72ch; margin: 0 0 16px; color: var(--muted); font-size: 15px; }

  /* ---------- skill groups ---------- */
  .groups { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: clamp(20px, 3vw, 40px); margin: clamp(36px, 5vw, 56px) 0 0; }
  .group h3 { margin: 0 0 14px; font-family: var(--mono); font-size: 9px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted); }
  .group ul { display: flex; flex-wrap: wrap; gap: 6px; margin: 0; padding: 0; list-style: none; }
  .group li { padding: 4px 8px; border: 1px solid var(--line); border-radius: 3px; font-family: var(--mono); font-size: 9px; letter-spacing: 0.05em; text-transform: uppercase; }

  /* ---------- api ---------- */
  .explorer { display: grid; grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr); gap: clamp(24px, 4vw, 56px); align-items: start; }
  .curl { margin: 0 0 6px; font-family: var(--mono); font-size: 12px; color: var(--muted); word-break: break-all; }
  .curl b { color: var(--text); font-weight: 400; }
  .bar { height: 2px; margin: 0 0 28px; background: var(--line); overflow: hidden; }
  .bar span { display: block; width: 0; height: 100%; background: var(--accent); animation: load 1.4s ease forwards; }
  @keyframes load { to { width: 100%; } }
  .endpoints { display: flex; flex-direction: column; }
  .endpoint {
    display: grid;
    grid-template-columns: 46px minmax(0, 1fr) auto;
    gap: 10px;
    align-items: baseline;
    width: 100%;
    padding: 13px 0;
    border: 0;
    border-top: 1px solid var(--line);
    background: none;
    color: inherit;
    font-family: var(--mono);
    font-size: 11px;
    letter-spacing: 0.04em;
    text-align: left;
    cursor: pointer;
  }
  .endpoint:last-child { border-bottom: 1px solid var(--line); }
  .endpoint:hover .endpoint__path, .endpoint[aria-pressed="true"] .endpoint__path { color: var(--accent); }
  .endpoint__path { color: var(--text); overflow-wrap: anywhere; }
  .endpoint__label { margin-left: 10px; color: var(--muted); font-size: 10px; }
  .method { font-size: 9px; letter-spacing: 0.08em; text-transform: uppercase; }
  .method--get { color: var(--accent); }
  .method--post { color: var(--accent-2); }
  .status { color: var(--muted); font-size: 10px; text-transform: uppercase; letter-spacing: 0.04em; }
  .response { border: 1px solid var(--line); border-radius: 6px; overflow: hidden; background: var(--bg-2); }
  .response__head { display: flex; align-items: center; gap: 10px; padding: 12px 16px; border-bottom: 1px solid var(--line); font-family: var(--mono); font-size: 10px; letter-spacing: 0.06em; text-transform: uppercase; }
  .response__head .status { margin-left: auto; color: var(--accent); }
  .json { max-height: 440px; margin: 0; padding: 16px; overflow: auto; font-family: var(--mono); font-size: 11px; line-height: 1.75; white-space: pre; tab-size: 2; }
  .jk { color: var(--accent); }

  /* ---------- record ---------- */
  .record { display: grid; grid-template-columns: 1fr 1fr; gap: clamp(28px, 5vw, 64px); margin-top: 32px; }
  .record h3 { margin: 0 0 8px; font-family: var(--mono); font-size: 9px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted); }
  .rec-item { display: grid; grid-template-columns: 104px minmax(0, 1fr); gap: 16px; padding: 16px 0; border-top: 1px solid var(--line); }
  .rec-item:last-child { border-bottom: 1px solid var(--line); }
  .rec-item__when { font-family: var(--mono); font-size: 10px; letter-spacing: 0.05em; color: var(--muted); }
  .rec-item h4 { margin: 0 0 3px; font-size: 15px; font-weight: 500; letter-spacing: -0.01em; }
  .rec-item p { margin: 0; color: var(--muted); font-size: 13px; line-height: 1.5; }

  /* ---------- contact ---------- */
  .contact__h { max-width: 20ch; }
  .contact__mail { display: none; align-items: center; gap: 14px; margin: 0 0 clamp(32px, 5vw, 56px); padding-bottom: 6px; border-bottom: 1px solid var(--line); font-size: clamp(1.4rem, 3.4vw, 2.6rem); letter-spacing: -0.03em; text-decoration: none; }
  .contact__mail span { color: var(--accent); }
  .contact__mail:hover { color: var(--accent); border-color: var(--accent); }
  .contact__dl { max-width: 760px; margin: 0; }
  .contact__row { display: grid; grid-template-columns: 160px minmax(0, 1fr); gap: 24px; padding: 16px 0; border-top: 1px solid var(--line); }
  .contact__row:last-child { border-bottom: 1px solid var(--line); }
  .contact__row dt { font-family: var(--mono); font-size: 9px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted); }
  .contact__row dd { margin: 0; font-size: 15px; }
  .contact__row a { text-decoration: none; border-bottom: 1px solid var(--line); }
  .contact__row a:hover { color: var(--accent); border-color: var(--accent); }

  /* ---------- footer ---------- */
  .ftr { display: flex; flex-wrap: wrap; justify-content: space-between; gap: 14px; padding: 26px 0 34px; font-family: var(--mono); font-size: 9px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted); }
  .ftr a { color: var(--text); text-decoration: none; }
  .ftr a:hover { color: var(--accent); }

  /* ---------- cursor + trail ---------- */
  .cur {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 9999;
    display: grid;
    place-items: center;
    width: 27px;
    height: 27px;
    margin: -13.5px 0 0 -13.5px;
    border: 1px solid var(--accent);
    border-radius: 50%;
    pointer-events: none;
    opacity: 0;
    mix-blend-mode: normal;
    transition: width 0.2s ease, height 0.2s ease, margin 0.2s ease, opacity 0.2s ease;
  }
  .cur::before, .cur::after { content: ""; position: absolute; top: 50%; left: 50%; background: var(--accent); transform: translate(-50%, -50%); }
  .cur::before { width: 1px; height: 7px; }
  .cur::after { width: 7px; height: 1px; }
  body.cursor-on .cur { opacity: 1; }
  body.cursor-on, body.cursor-on a, body.cursor-on button { cursor: none; }
  body.cursor-on .cur--hot { width: 45px; height: 45px; margin: -22.5px 0 0 -22.5px; }
  #trail { position: fixed; inset: 0; z-index: 9998; width: 100%; height: 100%; pointer-events: none; }

  /* ---------- responsive ---------- */
  @media (max-width: 900px) {
    .explorer { grid-template-columns: 1fr; }
    .groups { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .hdr__tc { display: none; }
  }
  @media (max-width: 720px) {
    html { scroll-padding-top: 104px; }
    .hdr__in { flex-wrap: wrap; gap: 6px 16px; padding-block: 10px; }
    .nav { width: 100%; margin-left: 0; gap: 18px; overflow-x: auto; padding-bottom: 2px; }
    .nav::-webkit-scrollbar { display: none; }
    .hero { padding-top: 130px; }
    .stats { grid-template-columns: repeat(2, minmax(0, 1fr)); }
    .stats > div { padding: 16px 16px 20px 0; }
    .stats > div:nth-child(odd) { padding-left: 0; border-left: 0; }
    .stats > div:nth-child(even) { padding-left: 16px; border-left: 1px solid var(--line); }
    .log__row, .service { grid-template-columns: 1fr; gap: 14px; }
    .log__meta { display: flex; flex-wrap: wrap; align-items: baseline; gap: 10px; }
    .log__n, .log__date { display: inline-block; margin-bottom: 0; }
    .log__tags { width: 100%; }
    .record { grid-template-columns: 1fr; }
    .rec-item { grid-template-columns: 1fr; gap: 4px; }
    .contact__row { grid-template-columns: 1fr; gap: 4px; }
    .endpoint__label { display: none; }
  }
  @media (prefers-reduced-motion: reduce) {
    html { scroll-behavior: auto; }
    .bar span { width: 100%; animation: none; }
    .cur, #trail { display: none; }
  }
  @media print {
    :root, :root[data-theme="light"] {
      --bg: #fff;
      --bg-2: #fff;
      --text: #000;
      --muted: #444;
      --line: rgba(0, 0, 0, 0.25);
      --accent: #000;
      --accent-2: #000;
      --on-accent: #fff;
    }
    .hdr, .cta, .cur, #trail, #api, .skip { display: none !important; }
    body { font-size: 9.5pt; line-height: 2.7; }
    .container { width: 100%; }

    /* compact masthead instead of a full-screen hero */
    .hero { display: block; min-height: 0; padding: 0 0 9pt; }
    .user_name { margin: 0; font-family: var(--mono); font-size: 20pt; line-height: 1.1; letter-spacing: 0.08em; }
    .kicker { margin: 5pt 0 10pt; font-size: 7.5pt; }
    .hero h1 { max-width: none; margin: 0 0 6pt; font-size: 23pt; line-height: 1.04; letter-spacing: -0.03em; }
    .hero__lead { max-width: none; margin: 0 0 10pt; font-size: 9.5pt; }
    .stats { margin: 0; }
    .stats > div { padding: 5pt 8pt 5pt 0; }
    .stats > div + div { padding-left: 8pt; }
    .stats dt { margin: 0 0 2pt; font-size: 6.5pt; }
    .stats dd { font-size: 8.5pt; }

    /* sections: no page-sized padding */
    .sec { padding: 10pt 0 0; border-bottom: 0; }
    .cue { margin: 0 0 4pt; font-size: 7pt; }
    .cue::before { width: 18pt; }
    .sec h2 { max-width: none; margin: 0 0 2pt; font-size: 15.5pt; line-height: 1.06; }
    .sec__sub { max-width: none; margin: 0 0 6pt; font-size: 8.5pt; }
    .cue, .sec h2, .sec__sub { break-after: avoid; }

    /* log: single column in print so entries can flow across pages */
    .log__row { display: block; padding: 6pt 0; }
    .log__meta { display: flex; flex-wrap: wrap; align-items: baseline; gap: 8pt; margin-bottom: 4pt; }
    .log__n { display: inline; margin: 0; font-size: 8pt; }
    .log__date { display: inline; margin: 0; font-size: 7.5pt; }
    .log__tags { display: inline-flex; gap: 3pt; }
    .chip { padding: 1pt 4pt; font-size: 6pt; }
    .log__body h3 { font-size: 12pt; }
    .log__role { margin-bottom: 4pt; font-size: 7pt; }
    .log__body ul { gap: 3pt; margin-bottom: 4pt; }
    .log__body li { padding-left: 12pt; font-size: 9pt; line-height: 1.4; }
    .proof { padding-top: 4pt; font-size: 8pt; line-height: 1.45; }
    .proof b { font-size: 6.5pt; }

    /* services */
    .service { display: block; padding: 6pt 0; }
    .service__n { display: block; margin-bottom: 2pt; font-size: 8pt; }
    .service h3 { font-size: 11.5pt; }
    .service__sub { margin-bottom: 3pt; font-size: 7pt; }
    .service p { margin-bottom: 4pt; font-size: 9pt; }
    .groups { grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 10pt; margin-top: 8pt; }
    .group h3 { margin-bottom: 3pt; font-size: 6.5pt; }
    .group li { padding: 1pt 3pt; font-size: 6pt; }

    /* record */
    .record { gap: 18pt; margin-top: 6pt; }
    .record h3 { margin-bottom: 2pt; font-size: 7pt; }
    .rec-item { grid-template-columns: 62pt minmax(0, 1fr); gap: 8pt; padding: 5pt 0; break-inside: avoid; }
    .rec-item__when { font-size: 7pt; }
    .rec-item h4 { font-size: 8.5pt; }
    .rec-item p { font-size: 7.5pt; }

    /* contact */
    .contact__mail { margin-bottom: 6pt; padding-bottom: 3pt; font-size: 15pt; }
    .contact__row { grid-template-columns: 88pt 1fr; gap: 10pt; padding: 4pt 0; break-inside: avoid; }
    .contact__row dt { font-size: 7pt; }
    .contact__row dd { font-size: 9pt; }
    .ftr { padding: 8pt 0 0; font-size: 6.5pt; break-before: avoid; }

    /* flow: let long entries continue, never strand a heading */
    .log__row, .service { break-inside: auto; }
    .log__meta, .log__body h3, .log__role, .service h3, .service__sub { break-after: avoid; }
    p, li { orphans: 2; widows: 2; }
    a { color: inherit; text-decoration: none; }
  }
  @page { size: A4; margin: 11mm 12mm; }

</style>
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<canvas id="trail" aria-hidden="true"></canvas>
<div class="cur" id="cur" aria-hidden="true"></div>

<header class="hdr">
  <div class="container hdr__in">
    <a class="hdr__brand" href="#home">BR<span>\xB7</span>RADUSHEV</a>
    <p class="hdr__tc"><b data-clock-tc>00:00:00:00</b><span>Sofia \xB7 EET</span></p>
    <nav class="nav" aria-label="Sections">
      <a href="#home">Index</a>
      <a href="#log">Log</a>
      <a href="#skills">Skills</a>
      <a href="#api">API</a>
      <a href="#contact">Contact</a>
      <button class="theme" id="theme-toggle" type="button">Light</button>
    </nav>
  </div>
</header>

<main id="main">
  <section class="hero" id="home">
    <div class="container">
      <p class="user_name u-sans">BORISLAV RADUSHEV</p>
      <p class="kicker u-mono" id="hero-kicker">CV \xB7 2026.11 \xB7 Varna, BG \xB7 GET /api/cv 200 OK</p>
      <h1 id="hero-title">The requirement runs the work.</h1>
      <p class="hero__lead" id="hero-lead">Business analyst for regulated data. I map the process, write the specification, set the acceptance criteria, and stay until UAT signs off. Banks, energy, research, tax.</p>
      <div class="cta">
        <a class="btn btn--fill" href="#log">The record</a>
        <a class="btn" href="#api">Query the API</a>
      </div>
      <dl class="stats" id="hero-stats"></dl>
    </div>
  </section>

  <section class="sec" id="log">
    <div class="container">
      <p class="cue u-mono">CUE 01 \xB7 Experience \xB7 5 entries</p>
      <h2>What was scoped, what shipped, and what it proved.</h2>
      <p class="sec__sub">Every role is a record: the brief, the work, and the outcome that backs it.</p>
      <ol class="log" id="log-list"></ol>
    </div>
  </section>

  <section class="sec" id="skills">
    <div class="container">
      <p class="cue u-mono">CUE 02 \xB7 Capabilities</p>
      <h2>What I am hired for.</h2>
      <p class="sec__sub">Five capabilities. Each one comes with an engagement behind it, because a method without a delivery is just a sentence.</p>
      <ol class="services" id="services-list"></ol>
      <div class="groups" id="skill-groups"></div>
    </div>
  </section>

  <section class="sec" id="api">
    <div class="container">
      <p class="cue u-mono">CUE 03 \xB7 API</p>
      <h2>Every claim is an endpoint.</h2>
      <p class="sec__sub">This CV is served as JSON by the Worker. Pick an endpoint and read the response \u2014 the same data that renders the page above.</p>
      <div class="explorer">
        <div>
          <p class="curl"><b>curl</b> https://cf.netacc.workers.dev/api/cv</p>
          <div class="bar"><span></span></div>
          <div class="endpoints" id="api-endpoints"></div>
        </div>
        <div class="response">
          <div class="response__head" id="api-head">
            <span class="method method--get">GET</span>
            <span class="endpoint__path" id="api-path">/api/cv</span>
            <span class="status">200 OK</span>
          </div>
          <pre class="json" id="api-json"></pre>
        </div>
      </div>
    </div>
  </section>

  <section class="sec" id="record">
    <div class="container">
      <p class="cue u-mono">CUE 04 \xB7 Record</p>
      <h2>Education and certification.</h2>
      <div class="record">
        <div>
          <h3>Education</h3>
          <div id="edu-list"></div>
        </div>
        <div>
          <h3>Certification</h3>
          <div id="cert-list"></div>
        </div>
      </div>
    </div>
  </section>

  <section class="sec" id="contact">
    <div class="container">
      <p class="cue u-mono">CUE 05 \xB7 Contact</p>
      <h2 class="contact__h">Role, project, the team and the start date.</h2>
      <p class="sec__sub">Based in Varna. Available for business analysis and product work in regulated environments. I reply within one working day.</p>
      <a class="contact__mail" id="contact-mail" href="mailto:netacc@gmail.com">netacc@gmail.com <span>\u2192</span></a>
      <dl class="contact__dl" id="contact-rows"></dl>
    </div>
  </section>
</main>

<footer>
  <div class="container ftr">
    <span id="ftr-name">\xA9 2026 Borislav Radushev</span>
    <span>Cloudflare Workers \xB7 <a href="/api/cv">GET /api/cv</a></span>
    <a href="https://www.linkedin.com/in/ux531/" target="_blank" rel="noopener">LinkedIn \u2197</a>
  </div>
</footer>

<noscript><p class="container u-mono">This CV renders from /api/cv. Enable JavaScript to read the record.</p></noscript>

<script>
  var data = null;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var ENDPOINTS = [
    { method: "GET", path: "/api/cv", statusText: "200 OK", label: "Full CV" },
    { method: "GET", path: "/api/cv/experience", statusText: "200 OK", label: "Experience" },
    { method: "GET", path: "/api/cv/skills", statusText: "200 OK", label: "Skills" },
    { method: "GET", path: "/api/cv/education", statusText: "200 OK", label: "Education" },
    { method: "POST", path: "/api/contact", statusText: "201 Created", label: "Submit a brief" }
  ];

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text !== undefined && text !== null) n.textContent = text;
    return n;
  }
  function setText(id, text) {
    var n = document.getElementById(id);
    if (n) n.textContent = text;
  }
  function pad2(n) { return n < 10 ? "0" + n : "" + n; }

  /* ---------- theme ---------- */
  var root = document.documentElement;
  var THEME_KEY = "br-theme";
  function themeName() {
    return root.getAttribute("data-theme") ||
      (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
  }
  function paintTheme() {
    var b = document.getElementById("theme-toggle");
    if (!b) return;
    var next = themeName() === "dark" ? "light" : "dark";
    b.textContent = next.charAt(0).toUpperCase() + next.slice(1);
    b.setAttribute("aria-label", "Switch to " + next + " theme");
  }
  paintTheme();
  var themeBtn = document.getElementById("theme-toggle");
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var next = themeName() === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem(THEME_KEY, next); } catch (e) {}
      paintTheme();
    });
  }
  window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", paintTheme);

  /* ---------- clock ---------- */
  var clockFmt = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/Sofia",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  });
  var clockEl = document.querySelector("[data-clock-tc]");
  var clockSecond = -1;
  var clockTime = "00:00:00";
  var clockFrame = -1;
  function clockTick() {
    var now = new Date();
    var second = now.getSeconds();
    if (second !== clockSecond) {
      clockSecond = second;
      clockTime = clockFmt.format(now);
    }
    var frame = Math.floor(now.getMilliseconds() / 1000 * 30);
    if (frame !== clockFrame) {
      clockFrame = frame;
      if (clockEl) clockEl.textContent = clockTime + ":" + pad2(frame);
    }
    if (!reduceMotion) window.requestAnimationFrame(clockTick);
  }
  clockTick();

  /* ---------- nav active state ---------- */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll(".nav a[href^='#']"));
  var navSections = navLinks.map(function (a) {
    return document.querySelector(a.getAttribute("href"));
  }).filter(Boolean);
  if ("IntersectionObserver" in window && navSections.length) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (a) { a.removeAttribute("aria-current"); });
        var match = navLinks.filter(function (a) {
          return a.getAttribute("href") === "#" + entry.target.id;
        })[0];
        if (match) match.setAttribute("aria-current", "true");
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    navSections.forEach(function (s) { spy.observe(s); });
  }

  /* ---------- rendering ---------- */
  function renderHero(d) {
    if (d.hero) {
      setText("user_name", d.hero.user_name);
      setText("hero-kicker", d.hero.kicker);
      setText("hero-title", d.hero.title);
      setText("hero-lead", d.hero.lead);
    }
    var stats = document.getElementById("hero-stats");
    if (stats) {
      stats.textContent = "";
      (d.stats || []).forEach(function (s) {
        var box = el("div");
        box.appendChild(el("dt", null, s.label));
        box.appendChild(el("dd", null, s.value));
        stats.appendChild(box);
      });
    }
    setText("ftr-name", "\xA9 2026 " + d.identity.name);
  }

  function renderLog(d) {
    var list = document.getElementById("log-list");
    if (!list) return;
    list.textContent = "";
    (d.experience || []).forEach(function (job, i) {
      var row = el("li", "log__row");
      row.id = "job-" + pad2(i + 1);

      var meta = el("div", "log__meta");
      meta.appendChild(el("span", "log__n", pad2(i + 1) + "."));
      meta.appendChild(el("span", "log__date", job.period));
      var tags = el("div", "log__tags");
      (job.tags || []).forEach(function (tag, k) {
        tags.appendChild(el("span", k === 0 && i === 0 ? "chip chip--on" : "chip", tag));
      });
      meta.appendChild(tags);
      row.appendChild(meta);

      var body = el("div", "log__body");
      body.appendChild(el("h3", null, job.employer));
      body.appendChild(el("p", "log__role", job.role + " \xB7 " + job.location));
      var points = el("ul");
      (job.points || []).forEach(function (point) {
        points.appendChild(el("li", null, point));
      });
      body.appendChild(points);
      if (job.proof) {
        var proof = el("p", "proof");
        proof.appendChild(el("b", null, "Proof \u2014 "));
        proof.appendChild(document.createTextNode(job.proof));
        body.appendChild(proof);
      }
      row.appendChild(body);
      list.appendChild(row);
    });
  }

  function renderServices(d) {
    var list = document.getElementById("services-list");
    if (!list) return;
    list.textContent = "";
    (d.services || []).forEach(function (s) {
      var row = el("li", "service");
      row.appendChild(el("span", "service__n", s.n));
      var body = el("div");
      body.appendChild(el("h3", null, s.title));
      body.appendChild(el("p", "service__sub", s.sub));
      body.appendChild(el("p", null, s.body));
      var proof = el("p", "proof");
      proof.appendChild(el("b", null, "Seen at \u2014 "));
      (s.seen || []).forEach(function (ref, i) {
        if (i) proof.appendChild(document.createTextNode(" \xB7 "));
        var a = el("a", null, ref.label);
        a.href = "#job-" + ref.job;
        proof.appendChild(a);
      });
      body.appendChild(proof);
      row.appendChild(body);
      list.appendChild(row);
    });
  }

  function renderGroups(d) {
    var host = document.getElementById("skill-groups");
    if (!host) return;
    host.textContent = "";
    var groups = [
      ["Skills", (d.skills || {}).skills],
      ["Tools", (d.skills || {}).tools],
      ["Domains", (d.skills || {}).domains],
      ["Methodologies", (d.skills || {}).methodologies]
    ];
    groups.forEach(function (pair) {
      var box = el("div", "group");
      box.appendChild(el("h3", null, pair[0]));
      var ul = el("ul");
      (pair[1] || []).forEach(function (item) { ul.appendChild(el("li", null, item)); });
      box.appendChild(ul);
      host.appendChild(box);
    });
  }

  function renderRecord(d) {
    var edu = document.getElementById("edu-list");
    if (edu) {
      edu.textContent = "";
      (d.education || []).forEach(function (item) {
        var row = el("div", "rec-item");
        row.appendChild(el("span", "rec-item__when", item.period));
        var box = el("div");
        box.appendChild(el("h4", null, item.school));
        box.appendChild(el("p", null, item.degree));
        row.appendChild(box);
        edu.appendChild(row);
      });
    }
    var certs = document.getElementById("cert-list");
    if (certs) {
      certs.textContent = "";
      (d.certifications || []).forEach(function (item) {
        var row = el("div", "rec-item");
        row.appendChild(el("span", "rec-item__when", "\u2014"));
        var box = el("div");
        box.appendChild(el("h4", null, item.name));
        box.appendChild(el("p", null, item.detail));
        row.appendChild(box);
        certs.appendChild(row);
      });
    }
  }

  function renderContact(d) {
    var c = d.identity || {};
    setText("contact-mail", c.email);
    var mail = document.getElementById("contact-mail");
    if (mail) mail.href = "mailto:" + c.email;
    var rows = document.getElementById("contact-rows");
    if (!rows) return;
    rows.textContent = "";
    var entries = [
      ["Email", c.email, "mailto:" + c.email],
      ["Phone", c.phone, "tel:" + c.phoneIntl],
      ["LinkedIn", "/in/ux531", c.linkedin],
      ["Location", c.location, null]
    ];
    entries.forEach(function (entry) {
      var row = el("div", "contact__row");
      row.appendChild(el("dt", null, entry[0]));
      var dd = el("dd");
      if (entry[2]) {
        var a = el("a", null, entry[1]);
        a.href = entry[2];
        if (entry[2].indexOf("http") === 0) {
          a.target = "_blank";
          a.rel = "noopener";
        }
        dd.appendChild(a);
      } else {
        dd.textContent = entry[1];
      }
      row.appendChild(dd);
      rows.appendChild(row);
    });
  }

  /* ---------- api explorer ---------- */
  function bodyFor(ep) {
    if (ep.path === "/api/cv") return data;
    if (ep.path === "/api/cv/experience") return data.experience;
    if (ep.path === "/api/cv/skills") return data.skills;
    if (ep.path === "/api/cv/education") return data.education;
    return {
      status: "created",
      received: { name: "Borislav Radushev", email: "netacc@gmail.com" },
      reply: "Within one working day."
    };
  }

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  function renderJson(ep) {
    var pre = document.getElementById("api-json");
    if (!pre) return;
    pre.innerHTML = esc(JSON.stringify(bodyFor(ep), null, 2)).replace(/"([^"]+)":/g, '<span class="jk">"$1":</span>');
    var head = document.getElementById("api-head");
    if (head) {
      head.textContent = "";
      head.appendChild(el("span", "method " + (ep.method === "GET" ? "method--get" : "method--post"), ep.method));
      head.appendChild(el("span", "endpoint__path", ep.path));
      head.appendChild(el("span", "status", ep.statusText));
    }
  }

  function renderEndpoints() {
    var host = document.getElementById("api-endpoints");
    if (!host) return;
    host.textContent = "";
    ENDPOINTS.forEach(function (ep) {
      var row = el("button", "endpoint");
      row.type = "button";
      row.setAttribute("aria-pressed", "false");
      row.appendChild(el("span", "method " + (ep.method === "GET" ? "method--get" : "method--post"), ep.method));
      var name = el("span");
      name.appendChild(el("span", "endpoint__path", ep.path));
      name.appendChild(el("span", "endpoint__label", ep.label));
      row.appendChild(name);
      row.appendChild(el("span", "status", ep.statusText));
      row.addEventListener("click", function () {
        var all = host.querySelectorAll(".endpoint");
        for (var i = 0; i < all.length; i++) all[i].setAttribute("aria-pressed", "false");
        row.setAttribute("aria-pressed", "true");
        renderJson(ep);
      });
      host.appendChild(row);
    });
    var first = host.querySelector(".endpoint");
    if (first) {
      first.setAttribute("aria-pressed", "true");
      renderJson(ENDPOINTS[0]);
    }
  }

  /* ---------- cursor + trail ---------- */
  function accentColor() {
    return getComputedStyle(root).getPropertyValue("--accent").trim() || "#c6fb50";
  }

  function initCursor() {
    var cur = document.getElementById("cur");
    if (!cur) return;
    document.body.classList.add("cursor-on");
    var x = window.innerWidth / 2;
    var y = window.innerHeight / 2;
    var cx = x;
    var cy = y;
    window.addEventListener("mousemove", function (e) {
      x = e.clientX;
      y = e.clientY;
    }, { passive: true });
    document.addEventListener("mouseover", function (e) {
      if (e.target.closest && e.target.closest("a, button, [role='button']")) cur.classList.add("cur--hot");
    });
    document.addEventListener("mouseout", function (e) {
      if (e.target.closest && e.target.closest("a, button, [role='button']")) cur.classList.remove("cur--hot");
    });
    (function follow() {
      cx += (x - cx) * 0.38;
      cy += (y - cy) * 0.38;
      cur.style.transform = "translate3d(" + cx + "px," + cy + "px,0)";
      window.requestAnimationFrame(follow);
    })();
  }

  function initTrail() {
    var canvas = document.getElementById("trail");
    if (!canvas) return;
    var ctx = canvas.getContext("2d");
    if (!ctx) return;
    var points = [];
    var color = accentColor();
    var frame = 0;
    function size() {
      var ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = window.innerWidth * ratio;
      canvas.height = window.innerHeight * ratio;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    }
    size();
    window.addEventListener("resize", size);
    window.addEventListener("mousemove", function (e) {
      points.push({ x: e.clientX, y: e.clientY, a: 0.55, r: 1 + Math.random() * 5 });
      if (points.length > 60) points.shift();
    }, { passive: true });
    (function draw() {
      ctx.globalCompositeOperation = "destination-out";
      ctx.fillStyle = "rgba(0,0,0,0.16)";
      ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
      ctx.globalCompositeOperation = "source-over";
      frame++;
      if (frame % 60 === 0) color = accentColor();
      ctx.fillStyle = color;
      for (var i = 0; i < points.length; i++) {
        var p = points[i];
        p.a *= 0.94;
        p.r *= 0.98;
        ctx.globalAlpha = Math.max(p.a, 0);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      for (var j = points.length - 1; j >= 0; j--) {
        if (points[j].a < 0.01) points.splice(j, 1);
      }
      window.requestAnimationFrame(draw);
    })();
  }

  if (!reduceMotion && window.matchMedia("(pointer: fine)").matches) {
    initCursor();
    initTrail();
  }

  /* ---------- boot ---------- */
  fetch("/api/cv")
    .then(function (r) { return r.json(); })
    .then(function (d) {
      data = d;
      renderHero(d);
      renderLog(d);
      renderServices(d);
      renderGroups(d);
      renderRecord(d);
      renderContact(d);
      renderEndpoints();
    })
    .catch(function () {
      setText("hero-lead", "The CV data did not load. Request /api/cv directly.");
    });
<\/script>
</body>
</html>
`;
var src_default = {
  async fetch(request) {
    const url = new URL(request.url);
    const method = request.method;
    const path = url.pathname;
    if (path === "/" || path === "/cv") {
      return new Response(cvPage, {
        headers: { "Content-Type": "text/html; charset=utf-8" }
      });
    }
    if (path === "/api/cv" && method === "GET") {
      return Response.json(cv);
    }
    if (path === "/api/cv/experience" && method === "GET") {
      return Response.json(cv.experience);
    }
    if (path === "/api/cv/skills" && method === "GET") {
      return Response.json(cv.skills);
    }
    if (path === "/api/cv/education" && method === "GET") {
      return Response.json(cv.education);
    }
    if (path === "/api/contact" && method === "POST") {
      let body = {};
      try {
        body = await request.json();
      } catch (e) {
      }
      return jsonResponse(201, {
        status: "created",
        received: body,
        reply: "Within one working day."
      });
    }
    return jsonResponse(404, { detail: "Not Found" });
  }
};

// ../../../.npm/_npx/32026684e21afda6/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
var drainBody = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;

// ../../../.npm/_npx/32026684e21afda6/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    const body = JSON.stringify(error);
    const headers = {
      "Content-Type": "application/json",
      "MF-Experimental-Error-Stack": "true"
    };
    const encoded = encodeURIComponent(body);
    if (encoded.length <= 8192) {
      headers["MF-Experimental-Error-Stack-Payload"] = encoded;
    }
    return new Response(body, { status: 500, headers });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;

// .wrangler/tmp/bundle-7Af0JJ/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = src_default;

// ../../../.npm/_npx/32026684e21afda6/node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");

// .wrangler/tmp/bundle-7Af0JJ/middleware-loader.entry.ts
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  scheduledTime;
  cron;
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default as default
};
//# sourceMappingURL=index.js.map
