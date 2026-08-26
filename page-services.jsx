/* Services page — two-tier: AI flagship + full-spectrum digital suite */

// ── Consistent line-icon set (24px, currentColor) ───────────────────────
const SvcIcon = {
  vision: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
  ),
  generative: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/><circle cx="12" cy="12" r="3"/></svg>
  ),
  data: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5"/><path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg>
  ),
  mlops: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M7 8a4 4 0 1 0 0 8c2.5 0 3.5-2 5-4s2.5-4 5-4a4 4 0 1 1 0 8c-2.5 0-3.5-2-5-4"/></svg>
  ),
  // Deliberately not a rocket. Deployment here means the same model running
  // on a phone and in the cloud — concentric reach, not a launch.
  deploy: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="2.2"/><path d="M8.2 8.2a5.4 5.4 0 0 0 0 7.6M15.8 8.2a5.4 5.4 0 0 1 0 7.6"/><path d="M5.4 5.4a9.4 9.4 0 0 0 0 13.2M18.6 5.4a9.4 9.4 0 0 1 0 13.2"/></svg>
  ),
  uiux: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 9v12"/></svg>
  ),
  web: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><rect x="2.5" y="4" width="19" height="15" rx="2"/><path d="M2.5 8h19M6 6h.01M8.5 6h.01"/></svg>
  ),
  mobile: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="2.5" width="12" height="19" rx="2.5"/><path d="M11 18h2"/></svg>
  ),
  dataeng: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M3 4h18l-7 8v6l-4 2v-8L3 4Z"/></svg>
  ),
  bi: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><path d="M4 20V4M20 20H4M8 16v-4M12 16V8M16 16v-6"/></svg>
  ),
  fintech: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"><rect x="2.5" y="5" width="19" height="14" rx="2"/><path d="M2.5 9.5h19M6 15h4"/></svg>
  ),
};

function PageServices() {
  const { setPage } = useRouter();

  // ── Tier 1 — Flagship AI & Intelligent Systems ──
  const aiServices = [
    {
      slug: 'vision',
      icon: 'vision',
      t: 'Computer Vision Solutions',
      value: 'AI that can see and understand images or video in real time — useful for quality checks, safety monitoring, security, and more.',
      caps: ['Automatically spot and track objects', 'Catch quality or safety issues instantly', 'Works with cameras you already have'],
    },
    {
      slug: 'generative',
      icon: 'generative',
      t: 'Generative AI Solutions',
      value: 'Custom AI assistants that talk to your customers or your team — and actually get things right.',
      caps: ['Chat and voice assistants that sound human', 'Connects to your existing tools and data', 'Accurate, on-brand, and safe by design'],
    },
    {
      slug: 'data',
      icon: 'data',
      t: 'AI Data Services',
      value: 'Clean, well-organized data — the foundation every good AI product is built on.',
      caps: ['Organizing and labeling your data', 'Filling in data gaps automatically', 'Quality-checked at every step'],
    },
    {
      slug: 'mlops',
      icon: 'mlops',
      t: 'MLOps & AI Infrastructure',
      value: 'We make sure your AI keeps performing well after launch, not just during the demo.',
      caps: ['Regular performance check-ups', 'Automatic updates and improvements', 'Early alerts if something needs attention'],
    },
    {
      slug: 'deploy',
      icon: 'deploy',
      t: 'Edge & Cloud AI Deployment',
      value: 'Your AI runs smoothly and affordably, wherever your customers are — on their phone or in the cloud.',
      caps: ['Runs on the cloud or directly on-device', 'Optimized to keep your costs low', 'Scales automatically as you grow'],
    },
  ];

  // ── Tier 2 — Full-spectrum digital ──
  const suiteServices = [
    { icon: 'uiux', t: 'App & Product Design', value: 'Product design and user research that makes your app simple and enjoyable to use.', tags: ['Product design', 'User experience', 'Research'] },
    { icon: 'web', t: 'Website & Web App Development', value: 'Modern, fast websites and web apps — built to scale with you.', tags: ['Web apps', 'Platforms', 'Performance'], ai: true },
    { icon: 'mobile', t: 'iOS & Android App Development', value: 'Mobile apps for iPhone and Android, with AI built in from day one.', tags: ['iOS', 'Android', 'Cross-platform'], ai: true },
    { icon: 'dataeng', t: 'Data Infrastructure', value: 'The behind-the-scenes systems that keep your data organized and accessible.', tags: ['Pipelines', 'Warehouses', 'Infra'] },
    { icon: 'bi', t: 'Reporting & Analytics Dashboards', value: 'Clear dashboards that show you what’s happening in your business, sharpened with AI insight.', tags: ['Analytics', 'Reporting', 'Dashboards'], ai: true },
    { icon: 'fintech', t: 'Fintech & Trading Platforms', value: 'Specialized financial dashboards and tools, built for accuracy and trust.', tags: ['Trading UIs', 'Fintech', 'Compliance'] },
  ];

  return (
    <main className="services-page">
      <PageHeader
        eyebrow="Services"
        title={<>AI-powered products,<br/><em>built end-to-end.</em></>}
        lede="AI is at the heart of everything we build — but a great AI feature still needs a great app around it. We design the interface, build the product, set up your data, and get it all live, usually starting with a working version in 4 weeks. One team, one timeline, nothing outsourced — the same way we've built AI products since 2022."
      />

      {/* ── TIER 1 — AI FLAGSHIP ──────────────────────────────────────── */}
      <section className="ai-tier">
        <div className="ai-tier-glow" aria-hidden></div>
        <div className="page">
          <div className="tier-head">
            <Reveal>
              <div className="tier-label">
                <span className="tier-star">✦</span>
                <span>Our specialty</span>
              </div>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="h-section tier-title">AI Product Development</h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="lede tier-lede">
                This is what we do best: building the AI that powers your product — from a fast first
                version to a fully working system your customers rely on every day.
              </p>
            </Reveal>
          </div>

          <div className="ai-grid">
            {aiServices.map((s, i) => (
              <Reveal key={s.slug} delay={i * 70}>
                <CornerCard className="ai-card" glow>
                  <div className="ai-card-top">
                    <div className="ai-badge">{SvcIcon[s.icon]}</div>
                    <span className="mono ai-card-n">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="ai-card-t">{s.t}</h3>
                  <p className="ai-card-value">{s.value}</p>
                  <ul className="ai-card-caps">
                    {s.caps.map(c => <li key={c}><span className="cap-tick"></span><span>{c}</span></li>)}
                  </ul>
                  <button className="ai-learn" onClick={() => setPage('contact')}>
                    <span>Discuss your project</span>
                    <span className="ai-learn-arrow">→</span>
                  </button>
                </CornerCard>
              </Reveal>
            ))}

            {/* Trailing emphasis cell */}
            <Reveal delay={aiServices.length * 70}>
              <div className="ai-card ai-card-cta">
                <div className="ai-cta-eyebrow">Your AI product</div>
                <h3 className="ai-cta-h">Built once.<br/>Owned by you.</h3>
                <p className="ai-cta-p">Start with one capability, or let us build and run the whole thing.</p>
                <Button kind="accent" onClick={() => setPage('contact')}>Book a free call</Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── INTEGRATED DELIVERY ───────────────────────────────────────── */}
      <section className="integrated hairline-b hairline">
        <div className="page integrated-inner">
          <Reveal className="integrated-text">
            <Eyebrow>Why one team</Eyebrow>
            <h2 className="h-section" style={{ marginTop: 16, maxWidth: '22ch' }}>
              AI only matters if it&rsquo;s part of a <em>product people love using</em>.
            </h2>
            <p className="lede" style={{ marginTop: 22 }}>
              A smart algorithm sitting in a spreadsheet doesn&rsquo;t help anyone. It only creates value
              once it&rsquo;s part of an app or dashboard people actually open every day. That&rsquo;s why we build
              the AI and the product around it together, as one team.
            </p>
            <p className="lede" style={{ marginTop: 18 }}>
              No juggling separate vendors for the &ldquo;AI part&rdquo; and the &ldquo;app part.&rdquo; No gaps between the
              team that built the model and the team that built the screen you&rsquo;re looking at. One team,
              accountable for all of it.
            </p>
          </Reveal>

          <Reveal delay={160} className="integrated-stack">
            <div className="stack-label">A single team, every layer</div>
            {[
              { l: 'Experience', s: 'app · website · mobile', accent: 'var(--accent-soft)' },
              { l: 'Intelligence', s: 'AI & automation', accent: 'var(--accent)', flag: true },
              { l: 'Platform', s: 'behind-the-scenes systems', accent: 'var(--text-dim)' },
              { l: 'Data', s: 'organized, reliable, ready', accent: 'var(--text-faint)' },
            ].map((layer, i) => (
              <div key={layer.l} className={`stack-row ${layer.flag ? 'flag' : ''}`} style={{ '--row-accent': layer.accent }}>
                <div className="stack-dot"></div>
                <div className="stack-l">{layer.l}{layer.flag && <span className="stack-flag">Our specialty</span>}</div>
                <div className="stack-s">{layer.s}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── TIER 2 — FULL-SPECTRUM SUITE ──────────────────────────────── */}
      <section className="suite-tier">
        <div className="page">
          <div className="tier-head">
            <Reveal><div className="tier-label"><span>Everything else your product needs</span></div></Reveal>
            <Reveal delay={120}><h2 className="h-section tier-title">Everything a great product needs, beyond the AI.</h2></Reveal>
            <Reveal delay={200}>
              <p className="lede tier-lede">
                The design, engineering, and data work that turns an AI feature into a product people
                actually want to use — built by the same team, at the same time.
              </p>
            </Reveal>
          </div>

          <div className="suite-grid">
            {suiteServices.map((s, i) => (
              <Reveal key={s.t} delay={i * 60}>
                <div className="suite-card">
                  <div className="suite-top">
                    <div className="suite-icon">{SvcIcon[s.icon]}</div>
                    {s.ai && <span className="suite-ai">AI-enabled</span>}
                  </div>
                  <h3 className="suite-t">{s.t}</h3>
                  <p className="suite-value">{s.value}</p>
                  <div className="suite-tags">
                    {s.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <EngagementShape />
      <ClosingCtaSection />
    </main>
  );
}

function EngagementShape() {
  const phases = [
    { w: '01', t: 'Kickoff & Plan', d: 'We get clear on the problem, your customers, and what a first version needs to include. You get a simple written plan, not a slide deck.', dur: '3–5 days' },
    { w: '02', t: 'Build Your MVP', d: 'We design and build your first real, working product — AI included — ready to put in front of real users.', dur: '4 weeks' },
    { w: '03', t: 'Launch & Learn', d: 'We launch it, watch how people actually use it, and fix or adjust anything that needs it.', dur: '2 weeks' },
    { w: '04', t: 'Grow It Into the Full Product', d: 'Once the MVP proves itself, we build out the full feature set, harden it for scale, and keep improving it with you.', dur: 'scope-based' },
    { w: '05', t: 'Ongoing Support', d: 'We stay on to monitor, maintain, and keep improving the product as your business grows.', dur: 'ongoing' },
  ];
  return (
    <section className="engagement hairline-b hairline">
      <div className="page">
        <div className="section-head">
          <div>
            <Reveal><Eyebrow>Engagement shape</Eyebrow></Reveal>
            <Reveal delay={120}><h2 className="h-section" style={{ marginTop: 16 }}>How a typical project flows.</h2></Reveal>
          </div>
          <Reveal delay={200}>
            <p className="lede" style={{ alignSelf: 'end' }}>
              Every engagement is bespoke, but the shape is consistent — discovery, foundation, iteration, hardening, operation. Each phase has a deliverable you can hold.
            </p>
          </Reveal>
        </div>

        <div className="engagement-timeline">
          {phases.map((p, i) => (
            <Reveal key={p.w} delay={i * 100} className="phase">
              <div className="phase-marker mono">{p.w}</div>
              <div className="phase-line"></div>
              <div className="phase-body">
                <div className="phase-head">
                  <h3 className="h-card">{p.t}</h3>
                  <span className="phase-dur">{p.dur}</span>
                </div>
                <p className="muted phase-d">{p.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// Shared page header
function PageHeader({ eyebrow, title, lede }) {
  return (
    <section className="page-header hairline-b">
      <div className="page page-header-inner">
        <Reveal><Eyebrow>{eyebrow}</Eyebrow></Reveal>
        <Reveal delay={120}>
          <h1 className="h-display page-header-title">{title}</h1>
        </Reveal>
        {lede && (
          <Reveal delay={240}>
            <p className="lede page-header-lede">{lede}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}

(function injectServicesCss() {
  if (document.getElementById('services-css')) return;
  const s = document.createElement('style');
  s.id = 'services-css';
  s.textContent = `
    /* ── Shared page header ──────────────────────────────────────────── */
    .page-header { padding: clamp(64px, 8vw, 104px) 0 clamp(56px, 6vw, 80px); }
    .page-header-inner > * { max-width: 1060px; }
    .page-header-title { margin-top: 24px; max-width: 20ch; }
    .page-header-lede { margin-top: 26px; max-width: 64ch; }

    /* ── Tier heads ──────────────────────────────────────────────────── */
    .tier-head { max-width: 860px; margin-bottom: clamp(40px, 5vw, 56px); }
    .tier-label {
      display: inline-flex; align-items: center; gap: 9px;
      padding: 5px 10px;
      border-radius: var(--radius-xs);
      border: 1px solid var(--accent-glow);
      background: var(--accent-wash);
      font-size: 11.5px; font-weight: 500; letter-spacing: 0.02em;
      color: var(--accent);
      text-transform: none;
    }
    .tier-star { color: var(--accent); }
    .tier-title { margin-top: 18px; }
    .tier-lede { margin-top: 18px; }

    /* ── Flagship AI tier ────────────────────────────────────────────── */
    .ai-tier { padding: var(--section-y) 0; position: relative; overflow: hidden; background: var(--bg-2); }
    .ai-tier-glow {
      position: absolute; top: -12%; right: -6%; width: 48%; height: 68%;
      background: radial-gradient(ellipse, var(--accent-wash), transparent 66%);
      filter: blur(70px); pointer-events: none;
    }
    /* Two columns, not three: the cards carry a capability list each and the
       three-across version squeezed them into unreadable ribbons. */
    .ai-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 16px; position: relative; }
    .ai-card { padding: clamp(26px, 3vw, 34px); display: flex; flex-direction: column; height: 100%; }
    .ai-card-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px; }
    .ai-badge {
      width: 46px; height: 46px; border-radius: var(--radius);
      display: grid; place-items: center;
      color: var(--accent);
      background: var(--accent-wash);
      border: 1px solid var(--accent-glow);
    }
    .ai-badge svg { width: 23px; height: 23px; }
    .ai-card-n { font-size: 11.5px; color: var(--text-faint); letter-spacing: 0.1em; }
    .ai-card-t { font-size: 21px; font-weight: 600; letter-spacing: -0.025em; line-height: 1.18; }
    .ai-card-value { font-size: 14.5px; color: var(--text-muted); line-height: 1.55; margin-top: 11px; }
    .ai-card-caps { list-style: none; margin-top: 20px; padding-top: 18px; border-top: 1px solid var(--border); display: flex; flex-direction: column; gap: 10px; }
    .ai-card-caps li { display: flex; gap: 11px; align-items: flex-start; font-size: 13.5px; color: var(--text); }
    .cap-tick { width: 5px; height: 5px; border-radius: 1px; background: var(--accent); margin-top: 8px; flex-shrink: 0; }
    /* Pinned to the bottom so every card's link lands on the same line. */
    .ai-learn {
      margin-top: auto; padding-top: 24px;
      display: inline-flex; align-items: center; gap: 8px;
      font-size: 13.5px; font-weight: 500; color: var(--accent);
      align-self: flex-start;
    }
    .ai-learn-arrow { transition: transform 0.2s var(--ease); }
    .ai-card:hover .ai-learn-arrow, .ai-learn:hover .ai-learn-arrow { transform: translateX(4px); }

    .ai-card-cta {
      background: var(--accent);
      color: var(--accent-ink);
      border: none;
      border-radius: var(--radius-lg);
      justify-content: center;
      box-shadow: var(--shadow-accent);
    }
    .ai-card-cta .btn-accent { background: var(--accent-ink); color: var(--accent); box-shadow: none; }
    .ai-card-cta .btn-accent:hover { background: var(--accent-ink); filter: brightness(0.94); }
    .ai-cta-eyebrow { font-size: 11.5px; letter-spacing: 0.14em; opacity: 0.8; }
    .ai-cta-h { font-size: clamp(26px, 2.6vw, 32px); font-weight: 600; letter-spacing: -0.035em; line-height: 1.06; margin: 16px 0 14px; }
    .ai-cta-p { font-size: 14.5px; line-height: 1.55; margin-bottom: 24px; opacity: 0.88; }
    @media (max-width: 720px) { .ai-grid { grid-template-columns: 1fr; } }

    /* ── Integrated stack ────────────────────────────────────────────── */
    .integrated { padding: var(--section-y) 0; }
    .integrated-inner { display: grid; grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr); gap: clamp(40px, 6vw, 80px); align-items: center; }
    .integrated-text em { font-family: var(--font-serif); font-style: italic; color: var(--accent); }
    .integrated-stack { display: flex; flex-direction: column; gap: 8px; }
    .stack-label { font-size: 11px; letter-spacing: 0.14em; color: var(--text-faint); text-transform: uppercase; margin-bottom: 10px; }
    .stack-row {
      display: grid; grid-template-columns: 10px minmax(0, 1fr) auto;
      align-items: center; gap: 16px;
      padding: 18px 20px;
      border: 1px solid var(--border);
      border-radius: var(--radius);
      background: var(--surface);
      box-shadow: var(--shadow-1);
      transition: border-color 0.3s var(--ease), transform 0.3s var(--ease), box-shadow 0.3s var(--ease);
    }
    .stack-row:hover { transform: translateX(4px); border-color: var(--row-accent); box-shadow: var(--shadow-2); }
    .stack-row.flag { border-color: var(--accent-glow); background: var(--accent-wash); }
    .stack-dot { width: 9px; height: 9px; border-radius: 2px; background: var(--row-accent); }
    .stack-l { font-size: 16.5px; font-weight: 500; letter-spacing: -0.018em; display: flex; align-items: center; gap: 11px; flex-wrap: wrap; }
    .stack-flag {
      font-size: 10px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase;
      color: var(--accent);
      border: 1px solid var(--accent-glow);
      padding: 3px 7px; border-radius: var(--radius-xs);
    }
    .stack-s { font-size: 12px; color: var(--text-dim); }
    @media (max-width: 980px) { .integrated-inner { grid-template-columns: 1fr; gap: 44px; } }
    @media (max-width: 520px) { .stack-row { grid-template-columns: 10px minmax(0, 1fr); } .stack-s { grid-column: 2; } }

    /* ── Suite tier ──────────────────────────────────────────────────── */
    .suite-tier { padding: var(--section-y) 0; background: var(--bg-2); border-top: 1px solid var(--border); }
    .suite-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 14px; }
    .suite-card {
      padding: 26px;
      border: 1px solid var(--border);
      border-radius: var(--radius-lg);
      background: var(--surface);
      box-shadow: var(--shadow-1);
      display: flex; flex-direction: column; height: 100%;
      transition: transform 0.3s var(--ease), box-shadow 0.3s var(--ease), border-color 0.3s var(--ease);
    }
    .suite-card:hover { transform: translateY(-3px); box-shadow: var(--shadow-3); border-color: var(--border-strong); }
    .suite-top { display: flex; align-items: center; justify-content: space-between; gap: 12px; margin-bottom: 20px; }
    .suite-icon {
      width: 40px; height: 40px; border-radius: var(--radius-sm);
      display: grid; place-items: center;
      color: var(--accent);
      background: var(--accent-wash);
      border: 1px solid var(--accent-glow);
      flex-shrink: 0;
    }
    .suite-icon svg { width: 21px; height: 21px; }
    .suite-ai {
      font-size: 10px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase;
      color: var(--accent);
      border: 1px solid var(--accent-glow);
      padding: 3px 7px; border-radius: var(--radius-xs);
      background: var(--accent-wash);
    }
    .suite-t { font-size: 18px; font-weight: 600; letter-spacing: -0.022em; line-height: 1.22; }
    .suite-value { font-size: 14px; color: var(--text-muted); line-height: 1.55; margin-top: 10px; flex: 1; }
    /* Aligned to the card foot so the tag rows form one line across columns. */
    .suite-tags { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 20px; padding-top: 16px; border-top: 1px solid var(--border); }
    @media (max-width: 980px) { .suite-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
    @media (max-width: 600px) { .suite-grid { grid-template-columns: 1fr; } }

    /* ── Engagement timeline ─────────────────────────────────────────── */
    .engagement { padding: var(--section-y) 0; }
    .engagement-timeline { position: relative; }
    .phase { display: grid; grid-template-columns: 62px 34px minmax(0, 1fr); align-items: start; padding: 26px 0; border-bottom: 1px solid var(--border); gap: 20px; }
    .phase:last-child { border-bottom: none; }
    .phase-marker { font-size: 11.5px; letter-spacing: 0.1em; color: var(--text-faint); padding-top: 5px; }
    .phase-line { width: 9px; height: 9px; border-radius: 2px; background: var(--accent); margin-top: 9px; position: relative; }
    .phase-line::after { content: ""; position: absolute; left: 50%; top: 100%; width: 1px; height: 96px; background: var(--border); transform: translateX(-50%); }
    .phase:last-child .phase-line::after { display: none; }
    .phase-head { display: flex; justify-content: space-between; align-items: baseline; gap: 20px; flex-wrap: wrap; }
    .phase-dur { font-size: 11.5px; color: var(--text-dim); letter-spacing: 0.06em; }
    .phase-d { margin-top: 8px; max-width: 64ch; font-size: 14.5px; }
    @media (max-width: 560px) { .phase { grid-template-columns: 34px minmax(0, 1fr); } .phase-marker { display: none; } }
  `;
  document.head.appendChild(s);
})();

Object.assign(window, { PageServices, PageHeader });
