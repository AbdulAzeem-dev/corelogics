/* Home page */

function PageHome() {
  const { setPage } = useRouter();
  return (
    <main className="home">
      <HeroSection />
      <ManifestoSection />
      <ServicesOverviewSection />
      <PipelineSection />
      <IndustriesPreviewSection />
      <CasesPreviewSection />
      <MetricsSection />
      <ClosingCtaSection />
    </main>
  );
}

// ─── Hero ───────────────────────────────────────────────────────────────
function HeroSection() {
  const { setPage } = useRouter();
  return (
    <section className="hero">
      <HeroCanvas />
      <div className="hero-vignette"></div>
      <div className="page hero-content">
        <Reveal>
          <div className="hero-tag">
            <span className="mono">SYS — CORELOGICS · 2026</span>
            <span className="bar"></span>
            <span className="mono">AGENTIC × CONVERSATIONAL × VISION</span>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <h1 className="h-display hero-h">
            We are the <em>engine</em> behind<br/>
            other people&rsquo;s AI products.
          </h1>
        </Reveal>

        <Reveal delay={240}>
          <p className="lede hero-lede">
            AI is at the core of what we do — Computer Vision and Generative AI — but a great model
            needs a great product around it. We design the interfaces, engineer the platforms, and
            architect the data foundations that turn intelligence into impact. One team, end-to-end.
          </p>
        </Reveal>

        <Reveal delay={360}>
          <div className="hero-ctas">
            <Button kind="gold" href="#contact">Book a discovery call</Button>
            <Button kind="ghost" href="#services">See what we deliver</Button>
          </div>
        </Reveal>

        <Reveal delay={520}>
          <div className="hero-marquee">
            <div className="marquee-track">
              {['COMPUTER VISION', 'GENERATIVE AI', 'AGENTS', 'AI DATA SERVICES', 'MLOPS', 'EDGE + CLOUD', 'UI/UX DESIGN', 'WEB + MOBILE', 'DATA ENGINEERING', 'BI + FINTECH', 'ONE TEAM · END-TO-END', 'COMPUTER VISION', 'GENERATIVE AI', 'AGENTS', 'UI/UX DESIGN', 'WEB + MOBILE'].map((t, i) => (
                <span key={i} className="mono">{t}</span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <div className="hero-corner-left mono">
        <div>LAT 25.4052°N</div>
        <div>LONG 55.5136°E</div>
        <div className="dim" style={{ marginTop: 6 }}>AJMAN ·  AJM-1</div>
      </div>
      <div className="hero-corner-right mono">
        <div>ENG · 24 / DAT · 14</div>
        <div>UPTIME · 99.98%</div>
        <div className="dim" style={{ marginTop: 6 }}>BUILD · 26.05.16</div>
      </div>
    </section>
  );
}

// ─── Manifesto strip ────────────────────────────────────────────────────
function ManifestoSection() {
  return (
    <section className="manifesto hairline-b">
      <div className="page manifesto-inner">
        <Reveal>
          <Eyebrow>Premise</Eyebrow>
        </Reveal>
        <Reveal delay={140}>
          <p className="manifesto-text">
            Most AI products fail not because the idea is wrong — they fail because the path from
            <em> data </em>to <em>deployment</em> is harder than anyone admits.
            <span className="muted"> We have walked it enough times to make it predictable. You bring the vision; we ship the system underneath.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

// ─── Services overview ──────────────────────────────────────────────────
function ServicesOverviewSection() {
  const { setPage } = useRouter();
  const items = [
    {
      n: '01',
      t: 'AI & Intelligent Systems',
      flag: true,
      d: 'Our flagship. Computer Vision and Generative AI, end-to-end — data, models, agents, MLOps, and cost-optimized deployment to edge or cloud.',
      tags: ['Computer Vision', 'Generative AI', 'Agents', 'MLOps', 'Edge + Cloud'],
    },
    {
      n: '02',
      t: 'Product & Design',
      d: 'The experience layer that makes intelligence usable — product design, design systems, and user research.',
      tags: ['UI/UX', 'Design systems', 'Research'],
    },
    {
      n: '03',
      t: 'Engineering',
      d: 'Modern, performant web and mobile applications — with intelligence built in, not bolted on.',
      tags: ['Web', 'iOS', 'Android', 'Platforms'],
    },
    {
      n: '04',
      t: 'Data & Intelligence',
      d: 'The foundations everything stands on — data engineering, business intelligence, and specialized fintech dashboards.',
      tags: ['Data engineering', 'BI', 'Fintech dashboards'],
    },
  ];
  const [active, setActive] = useState(0);
  return (
    <section className="services-overview" id="services-section">
      <div className="page">
        <div className="section-head">
          <div>
            <Reveal><Eyebrow>What we deliver</Eyebrow></Reveal>
            <Reveal delay={120}>
              <h2 className="h-section" style={{ marginTop: 16 }}>
                AI at the core.<br/>The <em>full stack</em> around it.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <p className="lede" style={{ alignSelf: 'end' }}>
              A single team that takes a product from concept to deployment — without handing off
              between vendors. AI is the headline; the product around it is why the AI matters.
            </p>
          </Reveal>
        </div>

        <div className="services-grid">
          {items.map((it, i) => (
            <Reveal key={it.n} delay={i * 80} className="service-row-wrap">
              <div
                className={`service-row ${active === i ? 'open' : ''}`}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
              >
                <div className="service-num mono">{it.n}</div>
                <div className="service-body">
                  <h3 className="h-card service-title">
                    {it.t}
                    {it.flag && <span className="service-flag mono">FLAGSHIP</span>}
                  </h3>
                  <p className="service-desc">{it.d}</p>
                  <div className="service-tags">
                    {it.tags.map(tg => <span key={tg} className="tag mono">{tg}</span>)}
                  </div>
                </div>
                <div className="service-arrow">
                  <svg width="22" height="22" viewBox="0 0 22 22"><path d="M 5 11 H 17 M 12 6 L 17 11 L 12 16" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="square" /></svg>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div style={{ marginTop: 44, display: 'flex', justifyContent: 'center' }}>
            <Button kind="ghost" onClick={() => setPage('services')}>Explore all services</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── Pipeline visual ────────────────────────────────────────────────────
function PipelineSection() {
  return (
    <section className="pipeline hairline-b">
      <div className="page pipeline-inner">
        <div className="pipeline-text">
          <Reveal><Eyebrow>How it ships</Eyebrow></Reveal>
          <Reveal delay={120}>
            <h2 className="h-section" style={{ marginTop: 16 }}>
              A loop, not a handoff.
            </h2>
          </Reveal>
          <Reveal delay={220}>
            <p className="lede" style={{ marginTop: 18 }}>
              Every engagement runs as a closed feedback system. Data feeds training; training feeds deployment;
              deployment feeds monitoring — and monitoring feeds the next round of data. No throw-it-over-the-wall.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <ul className="pipeline-list mono">
              <li><span className="gold">→</span> Reproducible from day one — same seed, same result, same week or next quarter.</li>
              <li><span className="gold">→</span> Human review baked into every annotation and eval cycle.</li>
              <li><span className="gold">→</span> Drift caught at the boundary, not at the post-mortem.</li>
            </ul>
          </Reveal>
        </div>
        <Reveal delay={200} className="pipeline-vis">
          <CornerCard style={{ padding: 28, position: 'relative' }}>
            <div className="mono" style={{ fontSize: 11, color: 'var(--text-dim)', letterSpacing: '0.16em', marginBottom: 16, textTransform: 'uppercase' }}>
              fig.01 — Corelogics delivery loop
            </div>
            <PipelineDiagram height={240} />
            <div className="pipeline-readout mono">
              <div><span className="dim">RUN</span> <span>4,712</span></div>
              <div><span className="dim">P95</span> <span className="gold">28 ms</span></div>
              <div><span className="dim">DRIFT</span> <span>OK</span></div>
            </div>
          </CornerCard>
        </Reveal>
      </div>
    </section>
  );
}

// ─── Industries preview ─────────────────────────────────────────────────
function IndustriesPreviewSection() {
  const items = [
    { t: 'Personal AI Assistants', d: 'Long-memory companions and copilots — multi-modal, goal-aware, and built around the person, not the prompt.', kpi: '62%', kpiLabel: 'day-30 retention, beta' },
    { t: 'Conversational Agents', d: 'Domain-grounded chat and voice agents for education, support, and operations — with retrieval, tools, and guardrails wired in.', kpi: '3.1×', kpiLabel: 'engagement vs. baseline' },
    { t: 'Quality-Check & Compliance', d: 'Vision + sensor systems for slaughterhouses, factories, and inspection lines — real-time monitoring on edge hardware.', kpi: '99.4%', kpiLabel: 'compliance coverage' },
    { t: 'Retail & Operations Vision', d: 'Shelf intelligence, queue analytics, and process verification from cameras you already own.', kpi: '34%', kpiLabel: 'shelf availability lift' },
  ];
  return (
    <section className="industries-preview hairline-b">
      <div className="page">
        <div className="section-head">
          <div>
            <Reveal><Eyebrow>Where we work</Eyebrow></Reveal>
            <Reveal delay={120}>
              <h2 className="h-section" style={{ marginTop: 16 }}>Industries we know <em>cold</em>.</h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <p className="lede" style={{ alignSelf: 'end' }}>
              Domain expertise compounds. We focus where we&rsquo;ve shipped before — and decline gracefully where we haven&rsquo;t.
            </p>
          </Reveal>
        </div>

        <div className="industries-grid">
          {items.map((it, i) => (
            <Reveal key={it.t} delay={i * 80}>
              <CornerCard className="industry-card">
                <div className="industry-kpi">
                  <div className="industry-kpi-val gold">{it.kpi}</div>
                  <div className="mono industry-kpi-label">{it.kpiLabel}</div>
                </div>
                <div className="industry-text">
                  <h3 className="h-card">{it.t}</h3>
                  <p className="muted" style={{ marginTop: 10, fontSize: 14 }}>{it.d}</p>
                </div>
              </CornerCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Case studies preview ───────────────────────────────────────────────
function CasesPreviewSection() {
  const { setPage } = useRouter();
  return (
    <section className="cases-preview">
      <div className="page">
        <div className="section-head">
          <div>
            <Reveal><Eyebrow>Selected work</Eyebrow></Reveal>
            <Reveal delay={120}>
              <h2 className="h-section" style={{ marginTop: 16 }}>Three engagements. <em>Different</em> domains. Same bar.</h2>
            </Reveal>
          </div>
          <Reveal delay={200} className="section-head-cta">
            <Button kind="ghost" onClick={() => { setPage('cases'); }} arrow>All case studies</Button>
          </Reveal>
        </div>

        <div className="cases-grid">
          {(window.CASE_STUDIES || []).map((c, i) => (
            <Reveal key={c.slug} delay={i * 100}>
              <a
                href={`#case/${c.slug}`}
                onClick={(e) => { e.preventDefault(); setPage('case', c.slug); }}
                className="case-card"
                style={{ '--case-accent': c.accent, '--case-accent-soft': c.accentSoft }}
              >
                <div className="case-card-frame">
                  <div className="case-frame-bar">
                    <span className="dot" style={{ background: '#ff5f57' }}></span>
                    <span className="dot" style={{ background: '#febc2e' }}></span>
                    <span className="dot" style={{ background: '#28c840' }}></span>
                    <span className="case-frame-url mono">{c.slug}.corelogics.app</span>
                  </div>
                  <img src={c.heroImage} alt={`${c.name} screenshot`} />
                </div>
                <div className="case-card-body">
                  <div className="case-meta mono">
                    <span style={{ color: 'var(--case-accent)' }}>{c.domain.split(' · ')[0]}</span>
                    <span className="dim">·</span>
                    <span className="dim">{c.year}</span>
                  </div>
                  <h3 className="case-card-name">{c.name}</h3>
                  <p className="case-card-position">{c.positioning}</p>
                  <div className="case-foot">
                    <div className="case-card-outcomes">
                      {c.outcomes.slice(0, 1).map(o => (
                        <div key={o.l}>
                          <div className="case-card-v">{o.v}</div>
                          <div className="mono case-card-l">{o.l}</div>
                        </div>
                      ))}
                    </div>
                    <span className="case-arrow">→</span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Metrics ────────────────────────────────────────────────────────────
function MetricsSection() {
  const stats = [
    { v: 38, suffix: '', label: 'Production models in service', prefix: '' },
    { v: 12, suffix: '', label: 'Industries shipped into', prefix: '' },
    { v: 99.98, suffix: '%', label: 'Pipeline uptime, trailing 12mo', decimals: 2 },
    { v: 6.4, suffix: '×', label: 'Median inference cost reduction', decimals: 1 },
  ];
  return (
    <section className="metrics">
      <div className="page">
        <Reveal><Eyebrow>By the numbers</Eyebrow></Reveal>
        <div className="metrics-grid">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="metric">
              <div className="metric-val">
                {s.prefix}<Counter to={s.v} suffix={s.suffix} decimals={s.decimals || 0} />
              </div>
              <div className="metric-label">{s.label}</div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={500}>
          <p className="mono metrics-note">
            <span className="dim">NOTE — </span> Figures aggregate engagements in scope as of 2026-Q2.
            We report on per-engagement scorecards on request.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

// ─── Closing CTA ────────────────────────────────────────────────────────
function ClosingCtaSection() {
  return (
    <section className="closing-cta">
      <div className="page closing-inner">
        <div className="closing-bg" aria-hidden="true">
          <HeroAurora />
        </div>
        <div className="closing-content">
          <Reveal><Eyebrow>Start a conversation</Eyebrow></Reveal>
          <Reveal delay={120}>
            <h2 className="h-display" style={{ marginTop: 18, maxWidth: '16ch' }}>
              You bring the vision.<br/><em>We build the engine.</em>
            </h2>
          </Reveal>
          <Reveal delay={240}>
            <p className="lede" style={{ marginTop: 22 }}>
              30 minutes, no slides, no pitch. We&rsquo;ll listen, ask sharp questions, and tell you
              honestly whether we&rsquo;re the right partner. If we aren&rsquo;t — we&rsquo;ll tell you who is.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="hero-ctas" style={{ marginTop: 28 }}>
              <Button kind="gold" href="#contact">Book a discovery call</Button>
              <Button kind="ghost" href="#cases">Read the case studies</Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ─── Page CSS ───────────────────────────────────────────────────────────
(function injectHomeCss() {
  if (document.getElementById('home-css')) return;
  const s = document.createElement('style');
  s.id = 'home-css';
  s.textContent = `
    .home section { position: relative; }

    /* Hero */
    .hero { position: relative; min-height: 92vh; padding: 80px 0 100px; overflow: hidden; }
    .hero-vignette { position: absolute; inset: 0; background: radial-gradient(ellipse 60% 40% at 50% 100%, transparent, var(--bg) 70%); pointer-events: none; }
    .hero-content { position: relative; z-index: 2; padding-top: 4vh; }
    .hero-tag { display: inline-flex; align-items: center; gap: 14px; padding: 6px 12px; border: 1px solid var(--border); border-radius: 999px; background: oklch(0.16 0.012 250 / 0.6); font-size: 10.5px; letter-spacing: 0.18em; color: var(--text-dim); }
    .hero-tag .bar { width: 1px; height: 12px; background: var(--border-strong); }
    .hero-h { margin-top: 28px; max-width: 18ch; }
    .hero-lede { margin-top: 28px; max-width: 56ch; }
    .hero-ctas { margin-top: 36px; display: flex; gap: 14px; flex-wrap: wrap; }
    .hero-marquee { margin-top: 72px; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); padding: 14px 0; overflow: hidden; max-width: 100%; }
    .marquee-track { display: inline-flex; gap: 48px; white-space: nowrap; animation: marq 50s linear infinite; }
    .marquee-track span { font-size: 11px; color: var(--text-faint); letter-spacing: 0.22em; }
    @keyframes marq { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }

    .hero-corner-left, .hero-corner-right { position: absolute; bottom: 24px; font-size: 10.5px; letter-spacing: 0.18em; color: var(--text-dim); line-height: 1.6; z-index: 2; }
    .hero-corner-left { left: var(--page-pad); }
    .hero-corner-right { right: var(--page-pad); text-align: right; }
    @media (max-width: 900px) { .hero-corner-left, .hero-corner-right { display: none; } }

    /* Manifesto */
    .manifesto { padding: 80px 0; }
    .manifesto-inner { max-width: 1000px; }
    .manifesto-text { font-size: clamp(22px, 2.6vw, 36px); line-height: 1.25; margin-top: 22px; letter-spacing: -0.02em; }
    .manifesto-text em { font-family: var(--font-serif); font-style: italic; color: var(--gold); }

    /* Section head */
    .section-head { display: grid; grid-template-columns: 1.1fr 1fr; gap: 60px; align-items: end; margin-bottom: 56px; }
    .section-head-cta { display: flex; justify-content: flex-end; align-self: end; }
    @media (max-width: 880px) { .section-head { grid-template-columns: 1fr; gap: 28px; } }

    /* Services */
    .services-overview { padding: 120px 0; }
    .services-grid { border-top: 1px solid var(--border); }
    .service-row-wrap { display: block; }
    .service-row { display: grid; grid-template-columns: 80px 1fr 40px; align-items: start; gap: 32px; padding: 32px 8px; border-bottom: 1px solid var(--border); cursor: pointer; transition: background 0.3s ease; }
    .service-row:hover { background: oklch(0.18 0.014 250 / 0.5); }
    .service-num { font-size: 11px; color: var(--text-faint); letter-spacing: 0.16em; padding-top: 4px; }
    .service-title { transition: color 0.2s ease; display: flex; align-items: center; gap: 14px; flex-wrap: wrap; }
    .service-flag { font-size: 9px; letter-spacing: 0.16em; color: var(--gold); border: 1px solid oklch(0.83 0.13 86 / 0.4); padding: 4px 9px; border-radius: 999px; background: var(--gold-glow); }
    .service-row:hover .service-title { color: var(--gold); }
    .service-desc { color: var(--text-muted); margin-top: 10px; max-width: 62ch; }
    .service-tags { margin-top: 16px; display: flex; flex-wrap: wrap; gap: 8px; }
    .tag { display: inline-block; padding: 4px 10px; border: 1px solid var(--border); border-radius: 999px; font-size: 10.5px; color: var(--text-dim); letter-spacing: 0.12em; text-transform: uppercase; }
    .service-arrow { color: var(--text-faint); padding-top: 4px; transition: color 0.2s ease, transform 0.2s ease; }
    .service-row:hover .service-arrow { color: var(--gold); transform: translateX(4px); }

    /* Pipeline */
    .pipeline { padding: 120px 0; }
    .pipeline-inner { display: grid; grid-template-columns: 0.9fr 1.1fr; gap: 80px; align-items: center; }
    .pipeline-list { list-style: none; margin-top: 28px; }
    .pipeline-list li { font-size: 13px; color: var(--text-muted); padding: 12px 0; border-bottom: 1px dashed var(--border); letter-spacing: 0.04em; }
    .pipeline-list li:last-child { border-bottom: none; }
    .pipeline-list li .gold { margin-right: 10px; }
    .pipeline-readout { position: absolute; right: 28px; bottom: 28px; display: flex; gap: 24px; font-size: 10.5px; letter-spacing: 0.14em; color: var(--text-muted); text-transform: uppercase; }
    @media (max-width: 980px) { .pipeline-inner { grid-template-columns: 1fr; gap: 48px; } }

    /* Industries */
    .industries-preview { padding: 120px 0; }
    .industries-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; }
    .industry-card { padding: 36px; display: grid; grid-template-columns: 180px 1fr; gap: 36px; align-items: center; min-height: 220px; }
    .industry-kpi { border-right: 1px solid var(--border); padding-right: 24px; }
    .industry-kpi-val { font-family: var(--font-sans); font-size: 56px; font-weight: 400; letter-spacing: -0.04em; line-height: 0.95; }
    .industry-kpi-label { font-size: 10.5px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--text-dim); margin-top: 10px; max-width: 16ch; }
    @media (max-width: 980px) { .industries-grid { grid-template-columns: 1fr; } .industry-card { grid-template-columns: 1fr; gap: 24px; } .industry-kpi { border-right: none; border-bottom: 1px solid var(--border); padding-right: 0; padding-bottom: 20px; } }

    /* Cases preview */
    .cases-preview { padding: 120px 0; }
    .cases-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
    .case-card { display: flex; flex-direction: column; border: 1px solid var(--border); border-radius: var(--radius); overflow: hidden; transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease; background: linear-gradient(180deg, oklch(0.17 0.014 250 / 0.5), oklch(0.14 0.01 250 / 0.3)); }
    .case-card:hover { transform: translateY(-6px); border-color: var(--case-accent, var(--border-strong)); box-shadow: 0 24px 40px -16px oklch(0.05 0.02 250 / 0.5); }
    .case-card-frame { background: oklch(0.13 0.012 250); border-bottom: 1px solid var(--border); }
    .case-card-frame img { display: block; width: 100%; height: 180px; object-fit: cover; object-position: top left; }
    .case-card-body { padding: 24px; display: flex; flex-direction: column; flex: 1; }
    .case-card-name { font-size: 24px; font-weight: 500; letter-spacing: -0.02em; margin-top: 12px; line-height: 1.1; }
    .case-card-position { font-size: 14px; color: var(--text-muted); line-height: 1.5; margin-top: 12px; flex: 1; }
    .case-meta { font-size: 10.5px; letter-spacing: 0.14em; text-transform: uppercase; display: flex; gap: 8px; }
    .case-foot { display: flex; justify-content: space-between; align-items: end; margin-top: 22px; padding-top: 18px; border-top: 1px solid var(--border); }
    .case-card-outcomes { display: flex; flex-direction: column; gap: 4px; }
    .case-card-v { font-size: 26px; font-weight: 400; letter-spacing: -0.03em; line-height: 1; color: var(--case-accent, var(--gold)); }
    .case-card-l { font-size: 10.5px; letter-spacing: 0.12em; color: var(--text-dim); text-transform: uppercase; max-width: 20ch; }
    .case-arrow { color: var(--text-faint); transition: color 0.2s ease, transform 0.2s ease; font-size: 22px; }
    .case-card:hover .case-arrow { color: var(--case-accent, var(--gold)); transform: translateX(4px); }
    @media (max-width: 980px) { .cases-grid { grid-template-columns: 1fr; } }

    /* Metrics */
    .metrics { padding: 120px 0; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); background: oklch(0.13 0.012 250 / 0.6); }
    .metrics-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: var(--border); margin-top: 40px; border: 1px solid var(--border); }
    .metric { padding: 36px 28px; background: oklch(0.14 0.01 250); }
    .metric-val { font-family: var(--font-sans); font-size: clamp(40px, 5vw, 64px); font-weight: 400; letter-spacing: -0.04em; line-height: 1; color: var(--text); }
    .metric-label { font-family: var(--font-mono); font-size: 11px; color: var(--text-dim); letter-spacing: 0.14em; text-transform: uppercase; margin-top: 18px; max-width: 22ch; }
    .metrics-note { font-size: 11px; color: var(--text-faint); margin-top: 28px; letter-spacing: 0.06em; }
    @media (max-width: 880px) { .metrics-grid { grid-template-columns: repeat(2, 1fr); } }

    /* Closing CTA */
    .closing-cta { padding: 140px 0; position: relative; overflow: hidden; }
    .closing-inner { position: relative; }
    .closing-bg { position: absolute; inset: -100px; opacity: 0.5; z-index: 0; }
    .closing-content { position: relative; z-index: 2; max-width: 760px; }
  `;
  document.head.appendChild(s);
})();

Object.assign(window, { PageHome, ClosingCtaSection });
