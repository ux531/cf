export const appScript = String.raw`
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
    setText("ftr-name", "© 2026 " + d.identity.name);
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
      body.appendChild(el("p", "log__role", job.role + " · " + job.location));
      var points = el("ul");
      (job.points || []).forEach(function (point) {
        points.appendChild(el("li", null, point));
      });
      body.appendChild(points);
      if (job.proof) {
        var proof = el("p", "proof");
        proof.appendChild(el("b", null, "Proof — "));
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
      proof.appendChild(el("b", null, "Seen at — "));
      (s.seen || []).forEach(function (ref, i) {
        if (i) proof.appendChild(document.createTextNode(" · "));
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
        row.appendChild(el("span", "rec-item__when", "—"));
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
`;
