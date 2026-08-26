/* Privacy policy, terms of service, and the not-found page.

   The legal copy below is a working draft written to be accurate about how the
   site actually behaves. Have counsel review it before it goes live. */

const LEGAL_DOCS = {
  privacy: {
    eyebrow: 'Privacy policy',
    title: <>What we collect, and <em>what we don&rsquo;t</em>.</>,
    updated: '14 May 2026',
    lede: 'Corelogics Technologies FZ-LLC operates www.corelogics.co. This policy covers the personal data we handle through this website. Client project data is governed separately by the data processing agreement in your engagement contract.',
    sections: [
      {
        h: 'What we collect',
        body: [
          'When you submit the contact form we receive the name, work email, company, role, project details, and selections you enter. That is the only personal data this site asks you for.',
          'Our server logs record the standard request metadata every web server keeps: IP address, user agent, requested path, and timestamp. We keep those logs for 30 days for security and diagnostics.',
        ],
      },
      {
        h: 'What we do with it',
        body: [
          'Contact form submissions go to the founding team so we can reply to your enquiry. We do not add you to a marketing list, we do not sell or rent your details, and we do not share them with third parties for their own purposes.',
          'Enquiry records are retained for 24 months so we can pick up a conversation where it left off, then deleted.',
        ],
      },
      {
        h: 'Cookies and tracking',
        body: [
          'This site loads Google Analytics and Google Tag Manager, which set cookies to measure how pages are used, and Apollo’s website tracker, which identifies the company a visitor is browsing from. Both receive your IP address and page-view events.',
          'Your theme and density preferences are stored in your browser’s local storage on your own device and are never transmitted to us.',
          'Fonts are served by Google Fonts, which receives your IP address as part of that request. You can block all of the above with any standard tracker-blocking extension without affecting how the site works.',
        ],
      },
      {
        h: 'Your rights',
        body: [
          'You can ask us for a copy of the personal data we hold about you, ask us to correct it, or ask us to delete it. Email info@corelogics.co and we will respond within 30 days.',
          'If you are in the EU or UK, you have these rights under the GDPR. If you are in the UAE, you have equivalent rights under Federal Decree-Law No. 45 of 2021.',
        ],
      },
      {
        h: 'Contact',
        body: [
          'Corelogics Technologies FZ-LLC, Office C1-1F, Ajman Free Zone, Ajman, United Arab Emirates. Data protection enquiries: info@corelogics.co.',
        ],
      },
    ],
  },

  terms: {
    eyebrow: 'Terms of service',
    title: <>Terms for using <em>this website</em>.</>,
    updated: '14 May 2026',
    lede: 'These terms govern your use of www.corelogics.co. They do not govern any engagement between us — that is set out in a separate signed agreement, which takes precedence over anything on this page.',
    sections: [
      {
        h: 'Use of the site',
        body: [
          'You may read, link to, and quote this site with attribution. You may not scrape it at a rate that degrades service for others, attempt to gain unauthorised access to any system behind it, or reproduce it wholesale as your own.',
        ],
      },
      {
        h: 'Accuracy of content',
        body: [
          'Case studies describe work we delivered, with figures drawn from the engagement scorecards agreed with those clients. Client names appear only where the client consented. Metrics reflect the measurement period stated alongside them and are not a promise of comparable results on a different problem.',
          'Everything else on this site is descriptive marketing content. It is not technical advice, and it is not an offer capable of acceptance.',
        ],
      },
      {
        h: 'Enquiries and confidentiality',
        body: [
          'Please do not send confidential information through the contact form. If your enquiry needs an NDA in place first, say so in the form and we will send one before you share specifics.',
          'Submitting the form creates no obligation on either side. We are free to decline an engagement, and you are free to walk away.',
        ],
      },
      {
        h: 'Intellectual property',
        body: [
          'The Corelogics name, logotype, and the content of this site belong to Corelogics Technologies FZ-LLC. Product screenshots remain the property of the respective clients and appear here with their permission.',
        ],
      },
      {
        h: 'Liability and governing law',
        body: [
          'The site is provided as-is. To the extent permitted by law, we are not liable for loss arising from reliance on its content. Nothing here limits liability for fraud or for anything else that cannot lawfully be limited.',
          'These terms are governed by the laws of the United Arab Emirates as applied in the Emirate of Ajman.',
        ],
      },
    ],
  },
};

function PageLegal({ doc }) {
  const d = LEGAL_DOCS[doc];
  if (!d) return <PageNotFound />;

  return (
    <main className="legal-page">
      <PageHeader eyebrow={d.eyebrow} title={d.title} lede={d.lede} />

      <section className="legal-body">
        <div className="page legal-inner">
          <aside className="legal-aside">
            <div className="mono legal-updated">
              <span className="dim">Last updated</span><br />
              {d.updated}
            </div>
            <nav className="legal-toc" aria-label="On this page">
              {d.sections.map((s, i) => (
                <button
                  key={s.h}
                  type="button"
                  onClick={() => document.getElementById(`sec-${i}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                >
                  {s.h}
                </button>
              ))}
            </nav>
          </aside>

          <div className="legal-prose">
            {d.sections.map((s, i) => (
              <section key={s.h} id={`sec-${i}`}>
                <h2 className="legal-h">{s.h}</h2>
                {s.body.map((p, j) => <p key={j}>{p}</p>)}
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function PageNotFound() {
  const { setPage } = useRouter();
  return (
    <main className="notfound-page">
      <div className="page notfound-inner">
        <Reveal>
          <div className="mono notfound-code">404</div>
        </Reveal>
        <Reveal delay={110}>
          <h1 className="h-display notfound-h">
            That page isn&rsquo;t <em>here</em>.
          </h1>
        </Reveal>
        <Reveal delay={220}>
          <p className="lede notfound-lede">
            The link may be out of date, or we may have moved something. Here is where most people
            were heading.
          </p>
        </Reveal>
        <Reveal delay={330}>
          <ul className="notfound-links">
            {[
              ['Services', 'services', 'What we build, and how an engagement runs.'],
              ['Case studies', 'cases', 'Three shipped systems, with the numbers.'],
              ['Industries', 'industries', 'Where our domain knowledge already runs deep.'],
              ['Contact', 'contact', 'Reach the founding team directly.'],
            ].map(([label, p, d]) => (
              <li key={p}>
                <a href={pathFor(p)} onClick={(e) => { if (!isPlainClick(e)) return; e.preventDefault(); setPage(p); window.scrollTo({ top: 0 }); }}>
                  <span className="notfound-link-t">{label}</span>
                  <span className="notfound-link-d">{d}</span>
                  <span className="notfound-link-a" aria-hidden="true">→</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </main>
  );
}

(function injectLegalCss() {
  if (document.getElementById('legal-css')) return;
  const s = document.createElement('style');
  s.id = 'legal-css';
  s.textContent = `
    .legal-body { padding: var(--section-y) 0 calc(var(--section-y) * 1.1); }
    .legal-inner { display: grid; grid-template-columns: 220px minmax(0, 1fr); gap: 72px; align-items: start; }
    .legal-aside { position: sticky; top: 104px; display: flex; flex-direction: column; gap: 28px; }
    .legal-updated { font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; line-height: 2; color: var(--text-muted); }
    .legal-toc { display: flex; flex-direction: column; gap: 10px; padding-top: 24px; border-top: 1px solid var(--border); }
    .legal-toc button { font-size: 13.5px; text-align: left; color: var(--text-dim); transition: color 0.2s var(--ease); }
    .legal-toc button:hover { color: var(--accent); }

    .legal-prose { max-width: 68ch; display: flex; flex-direction: column; gap: 48px; }
    .legal-h { font-size: 22px; font-weight: 600; letter-spacing: -0.022em; margin-bottom: 16px; }
    .legal-prose p { font-size: 15.5px; line-height: 1.75; color: var(--text-muted); margin-bottom: 14px; }
    .legal-prose p:last-child { margin-bottom: 0; }

    @media (max-width: 900px) {
      .legal-inner { grid-template-columns: 1fr; gap: 40px; }
      .legal-aside { position: static; }
      .legal-toc { flex-direction: row; flex-wrap: wrap; gap: 8px 20px; }
    }

    /* 404 */
    .notfound-page { padding: clamp(80px, 12vh, 140px) 0 calc(var(--section-y) * 1.1); min-height: 68dvh; }
        .notfound-inner > * { max-width: 760px; }
    .notfound-code { font-size: 12px; letter-spacing: 0.3em; color: var(--accent); }
    .notfound-h { margin-top: 20px; }
    .notfound-lede { margin-top: 22px; }
    .notfound-links { list-style: none; margin-top: 44px; border-top: 1px solid var(--border); }
    .notfound-links a { display: grid; grid-template-columns: 170px minmax(0, 1fr) 24px; align-items: baseline; gap: 20px; padding: 20px 4px; border-bottom: 1px solid var(--border); transition: background 0.2s var(--ease); }
    .notfound-links a:hover { background: var(--surface); }
    .notfound-link-t { font-size: 17px; font-weight: 600; letter-spacing: -0.02em; }
    .notfound-link-d { font-size: 14px; color: var(--text-muted); }
    .notfound-link-a { color: var(--text-faint); justify-self: end; transition: transform 0.2s var(--ease), color 0.2s var(--ease); }
    .notfound-links a:hover .notfound-link-a { color: var(--accent); transform: translateX(4px); }
    @media (max-width: 720px) {
      .notfound-links a { grid-template-columns: 1fr 24px; gap: 6px 20px; }
      .notfound-link-d { grid-column: 1; }
      .notfound-link-a { grid-row: 1; grid-column: 2; }
    }
  `;
  document.head.appendChild(s);
})();

Object.assign(window, { PageLegal, PageNotFound });
