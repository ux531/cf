export const siteStyles = String.raw`  /* ---------- theme tokens ---------- */
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
    min-height: 100vh;
    padding: 100px 0 0;
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
  .log__body li::before { content: "—"; position: absolute; left: 0; color: var(--accent); }
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
    body { font-size: 9.5pt; line-height: 2.6; }
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
`;
