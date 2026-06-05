/* About page */

function PageAbout() {
  const principles = [
    { n: '01', t: 'Outcomes, then methods', d: 'We choose the boring approach when it works. The clever one only when it must. Either way, we agree on the outcome before we touch a model.' },
    { n: '02', t: 'Reproducibility is not optional', d: 'Every result we hand you should be re-derivable next quarter. Every pipeline we ship is auditable from first principles.' },
    { n: '03', t: 'Tell the inconvenient truth early', d: 'If a project is going to miss, you hear it from us in week three — not in the post-mortem.' },
    { n: '04', t: 'Models are products, not papers', d: 'Latency, cost, and reliability ship with the weights. A model that wins benchmarks but loses dollars is a failure.' },
    { n: '05', t: 'Build the loop, not the demo', d: 'The model you launch is rarely the model you keep. We ship the closed-loop system that lets you keep getting better.' },
    { n: '06', t: 'Decline gracefully', d: 'When a project isn\u2019t the right shape for us, we say so. We will tell you who is, if we know.' },
  ];

  return (
    <main className="about-page">
      <PageHeader
        eyebrow="About"
        title={<>A small studio, <em>uncommonly</em> deep at our layer.</>}
        lede="Corelogics was founded on a simple observation: most companies don&rsquo;t need an AI lab. They need a partner who can quietly, reliably ship the AI engine that lives under their product. That&rsquo;s us."
      />

      <section className="about-story hairline-b">
        <div className="page about-story-inner">
          <div className="about-story-side">
            <Reveal><Eyebrow>The premise</Eyebrow></Reveal>
            <Reveal delay={120}>
              <h2 className="h-section" style={{ marginTop: 16 }}>
                Most AI products fail in the gap between data and deployment.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200} className="about-story-text">
            <p>
              The model that works in a notebook does not survive a Tuesday in production. The dataset that hits 95% on a benchmark misses the edge case that defines the user experience. The pipeline that runs cleanly for the demo cracks the first time someone asks <em>which</em> version of <em>which</em> model produced <em>which</em> decision.
            </p>
            <p>
              Corelogics exists to close those gaps. Not by being an AI lab — there are enough of those, and they aren&rsquo;t set up to operate. We&rsquo;re a full-spectrum digital partner with AI at our core: we build the vision and generative systems that power your product, <em>and</em> the design, engineering, and data layers around them that turn intelligence into something people can actually use.
            </p>
            <p>
              We work with founders launching AI products, with product orgs scaling AI features inside larger companies, and with engineering leaders who would rather buy depth than build it from scratch.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="principles">
        <div className="page">
          <div className="section-head">
            <div>
              <Reveal><Eyebrow>How we work</Eyebrow></Reveal>
              <Reveal delay={120}><h2 className="h-section" style={{ marginTop: 16 }}>Six principles. <em>Non-negotiable.</em></h2></Reveal>
            </div>
            <Reveal delay={200}>
              <p className="lede" style={{ alignSelf: 'end' }}>
                These aren&rsquo;t aspirations. They&rsquo;re the operating principles every engagement is measured against — internally and with you.
              </p>
            </Reveal>
          </div>

          <div className="principles-grid">
            {principles.map((p, i) => (
              <Reveal key={p.n} delay={i * 80}>
                <CornerCard className="principle">
                  <div className="mono principle-n">{p.n}</div>
                  <h3 className="h-card principle-t">{p.t}</h3>
                  <p className="principle-d muted">{p.d}</p>
                </CornerCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="locations hairline-b hairline">
        <div className="page">
          <div className="section-head">
            <div>
              <Reveal><Eyebrow>Where we are</Eyebrow></Reveal>
              <Reveal delay={120}><h2 className="h-section" style={{ marginTop: 16 }}>Based in the UAE. <em>Shipping</em> globally.</h2></Reveal>
            </div>
            <Reveal delay={200}>
              <p className="lede" style={{ alignSelf: 'end' }}>
                We operate from Ajman Free Zone — set up to work across GCC, Europe, and beyond.
                One studio, one accountable team, no offshoring after signature.
              </p>
            </Reveal>
          </div>

          <Reveal>
            <CornerCard className="location-card">
              <div className="location-grid">
                <div className="location-meta">
                  <div className="mono location-flag">UAE</div>
                  <div className="location-city">Ajman Free Zone</div>
                  <div className="muted location-address">
                    Office C1-1F<br/>
                    Ajman Free Zone<br/>
                    Ajman, United Arab Emirates
                  </div>
                  <div className="location-contacts">
                    <a href="mailto:info@corelogics.ae" className="location-link">info@corelogics.ae</a>
                    <a href="https://www.corelogics.ae" className="location-link">www.corelogics.ae</a>
                  </div>
                </div>
                <div className="location-map" aria-hidden>
                  <svg viewBox="0 0 400 280" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
                    <defs>
                      <radialGradient id="loc-glow" cx="60%" cy="40%">
                        <stop offset="0" stopColor="var(--gold)" stopOpacity="0.4" />
                        <stop offset="1" stopColor="var(--gold)" stopOpacity="0" />
                      </radialGradient>
                    </defs>
                    <rect width="400" height="280" fill="oklch(0.13 0.012 250)" />
                    {/* Grid */}
                    <g stroke="oklch(0.22 0.018 250)" strokeWidth="0.5">
                      {Array.from({ length: 8 }).map((_, i) => (
                        <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="280" />
                      ))}
                      {Array.from({ length: 6 }).map((_, i) => (
                        <line key={`h${i}`} x1="0" y1={i * 50} x2="400" y2={i * 50} />
                      ))}
                    </g>
                    {/* Stylized coastline / arabian peninsula */}
                    <path d="M 60 100 Q 100 80 140 90 L 180 70 Q 230 60 270 90 Q 310 110 320 160 Q 310 200 270 220 Q 220 230 180 220 L 140 200 Q 100 190 80 160 Q 60 130 60 100 Z"
                          fill="oklch(0.18 0.014 250)" stroke="oklch(0.30 0.02 250)" strokeWidth="1" />
                    {/* Glow at location */}
                    <circle cx="240" cy="120" r="80" fill="url(#loc-glow)" />
                    {/* Location pin */}
                    <g transform="translate(240, 120)">
                      <circle r="14" fill="none" stroke="var(--gold)" strokeWidth="1" opacity="0.5">
                        <animate attributeName="r" from="6" to="22" dur="2.4s" repeatCount="indefinite" />
                        <animate attributeName="opacity" from="0.6" to="0" dur="2.4s" repeatCount="indefinite" />
                      </circle>
                      <circle r="5" fill="var(--gold)" />
                      <circle r="2.5" fill="oklch(0.18 0.02 80)" />
                    </g>
                    {/* Label */}
                    <g transform="translate(258, 116)">
                      <line x1="0" y1="0" x2="20" y2="-20" stroke="var(--text-dim)" strokeWidth="0.6" />
                      <text x="24" y="-24" fontFamily="JetBrains Mono" fontSize="9" letterSpacing="2" fill="var(--text-muted)">AJMAN · AE</text>
                      <text x="24" y="-12" fontFamily="JetBrains Mono" fontSize="8" fill="var(--text-faint)">25.4°N · 55.5°E</text>
                    </g>
                  </svg>
                </div>
              </div>
            </CornerCard>
          </Reveal>
        </div>
      </section>

      <section className="facts">
        <div className="page facts-grid">
          {[
            { k: 'Founded', v: '2022' },
            { k: 'Headquarters', v: 'Ajman Free Zone, UAE' },
            { k: 'Engagements shipped', v: '38 production' },
            { k: 'Domain depth', v: 'Agentic · Conversational · Vision' },
            { k: 'Delivery', v: 'GCC primary · global' },
            { k: 'Engagement model', v: 'Bespoke · MaaS · DaaS' },
            { k: 'Languages', v: 'EN · AR · UR · HI' },
            { k: 'Response time', v: '< 24h, weekdays' },
          ].map((f, i) => (
            <Reveal key={f.k} delay={i * 40} className="fact">
              <div className="mono fact-k">{f.k}</div>
              <div className="fact-v">{f.v}</div>
            </Reveal>
          ))}
        </div>
      </section>

      <ClosingCtaSection />
    </main>
  );
}

(function injectAboutCss() {
  if (document.getElementById('about-css')) return;
  const s = document.createElement('style');
  s.id = 'about-css';
  s.textContent = `
    .about-story { padding: 100px 0; }
    .about-story-inner { display: grid; grid-template-columns: 1fr 1.2fr; gap: 80px; align-items: start; }
    .about-story-side { position: sticky; top: 100px; }
    .about-story-text { display: flex; flex-direction: column; gap: 22px; font-size: 17px; line-height: 1.7; color: var(--text); max-width: 60ch; }
    .about-story-text em { font-family: var(--font-serif); font-style: italic; color: var(--gold); }
    .about-story-text p:first-child { font-size: 19px; color: var(--text); }
    @media (max-width: 980px) { .about-story-inner { grid-template-columns: 1fr; } .about-story-side { position: static; } }

    .principles { padding: 120px 0; }
    .principles-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
    .principle { padding: 32px; }
    .principle-n { font-size: 11px; letter-spacing: 0.18em; color: var(--text-faint); margin-bottom: 18px; }
    .principle-t { margin-bottom: 12px; }
    .principle-d { font-size: 14.5px; max-width: 32ch; }
    @media (max-width: 980px) { .principles-grid { grid-template-columns: 1fr; } }

    .team { padding: 120px 0; }
    .team-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
    .team-card { }
    .team-meta { margin-top: 20px; }
    .team-role { font-size: 11px; letter-spacing: 0.14em; color: var(--gold); text-transform: uppercase; margin-top: 8px; }
    .team-desc { font-size: 13.5px; margin-top: 12px; line-height: 1.55; }
    @media (max-width: 980px) { .team-grid { grid-template-columns: repeat(2, 1fr); } }
    @media (max-width: 600px) { .team-grid { grid-template-columns: 1fr; } }

    .locations { padding: 120px 0; }
    .location-card { padding: 0; overflow: hidden; }
    .location-grid { display: grid; grid-template-columns: 1fr 1.1fr; gap: 0; align-items: stretch; }
    .location-meta { padding: 48px; display: flex; flex-direction: column; gap: 16px; }
    .location-flag { font-size: 11px; letter-spacing: 0.2em; color: var(--gold); text-transform: uppercase; }
    .location-city { font-family: var(--font-sans); font-size: clamp(32px, 4vw, 48px); font-weight: 500; letter-spacing: -0.03em; line-height: 1; margin-top: 4px; }
    .location-address { font-size: 14.5px; line-height: 1.7; margin-top: 12px; }
    .location-contacts { display: flex; flex-direction: column; gap: 8px; margin-top: auto; padding-top: 28px; border-top: 1px solid var(--border); }
    .location-link { font-family: var(--font-mono); font-size: 13px; color: var(--text); transition: color 0.2s ease; letter-spacing: 0.02em; }
    .location-link:hover { color: var(--gold); }
    .location-map { border-left: 1px solid var(--border); min-height: 360px; background: oklch(0.12 0.01 250); }
    .location-map svg { display: block; width: 100%; height: 100%; }
    @media (max-width: 980px) {
      .location-grid { grid-template-columns: 1fr; }
      .location-map { border-left: none; border-top: 1px solid var(--border); min-height: 280px; }
      .location-meta { padding: 32px; }
    }

    .facts { padding: 80px 0 120px; }
    .facts-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: var(--border); border: 1px solid var(--border); border-radius: var(--radius); overflow: hidden; }
    .fact { padding: 28px 24px; background: oklch(0.15 0.012 250); }
    .fact-k { font-size: 10.5px; letter-spacing: 0.16em; color: var(--text-faint); text-transform: uppercase; margin-bottom: 14px; }
    .fact-v { font-size: 18px; letter-spacing: -0.01em; }
    @media (max-width: 880px) { .facts-grid { grid-template-columns: repeat(2, 1fr); } }
  `;
  document.head.appendChild(s);
})();

Object.assign(window, { PageAbout });
