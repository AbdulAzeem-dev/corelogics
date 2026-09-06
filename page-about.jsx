/* About page */

function PageAbout() {
  const principles = [
    {
      trait: 'Deliberate', discipline: 'Product & UI design',
      t: 'We design it before we build it',
      d: 'Every project starts as a real, clickable interface your team can use and argue with — not a spec document. Changing a screen takes an afternoon. Changing a shipped feature takes a sprint.',
    },
    {
      trait: 'Rigorous', discipline: 'Quality assurance',
      t: 'We test it like it is already live',
      d: 'Critical flows are covered by automated tests that run on every change, and a person reviews what tests cannot judge — tone, edge cases, and how the AI behaves when users go off-script.',
    },
    {
      trait: 'Trustworthy', discipline: 'Security & data',
      t: 'We treat your data as yours',
      d: 'Scoped access, encryption, and dependency scanning from the first commit — plus a documented answer for where your data lives and who can reach it, ready before you have to ask for it.',
    },
    {
      trait: 'Pragmatic', discipline: 'Performance',
      t: 'We build for real users, not benchmarks',
      d: 'Speed, cost, and reliability count as much as accuracy. An AI feature that scores well in testing but is slow or expensive in real use is not a win, so we measure it where your customers are.',
    },
    {
      trait: 'Durable', discipline: 'Engineering',
      t: 'We build it to be maintained',
      d: 'Documented, tested, and handed over in a state another engineer can pick up. Nothing held together with duct tape you cannot see — it should still make sense a year from now.',
    },
    {
      trait: 'Accountable', discipline: 'Delivery',
      t: 'We commit to a date and hold it',
      d: 'Every phase is scoped, quoted, and dated before it starts, and that is what you pay. If something is at risk, you hear it from us early enough to decide what to do about it.',
    },
  ];

  return (
    <main className="about-page">
      <PageHeader
        eyebrow="About"
        title={<>A sharp, fast-moving team that <em>builds real AI products</em>.</>}
        lede="Founded in 2022, Corelogics was started on a simple idea: most companies don&rsquo;t need an AI research lab. They need a partner who can quickly and reliably build the AI-powered product their customers will actually use. That&rsquo;s us — and we&rsquo;ve been proving it since day one."
      />

      <section className="about-story hairline-b">
        <div className="page about-story-inner">
          <div className="about-story-side">
            <Reveal><Eyebrow>The premise</Eyebrow></Reveal>
            <Reveal delay={120}>
              <h2 className="h-section" style={{ marginTop: 16 }}>
                Most AI ideas never make it to a real product.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={200} className="about-story-text">
            <p>
              An AI demo that works in a meeting doesn’t always survive real customers using it the next day. A model that scores well in testing can still miss the exact situation that matters most to your users. A system that runs fine for a demo can break the first time someone asks a simple question about how it <em>actually</em> works.
            </p>
            <p>
              Corelogics exists to close that gap. We&rsquo;re not an AI research lab — there are plenty of those already. We&rsquo;re a full product team with AI at the center: we build the AI that powers your product, <em>and</em> the design, engineering, and data work around it that turns it into something your customers can actually use.
            </p>
            <p>
              We work with founders launching their first AI product, with companies adding AI features to something they already run, and with teams who’d rather bring in an experienced partner than build this from scratch.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="principles on-accent">
        <div className="page">
          <div className="section-head">
            <div>
              <Reveal><Eyebrow>How we work</Eyebrow></Reveal>
              <Reveal delay={120}><h2 className="h-section" style={{ marginTop: 16 }}>Six principles we <em>work by</em>.</h2></Reveal>
            </div>
            <Reveal delay={200}>
              <p className="lede" style={{ alignSelf: 'end' }}>
                These aren&rsquo;t slogans on a wall. They&rsquo;re how we actually work — and what you can hold us to on every project.
              </p>
            </Reveal>
          </div>

          <div className="principles-grid">
            {principles.map((p, i) => (
              <Reveal key={p.trait} delay={i * 80}>
                <article className="principle">
                  <div className="principle-head">
                    <span className="principle-trait">{p.trait}</span>
                    <span className="principle-discipline mono">{p.discipline}</span>
                  </div>
                  <h3 className="h-card principle-t">{p.t}</h3>
                  <p className="principle-d muted">{p.d}</p>
                </article>
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
              <Reveal delay={120}><h2 className="h-section" style={{ marginTop: 16 }}>Based in the UAE. <em>Building</em> for clients worldwide.</h2></Reveal>
            </div>
            <Reveal delay={200}>
              <p className="lede" style={{ alignSelf: 'end' }}>
                We’re based in Ajman Free Zone, and work with clients across the US, Europe, and the GCC.
                One team, fully accountable — nothing gets outsourced after you sign on.
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
                    <a href="mailto:info@corelogics.co" className="location-link">
                      <svg className="loc-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>
                      <span>info@corelogics.co</span>
                    </a>
                    <a href="https://www.corelogics.co" target="_blank" rel="noopener" className="location-link">
                      <svg className="loc-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.5 2.5 15 0 18M12 3c-2.5 2.5-2.5 15 0 18"/></svg>
                      <span>www.corelogics.co</span>
                    </a>
                    <a href="https://www.linkedin.com/company/corelogics-ai" target="_blank" rel="noopener" className="location-link">
                      <svg className="loc-ico" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5ZM3 9h4v12H3V9Zm6 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C20.4 8.65 21 10.3 21 13v8h-4v-7c0-1.67-.03-3.8-2.3-3.8-2.3 0-2.66 1.8-2.66 3.68V21H9V9Z"/></svg>
                      <span>CoreLogics</span>
                    </a>
                  </div>
                </div>
                <div className="location-photo">
                  <img src="assets/ajman-skyline.png"
                       alt="The Ajman waterfront at dusk, United Arab Emirates"
                       loading="lazy" decoding="async" />
                  <div className="location-photo-tint" aria-hidden="true"></div>
                  <div className="location-photo-label mono" aria-hidden="true">Ajman &middot; AE</div>
                </div>
              </div>
            </CornerCard>
          </Reveal>
        </div>
      </section>

      <section className="facts hairline">
        <div className="page">
          <div className="facts-grid">
          {[
            { k: 'Founded', v: '2022' },
            { k: 'Headquarters', v: 'Ajman Free Zone, UAE' },
            { k: 'Products delivered', v: '38' },
            { k: 'What we build', v: 'AI Agents · Chatbots · Computer Vision' },
            { k: 'Delivery', v: 'Clients across the US, GCC & Europe' },
            { k: 'How we work', v: 'MVP to full product, plus support' },
            { k: 'Languages', v: 'EN · AR · UR · HI' },
            { k: 'Response time', v: '< 24h, weekdays' },
          ].map((f, i) => (
            <Reveal key={f.k} delay={i * 40} className="fact">
              <div className="mono fact-k">{f.k}</div>
              <div className="fact-v">{f.v}</div>
            </Reveal>
            ))}
          </div>
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
    .about-story { padding: var(--section-y) 0; }
    .about-story-inner { display: grid; grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.2fr); gap: clamp(40px, 6vw, 80px); align-items: start; }
    .about-story-side { position: sticky; top: 104px; }
    .about-story-text { display: flex; flex-direction: column; gap: 22px; font-size: 17px; line-height: 1.7; color: var(--text); max-width: 60ch; }
    .about-story-text em { font-family: var(--font-serif); font-style: italic; color: var(--accent); }
    .about-story-text p:first-child { font-size: 19px; color: var(--text); }
    @media (max-width: 980px) { .about-story-inner { grid-template-columns: 1fr; } .about-story-side { position: static; } }

    .principles { padding: var(--section-y) 0; border-block: 1px solid var(--border-accent); }
    .principles-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1px; background: var(--border); border: 1px solid var(--border); border-radius: var(--radius-lg); overflow: hidden; box-shadow: var(--shadow-3); }
    .principles-grid > * { min-width: 0; }
    .principle {
      position: relative; height: 100%;
      display: flex; flex-direction: column;
      padding: clamp(28px, 2.6vw, 38px);
      background: var(--surface);
      transition: background 320ms cubic-bezier(0.22, 1, 0.36, 1);
    }
    .principle::before {
      content: ""; position: absolute; inset: 0 auto 0 0; width: 2px;
      background: var(--accent); transform: scaleY(0); transform-origin: top;
      transition: transform 420ms cubic-bezier(0.22, 1, 0.36, 1);
    }
    .principle:hover { background: var(--surface-2); }
    .principle:hover::before { transform: scaleY(1); }

    /* The trait leads — that is what the card is actually about — with the
       discipline it applies to sitting beside it as a quiet qualifier. */
    .principle-head {
      display: flex; align-items: baseline; gap: 12px; flex-wrap: wrap;
      padding-bottom: 20px; margin-bottom: 22px;
      border-bottom: 1px solid var(--border);
    }
    .principle-trait {
      font-family: var(--font-serif); font-style: italic;
      font-size: clamp(24px, 2.3vw, 30px); line-height: 1;
      letter-spacing: -0.015em; color: var(--accent);
    }
    .principle-discipline {
      font-size: 10.5px; letter-spacing: 0.16em; text-transform: uppercase;
      color: var(--text-faint);
    }
    .principle-t { margin-bottom: 12px; text-wrap: balance; }
    .principle-d { font-size: 14.5px; line-height: 1.62; max-width: 38ch; }
    /* Reserve two lines for the title so the body copy starts on the same
       line across every card in a row, however the headings wrap. */
    @media (min-width: 641px) { .principle-t { min-height: 2.4em; } }
    @media (max-width: 980px) { .principles-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
    @media (max-width: 640px) { .principles-grid { grid-template-columns: 1fr; } }

    .team { padding: var(--section-y) 0; }
    .team-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 18px; }
        .team-meta { margin-top: 20px; }
    .team-role { font-size: 11px; font-weight: 500; letter-spacing: 0.12em; color: var(--accent); text-transform: uppercase; margin-top: 8px; }
    .team-desc { font-size: 13.5px; margin-top: 12px; line-height: 1.55; }
    @media (max-width: 980px) { .team-grid { grid-template-columns: repeat(2, 1fr); } }
    @media (max-width: 600px) { .team-grid { grid-template-columns: 1fr; } }

    .locations { padding: var(--section-y) 0; }
    .location-card { padding: 0; overflow: hidden; }
    .location-grid { display: grid; grid-template-columns: 1fr 1.1fr; gap: 0; align-items: stretch; }
    .location-meta { padding: 48px; display: flex; flex-direction: column; gap: 16px; }
    .location-flag { font-size: 11px; font-weight: 500; letter-spacing: 0.16em; color: var(--accent); text-transform: uppercase; }
    .location-city { font-family: var(--font-sans); font-size: clamp(32px, 4vw, 46px); font-weight: 600; letter-spacing: -0.038em; line-height: 1; margin-top: 4px; }
    .location-address { font-size: 14.5px; line-height: 1.7; margin-top: 12px; }
    .location-contacts { display: flex; flex-direction: column; gap: 8px; margin-top: auto; padding-top: 28px; border-top: 1px solid var(--border); }
    .location-link { font-family: var(--font-mono); font-size: 13px; color: var(--text); transition: color 0.2s ease; letter-spacing: 0.02em; display: inline-flex; align-items: center; gap: 9px; }
    .location-link:hover { color: var(--accent); }
    .loc-ico { width: 15px; height: 15px; flex-shrink: 0; color: var(--accent); }
    .location-photo { position: relative; border-left: 1px solid var(--border); min-height: 360px; overflow: hidden; }
    .location-photo img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; display: block; }
    /* A wash in the accent hue so a warm photograph still belongs to the
       page's cool palette, plus a foot gradient to seat the label. */
    .location-photo-tint {
      position: absolute; inset: 0; pointer-events: none;
      background:
        linear-gradient(to top, oklch(0.16 0.022 245 / 0.62), transparent 46%),
        linear-gradient(200deg, var(--accent-wash), transparent 62%);
    }
    .location-photo-label {
      position: absolute; left: 24px; bottom: 20px;
      font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase;
      color: oklch(1 0 0 / 0.82);
    }
    @media (max-width: 980px) {
      .location-grid { grid-template-columns: 1fr; }
      .location-photo { border-left: none; border-top: 1px solid var(--border); min-height: 240px; }
      .location-meta { padding: 32px; }
    }

    .facts { padding: clamp(48px, 6vw, 72px) 0 var(--section-y); }
    .facts-grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 1px; background: var(--border); border: 1px solid var(--border); border-radius: var(--radius-lg); overflow: hidden; }
    .fact { padding: 28px 24px; background: var(--surface); transition: background-color 0.2s var(--ease); }
    .fact-k { font-size: 11px; font-weight: 500; letter-spacing: 0.13em; color: var(--text-faint); text-transform: uppercase; margin-bottom: 13px; }
    .fact-v { font-size: 17.5px; font-weight: 500; letter-spacing: -0.016em; }
    @media (max-width: 880px) { .facts-grid { grid-template-columns: repeat(2, 1fr); } }
  `;
  document.head.appendChild(s);
})();

Object.assign(window, { PageAbout });
