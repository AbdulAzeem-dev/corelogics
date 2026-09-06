/* Home page */

function PageHome() {
  const { setPage } = useRouter();
  return (
    <main className="home">
      <HeroSection />
      <ManifestoSection />
      <ServicesOverviewSection />
      <EngagementShape />
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
    <section className="hero on-inverse">
      <div className="hero-glow" aria-hidden="true"><HeroAurora /></div>
      <HeroCanvas />
      <div className="hero-vignette"></div>
      {/* The hero is always in view on load, so the entry is a plain CSS
          cascade rather than scroll-triggered Reveals — one timeline, no
          double delays, and it honours prefers-reduced-motion via the global
          rule in styles.css. */}
      <div className="page hero-content">
        <div className="hero-tag">
          <span className="hero-tag-mark" aria-hidden="true"></span>
          <span>Established 2022</span>
          <span className="bar" aria-hidden="true"></span>
          <span>AI products for founders and companies</span>
        </div>

        <h1 className="h-display hero-h">
          <span className="hero-line"><span>We are the <em>engine</em> behind</span></span>
          <span className="hero-line"><span>other people&rsquo;s AI products.</span></span>
        </h1>

        <p className="lede hero-lede">
          We design, build, and launch full AI-powered products — websites, apps, and dashboards,
          with the AI already working inside them. Not a slide deck, not a prototype: a real product
          your customers can use. Founded in 2022, trusted by founders and companies ever since.
        </p>

        <div className="hero-ctas">
          <Button kind="accent" href="#contact">Book a free call</Button>
          <Button kind="ghost" href="#services">See what we build</Button>
        </div>

        <dl className="hero-facts">
          <div>
            <dt>First launch</dt>
            <dd>4 weeks, on average</dd>
          </div>
          <div>
            <dt>Team</dt>
            <dd>One, start to finish</dd>
          </div>
          <div>
            <dt>Based in</dt>
            <dd>The UAE, working worldwide</dd>
          </div>
        </dl>

        <div className="hero-marquee">
          <div className="marquee-track">
            {(() => {
              const items = ['AI chatbots & agents', 'Computer vision', 'Mobile apps', 'Web apps',
                'Automation', 'Dashboards & reporting', 'Product design', 'MVP in 4 weeks',
                'One team, start to finish'];
              // Rendered twice so the -50% translate loops without a seam.
              return items.concat(items).map((t, i) => <span key={i}>{t}</span>);
            })()}
          </div>
        </div>
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
            Most AI ideas never become real products — not because the idea is bad, but because turning
            <em> &ldquo;we should build AI&rdquo; </em>into something customers <em>actually use</em> is harder than anyone tells you.
            <span className="muted"> Since 2022, we&rsquo;ve done it enough times to make it fast, reliable, and predictable. You bring the vision. We build the product — and we build it fast.</span>
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
      t: 'AI Product Development',
      flag: true,
      d: 'We build the “brain” of your product — smart chatbots and AI agents that act like a helpful human, image and video recognition, and automation that saves your team hours every week.',
      tags: ['AI Chatbots & Agents', 'Computer Vision', 'Automation', 'Smart Recommendations'],
    },
    {
      n: '02',
      t: 'App & Product Design',
      d: 'We design an app or website your customers will actually enjoy using — clean, simple, and easy to navigate from day one.',
      tags: ['App Design', 'User Experience', 'User Research'],
    },
    {
      n: '03',
      t: 'Web & Mobile Development',
      d: 'We build your website, web app, or iOS/Android app — fast, reliable, and ready to grow as your user base does.',
      tags: ['Websites', 'Web Apps', 'iOS & Android'],
    },
    {
      n: '04',
      t: 'Data & Reporting',
      d: 'We organize your data and build simple dashboards, so you always know what’s working in your business — in plain numbers, not spreadsheets.',
      tags: ['Data Setup', 'Dashboards', 'Reporting'],
    },
  ];
  const [active, setActive] = useState(0);
  return (
    <section className="services-overview" id="services-section">
      <div className="page">
        <div className="section-head">
          <div>
            <Reveal><Eyebrow>What we build</Eyebrow></Reveal>
            <Reveal delay={120}>
              <h2 className="h-section" style={{ marginTop: 16 }}>
                Intelligence at the core.<br/>The <em>full stack</em> around it.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <p className="lede" style={{ alignSelf: 'end' }}>
              One team takes your idea from first sketch to a live product in weeks, not months — no
              juggling five agencies, no handoffs. AI does the smart work inside your product; we
              handle everything else it needs to succeed.
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
                    {it.flag && <span className="service-flag mono">OUR SPECIALTY</span>}
                  </h3>
                  <p className="service-desc">{it.d}</p>
                  <div className="service-tags">
                    {it.tags.map(tg => <span key={tg} className="tag">{tg}</span>)}
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
          <div style={{ marginTop: 32 }}>
            <Button kind="text" onClick={() => setPage('services')}>See all services</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── Industries preview ─────────────────────────────────────────────────
function IndustriesPreviewSection() {
  const items = [
    { t: 'Personal AI Assistants', d: 'AI companions and copilots that actually remember you — your preferences, your goals, your history — instead of starting from zero every conversation.', kpi: '62%', kpiLabel: 'still active at day 30, beta' },
    { t: 'AI Chatbots & Virtual Agents', d: 'Chat and voice assistants for support, education, and daily operations that sound human, know your business, and stay on-brand.', kpi: '3.1×', kpiLabel: 'more engagement than a generic bot' },
    { t: 'Compliance & Safety Monitoring', d: 'Camera-based systems for factories and inspection lines that monitor safety and quality automatically, in real time.', kpi: '99.4%', kpiLabel: 'of checks covered automatically' },
    { t: 'Retail Intelligence', d: 'Turn the cameras you already have into insight — what’s out of stock, how long lines are, whether shelves are set up right.', kpi: '34%', kpiLabel: 'improvement in shelf availability' },
  ];
  return (
    <section className="industries-preview hairline-b">
      <div className="page">
        <div className="section-head">
          <div>
            <Reveal><Eyebrow>Who we build for</Eyebrow></Reveal>
            <Reveal delay={120}>
              <h2 className="h-section" style={{ marginTop: 16 }}>Industries we already <em>understand</em>.</h2>
            </Reveal>
          </div>
          <Reveal delay={200}>
            <p className="lede" style={{ alignSelf: 'end' }}>
              We focus on the kinds of products we&rsquo;ve built before — so you&rsquo;re not paying for us to learn on the job.
            </p>
          </Reveal>
        </div>

        <div className="industries-grid">
          {items.map((it, i) => (
            <Reveal key={it.t} delay={i * 80} className={i === 0 ? 'industry-lead' : ''}>
              <CornerCard className={`industry-card ${i === 0 ? 'lead' : ''}`}>
                <div className="industry-kpi">
                  <div className="industry-kpi-val">{it.kpi}</div>
                  <div className="industry-kpi-label">{it.kpiLabel}</div>
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
  const { setPage, theme } = useRouter();
  return (
    <section className="cases-preview">
      <div className="page">
        <div className="section-head">
          <div>
            <Reveal><Eyebrow>Selected work</Eyebrow></Reveal>
            <Reveal delay={120}>
              <h2 className="h-section" style={{ marginTop: 16 }}>Five real products. <em>Different</em> industries. Same quality bar.</h2>
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
                href={pathFor('case', c.slug)}
                onClick={(e) => { if (isPlainClick(e)) { e.preventDefault(); setPage('case', c.slug); } }}
                className="case-card"
                style={{ '--case-accent': theme === 'dark' ? c.accentDark : c.accent, '--case-accent-dark': c.accentDark, '--case-accent-soft': c.accentSoft }}
              >
                <div className="case-card-frame">
                  <div className="case-frame-bar">
                    <span className="dot" style={{ background: '#ff5f57' }}></span>
                    <span className="dot" style={{ background: '#febc2e' }}></span>
                    <span className="dot" style={{ background: '#28c840' }}></span>
                    <span className="case-frame-url mono">{c.slug}.corelogics.app</span>
                  </div>
                  <img src={c.heroImage} alt={`${c.name} screenshot`} loading="lazy" decoding="async" />
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
                          <div className="case-card-l">{o.l}</div>
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
    { v: 38, suffix: '', label: 'AI products designed and shipped' },
    { v: 12, suffix: '', label: 'Industries we’ve built for' },
    { v: 99.98, suffix: '%', label: 'Uptime — your product stays online', decimals: 2 },
    { v: 6.4, suffix: '×', label: 'Lower running costs than a typical AI setup', decimals: 1 },
  ];
  return (
    <section className="metrics on-accent">
      <div className="page metrics-inner">
        <div className="metrics-head">
          <Reveal><Eyebrow>By the numbers</Eyebrow></Reveal>
          <Reveal delay={100}>
            <p className="metrics-since">
              Building AI products since <strong>2022</strong>.
            </p>
          </Reveal>
        </div>
        <dl className="metrics-grid">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80} className="metric">
              <dt className="metric-val">
                <Counter to={s.v} suffix={s.suffix} decimals={s.decimals || 0} />
              </dt>
              <dd className="metric-label">{s.label}</dd>
            </Reveal>
          ))}
        </dl>
        <Reveal delay={500}>
          <p className="metrics-note">
            Figures cover projects delivered between our founding in 2022 and Q2 2026.
            Ask us for the working behind any of them.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

// ─── Closing CTA ────────────────────────────────────────────────────────
function ClosingCtaSection() {
  return (
    <section className="closing-cta on-inverse">
      <div className="page closing-inner">
        <div className="closing-bg" aria-hidden="true">
          <HeroAurora />
        </div>
        <div className="closing-content">
          <Reveal><Eyebrow>Start a conversation</Eyebrow></Reveal>
          <Reveal delay={120}>
            <h2 className="h-display" style={{ marginTop: 18, maxWidth: '16ch' }}>
              You bring the idea.<br/><em>We build the product.</em>
            </h2>
          </Reveal>
          <Reveal delay={240}>
            <p className="lede" style={{ marginTop: 22 }}>
              30 minutes, no slides, no sales pitch. We&rsquo;ll ask sharp questions and tell you honestly
              if we&rsquo;re the right fit. If we&rsquo;re not, we&rsquo;ll point you to someone who is. Since 2022,
              we&rsquo;ve helped founders and companies turn ideas into products people actually use — yours could be next.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="hero-ctas" style={{ marginTop: 28 }}>
              <Button kind="accent" href="#contact">Book a free call</Button>
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

    /* ── Hero — the page's ink block. Everything below it is paper, so the
          fold reads as one deliberate dark plate. ────────────────────────── */
    .hero { position: relative; min-height: 90dvh; padding: 64px 0 clamp(72px, 9vw, 112px); overflow: hidden; }
    .hero-glow { position: absolute; inset: -20% -10% -30%; pointer-events: none; opacity: 0.5; }
    .hero-vignette {
      position: absolute; inset: 0; pointer-events: none;
      background: radial-gradient(ellipse 60% 45% at 50% 108%, transparent, var(--inverse-bg) 76%);
    }
    .hero-content { position: relative; z-index: 2; padding-top: 2vh; }
    .hero-tag {
      display: inline-flex; align-items: center; gap: 12px;
      font-size: 13px; color: var(--text-muted);
      padding: 7px 14px 7px 12px;
      border: 1px solid oklch(1 0 0 / 0.14);
      border-radius: var(--radius-sm);
      background: oklch(1 0 0 / 0.05);
      opacity: 0; animation: heroFade 0.8s var(--ease) 0.05s forwards;
    }
    .hero-tag-mark { width: 6px; height: 6px; border-radius: 2px; background: var(--accent); flex-shrink: 0; }
    .hero-tag .bar { width: 1px; height: 13px; background: oklch(1 0 0 / 0.18); }

    /* Headline: each line rides up out of its own mask. The extra padding and
       matching negative margin keep descenders and the italic's overhang from
       being clipped by that mask. */
    .hero-h { margin-top: 30px; max-width: 20ch; }

    .hero-line { display: block; overflow: hidden; padding-bottom: 0.12em; margin-bottom: -0.12em; }
    .hero-line > span {
      display: block;
      transform: translateY(108%);
      animation: heroLine 1s var(--ease) forwards;
    }
    .hero-line:nth-child(1) > span { animation-delay: 0.12s; }
    .hero-line:nth-child(2) > span { animation-delay: 0.24s; }
    @keyframes heroLine { to { transform: none; } }
    @keyframes heroFade { to { opacity: 1; } }
    @keyframes heroRise { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }
    .hero-lede { margin-top: 26px; max-width: 54ch; opacity: 0; animation: heroRise 0.8s var(--ease) 0.42s forwards; }
    .hero-ctas { margin-top: 34px; display: flex; gap: 12px; flex-wrap: wrap; opacity: 0; animation: heroRise 0.8s var(--ease) 0.56s forwards; }

    /* Fact strip — replaces the two floating console rails. Shared baseline,
       so the three values line up across columns. */
    .hero-facts {
      margin-top: clamp(48px, 6vw, 72px);
      display: grid;
      grid-template-columns: repeat(3, minmax(0, max-content));
      gap: 14px clamp(32px, 6vw, 72px);
      opacity: 0; animation: heroRise 0.8s var(--ease) 0.70s forwards;
    }
    .hero-facts dt {
      font-family: var(--font-mono);
      font-size: 10.5px; letter-spacing: 0.15em; text-transform: uppercase;
      color: var(--text-faint);
    }
    .hero-facts dd { margin-top: 7px; font-size: 15px; font-weight: 500; letter-spacing: -0.014em; }

    .hero-marquee {
      margin-top: clamp(40px, 5vw, 60px);
      border-top: 1px solid oklch(1 0 0 / 0.12); border-bottom: 1px solid oklch(1 0 0 / 0.12);
      opacity: 0; animation: heroRise 0.9s var(--ease) 0.84s forwards;
      padding: 13px 0; overflow: hidden; max-width: 100%;
      -webkit-mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent);
              mask-image: linear-gradient(90deg, transparent, #000 6%, #000 94%, transparent);
    }
    .marquee-track { display: inline-flex; gap: 44px; white-space: nowrap; animation: marq 60s linear infinite; }
    .marquee-track span { font-size: 13px; color: var(--text-faint); letter-spacing: -0.008em; }
    .hero-marquee:hover .marquee-track { animation-play-state: paused; }
    @keyframes marq { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }

    @media (max-width: 760px) {
      .hero-facts { grid-template-columns: 1fr 1fr; }
      .hero-facts > div:last-child { grid-column: 1 / -1; }
    }

    /* ── Manifesto — the first paper section after the ink hero. ─────── */
    .manifesto { padding: var(--section-y) 0; }
    .manifesto-inner > * { max-width: 980px; }
    .manifesto-text {
      font-size: clamp(21px, 2.4vw, 33px);
      line-height: 1.32; margin-top: 22px; letter-spacing: -0.024em;
      font-weight: 400;
    }
    .manifesto-text em { font-family: var(--font-serif); font-style: italic; color: var(--accent); letter-spacing: -0.01em; }

    /* ── Section head — asymmetric: title left, support text offset right ── */
    .section-head {
      display: grid; grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.85fr);
      gap: clamp(32px, 5vw, 72px); align-items: end;
      margin-bottom: clamp(40px, 5vw, 60px);
    }
    .section-head-cta { display: flex; justify-content: flex-end; align-self: end; }
    @media (max-width: 880px) {
      .section-head { grid-template-columns: 1fr; gap: 24px; align-items: start; }
      .section-head-cta { justify-content: flex-start; }
    }

    /* ── Services — a list, not a card row ───────────────────────────── */
    .services-overview { padding: var(--section-y) 0 calc(var(--section-y) * 1.1); }
    .services-grid { border-top: 1px solid var(--border); }
    .service-row-wrap { display: block; }
    .service-row {
      display: grid; grid-template-columns: 64px minmax(0, 1fr) 40px;
      align-items: start; gap: clamp(16px, 3vw, 32px);
      padding: 30px 16px 30px 8px;
      border-bottom: 1px solid var(--border);
      cursor: pointer;
      border-radius: var(--radius-sm);
      transition: background-color 0.25s var(--ease);
    }
    .service-row:hover, .service-row.open { background: var(--bg-2); }
    .service-num { font-family: var(--font-mono); font-size: 11.5px; color: var(--text-faint); letter-spacing: 0.1em; padding-top: 5px; }
    .service-title { transition: color 0.2s var(--ease); display: flex; align-items: center; gap: 12px; flex-wrap: wrap; }
    .service-flag {
      font-size: 10px; font-weight: 500; letter-spacing: 0.11em; text-transform: uppercase;
      color: var(--accent);
      border: 1px solid var(--accent-glow);
      background: var(--accent-wash);
      padding: 3px 7px; border-radius: var(--radius-xs);
    }
    .service-row:hover .service-title { color: var(--accent); }
    .service-desc { color: var(--text-muted); margin-top: 9px; max-width: 62ch; font-size: 15px; }
    .service-tags { margin-top: 15px; display: flex; flex-wrap: wrap; gap: 7px; }
    .tag {
      display: inline-block; padding: 4px 9px;
      border: 1px solid var(--border); border-radius: var(--radius-xs);
      background: var(--surface);
      font-size: 11.5px; color: var(--text-dim); letter-spacing: -0.004em;
      text-transform: none;
    }
    .service-arrow { color: var(--text-faint); padding-top: 4px; justify-self: end; transition: color 0.2s var(--ease), transform 0.2s var(--ease); }
    .service-row:hover .service-arrow { color: var(--accent); transform: translateX(4px); }
    @media (max-width: 620px) {
      .service-row { grid-template-columns: minmax(0, 1fr) 32px; }
      .service-num { grid-row: 1; grid-column: 1; padding-top: 0; margin-bottom: -6px; }
      .service-body { grid-column: 1; }
      .service-arrow { grid-row: 1; grid-column: 2; }
    }

    /* ── Industries — lead card spans, the rest sit tighter beneath ───── */
    .industries-preview { padding: var(--section-y) 0; }
    .industries-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 16px; }
    .industry-lead { grid-column: 1 / -1; }
    .industry-card {
      padding: 30px; height: 100%;
      display: grid; grid-template-rows: minmax(112px, auto) 1fr; gap: 22px;
      border-radius: var(--radius-lg);
    }
    .industry-card:hover { transform: translateY(-3px); box-shadow: var(--shadow-3); }
    .industry-card.lead {
      grid-template-rows: none;
      grid-template-columns: minmax(0, 230px) minmax(0, 1fr);
      gap: clamp(28px, 5vw, 56px); align-items: center;
      padding: clamp(32px, 4vw, 44px);
      background: var(--bg-2);
    }
    .industry-kpi { padding-bottom: 20px; border-bottom: 1px solid var(--border); }
    .industry-card.lead .industry-kpi { padding-bottom: 0; border-bottom: none; border-right: 1px solid var(--border); padding-right: 32px; }
    .industry-kpi-val {
      font-family: var(--font-sans);
      font-size: clamp(40px, 4.4vw, 60px);
      font-weight: 600; letter-spacing: -0.045em; line-height: 0.94;
      color: var(--accent);
      font-variant-numeric: tabular-nums;
    }
    .industry-kpi-label { font-size: 13px; line-height: 1.4; color: var(--text-muted); margin-top: 11px; max-width: 26ch; }
    @media (max-width: 980px) {
      .industries-grid { grid-template-columns: 1fr; }
      .industry-card.lead { grid-template-columns: 1fr; align-items: start; }
      .industry-card.lead .industry-kpi { border-right: none; border-bottom: 1px solid var(--border); padding-right: 0; padding-bottom: 20px; }
    }

    /* ── Case studies — one lead, the rest two-up ────────────────────── */
    .cases-preview { padding: var(--section-y) 0; }
    /* Lead case full width, the rest two-up. A trailing card is alone in its
       row whenever its index is even, so it takes the full width instead. */
    .cases-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 18px; }
    .cases-grid > *:first-child { grid-column: 1 / -1; }
    .cases-grid > *:last-child:nth-child(even) { grid-column: 1 / -1; }

    .case-card {
      display: flex; flex-direction: column; height: 100%;
      border: 1px solid var(--border);
      border-radius: var(--radius-lg);
      overflow: hidden;
      background: var(--surface);
      box-shadow: var(--shadow-2);
      transition: transform 0.3s var(--ease), border-color 0.3s var(--ease), box-shadow 0.3s var(--ease);
    }
    .cases-grid > *:first-child .case-card { flex-direction: row; align-items: stretch; }
    .cases-grid > *:first-child .case-card-frame { flex: 1 1 56%; border-bottom: none; border-right: 1px solid var(--border); }
    .cases-grid > *:first-child .case-card-frame img { height: 100%; min-height: 300px; }
    .cases-grid > *:first-child .case-card-body { flex: 1 1 44%; padding: clamp(28px, 3vw, 40px); justify-content: center; }
    /* In the lead card the text block is centred as a group, so the copy must
       not stretch to fill — otherwise a gap opens between it and the figure. */
    .cases-grid > *:first-child .case-card-position { flex: 0 1 auto; }
    .cases-grid > *:first-child .case-foot { margin-top: 28px; }
    .cases-grid > *:first-child .case-card-name { font-size: clamp(28px, 3vw, 38px); }

    .case-card:hover { transform: translateY(-5px); border-color: var(--case-accent, var(--border-strong)); box-shadow: var(--shadow-4); }
    .case-card-frame { background: var(--surface-3); border-bottom: 1px solid var(--border); }
    .case-frame-bar {
      display: flex; align-items: center; gap: 7px;
      padding: 9px 12px;
      background: var(--surface-2);
      border-bottom: 1px solid var(--border);
    }
    .case-frame-bar .dot { width: 9px; height: 9px; border-radius: 999px; display: block; }
    .case-frame-url { margin-left: 8px; font-size: 10.5px; color: var(--text-dim); }
    .case-card-frame img { display: block; width: 100%; height: 190px; object-fit: cover; object-position: top left; }
    .case-card-body { padding: 24px; display: flex; flex-direction: column; flex: 1; }
    .case-card-name { font-size: 24px; font-weight: 600; letter-spacing: -0.03em; margin-top: 12px; line-height: 1.08; }
    .case-card-position { font-size: 14.5px; color: var(--text-muted); line-height: 1.55; margin-top: 12px; flex: 1; }
    .case-meta { font-size: 11px; letter-spacing: 0.11em; text-transform: uppercase; display: flex; gap: 8px; }
    /* Pinned to the bottom so the outcome numbers form one clean line */
    .case-foot { display: flex; justify-content: space-between; align-items: flex-end; margin-top: 24px; padding-top: 18px; border-top: 1px solid var(--border); }
    .case-card-outcomes { display: flex; flex-direction: column; gap: 4px; }
    .case-card-v { font-size: 26px; font-weight: 600; letter-spacing: -0.035em; line-height: 1; color: var(--case-accent, var(--accent)); font-variant-numeric: tabular-nums; }
    .case-card-l { font-size: 12.5px; line-height: 1.4; color: var(--text-muted); max-width: 26ch; }
    .case-arrow { color: var(--text-faint); transition: color 0.2s var(--ease), transform 0.2s var(--ease); font-size: 20px; line-height: 1; }
    .case-card:hover .case-arrow { color: var(--case-accent, var(--accent)); transform: translateX(4px); }
    @media (max-width: 900px) {
      .cases-grid { grid-template-columns: 1fr; }
      .cases-grid > *:first-child .case-card { flex-direction: column; }
      .cases-grid > *:first-child .case-card-frame { border-right: none; border-bottom: 1px solid var(--border); }
      .cases-grid > *:first-child .case-card-frame img { min-height: 0; height: 190px; }
    }

    /* ── Metrics ─────────────────────────────────────────────────────── */
    .metrics { padding: var(--section-y) 0; border-block: 1px solid var(--border-accent); }
    .metrics-head { display: flex; justify-content: space-between; align-items: baseline; gap: 24px; flex-wrap: wrap; }
    .metrics-since { font-size: 15px; color: var(--text-muted); }
    .metrics-since strong { color: var(--text); font-weight: 600; }
    .metrics-grid {
      display: grid; grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 1px; background: var(--border);
      margin-top: 36px;
      border: 1px solid var(--border);
      border-radius: var(--radius-lg);
      overflow: hidden;
    }
    .metric { padding: clamp(28px, 3vw, 40px) 28px; background: var(--surface); }
    .metric-val {
      font-family: var(--font-sans);
      font-size: clamp(36px, 4.6vw, 58px);
      font-weight: 600; letter-spacing: -0.045em; line-height: 1;
      color: var(--text);
      font-variant-numeric: tabular-nums;
    }
    .metric-label {
      font-size: 13px; color: var(--text-muted);
      line-height: 1.45; margin-top: 16px; max-width: 22ch;
    }
    .metrics-note { font-size: 13px; color: var(--text-dim); margin-top: 26px; max-width: 68ch; }
    @media (max-width: 880px) { .metrics-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
    @media (max-width: 460px) { .metrics-grid { grid-template-columns: 1fr; } }

    /* ── Closing CTA — the start of the dark zone that carries into the
          footer, so this is one deliberate region, not a stray stripe. ── */
    .closing-cta { padding: clamp(88px, 10vw, 140px) 0; position: relative; overflow: hidden; }
    .closing-inner { position: relative; }
    .closing-bg { position: absolute; inset: -120px; opacity: 0.55; z-index: 0; }
    .closing-content { position: relative; z-index: 2; max-width: 740px; }
  `;
  document.head.appendChild(s);
})();

Object.assign(window, { PageHome, ClosingCtaSection });
