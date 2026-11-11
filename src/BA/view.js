import { siteStyles } from "../styles/site.js";
import { appScript } from "../scripts/app.js";

export const cvPage = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>Borislav Radushev — Business Analyst / PM</title>
<meta name="description" content="CV of Borislav Radushev, business analyst for regulated data. Data governance, compliance, access governance and Agile delivery. Served as JSON from Cloudflare Workers."/>
<script>try{var t=localStorage.getItem("br-theme");if(t)document.documentElement.setAttribute("data-theme",t)}catch(e){}</script>
<style>
${siteStyles}
</style>
</head>
<body>
<a class="skip" href="#main">Skip to content</a>
<canvas id="trail" aria-hidden="true"></canvas>
<div class="cur" id="cur" aria-hidden="true"></div>

<header class="hdr">
  <div class="container hdr__in">
    <a class="hdr__brand" href="#home">BR<span>·</span>RADUSHEV</a>
    <p class="hdr__tc"><b data-clock-tc>00:00:00:00</b><span>Sofia · EET</span></p>
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
      <p class="kicker u-mono" id="hero-kicker">CV · 2026.11 · Varna, BG · GET /api/cv 200 OK</p>
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
      <p class="cue u-mono">CUE 01 · Experience · 5 entries</p>
      <h2>What was scoped, what shipped, and what it proved.</h2>
      <p class="sec__sub">Every role is a record: the brief, the work, and the outcome that backs it.</p>
      <ol class="log" id="log-list"></ol>
    </div>
  </section>

  <section class="sec" id="skills">
    <div class="container">
      <p class="cue u-mono">CUE 02 · Capabilities</p>
      <h2>What I am hired for.</h2>
      <p class="sec__sub">Five capabilities. Each one comes with an engagement behind it, because a method without a delivery is just a sentence.</p>
      <ol class="services" id="services-list"></ol>
      <div class="groups" id="skill-groups"></div>
    </div>
  </section>

  <section class="sec" id="api">
    <div class="container">
      <p class="cue u-mono">CUE 03 · API</p>
      <h2>Every claim is an endpoint.</h2>
      <p class="sec__sub">This CV is served as JSON by the Worker. Pick an endpoint and read the response — the same data that renders the page above.</p>
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
      <p class="cue u-mono">CUE 04 · Record</p>
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
      <p class="cue u-mono">CUE 05 · Contact</p>
      <h2 class="contact__h">Role, project, the team and the start date.</h2>
      <p class="sec__sub">Based in Varna. Available for business analysis and product work in regulated environments. I reply within one working day.</p>
      <a class="contact__mail" id="contact-mail" href="mailto:netacc@gmail.com">netacc@gmail.com <span>→</span></a>
      <dl class="contact__dl" id="contact-rows"></dl>
    </div>
  </section>
</main>

<footer>
  <div class="container ftr">
    <span id="ftr-name">© 2026 Borislav Radushev</span>
    <span>Cloudflare Workers · <a href="/api/cv">GET /api/cv</a></span>
    <a href="https://www.linkedin.com/in/ux531/" target="_blank" rel="noopener">LinkedIn ↗</a>
  </div>
</footer>

<noscript><p class="container u-mono">This CV renders from /api/cv. Enable JavaScript to read the record.</p></noscript>

<script>
${appScript}
</script>
</body>
</html>`;
