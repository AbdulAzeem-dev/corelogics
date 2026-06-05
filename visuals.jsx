/* Curated stock imagery (Unsplash) + on-brand image frame.
   Each photo is hotlinked with width=1200 q=80 for crisp rendering. */

// Curated photo URLs — stable Unsplash photo IDs, royalty-free.
const IMG = {
  // Industries
  personal:       'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1200&q=80&auto=format&fit=crop',
  edtech:         'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80&auto=format&fit=crop',
  agents:         'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format&fit=crop',
  compliance:     'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=1200&q=80&auto=format&fit=crop',
  retail:         'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1200&q=80&auto=format&fit=crop',
  manufacturing:  'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1200&q=80&auto=format&fit=crop',

  // Services
  svcData:        'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format&fit=crop',
  svcModels:      'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200&q=80&auto=format&fit=crop',
  svcMlops:       'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80&auto=format&fit=crop',
  svcDeploy:      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80&auto=format&fit=crop',
  svcOptimize:    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80&auto=format&fit=crop',

  // Team (professional portraits — diverse)
  team0:          'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80&auto=format&fit=crop',
  team1:          'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80&auto=format&fit=crop',
  team2:          'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80&auto=format&fit=crop',
  team3:          'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80&auto=format&fit=crop',
};

// Image frame — on-brand chrome around a photograph.
function PhotoFrame({ src, alt, label, height = 420, accent = 'var(--accent)', style, objectPosition = 'center center' }) {
  return (
    <div className="pfx" style={{ height, ...style }}>
      <div className="pfx-frame">
        <div className="pfx-bar">
          <span className="pfx-dot" style={{ background: '#ff5f57' }}></span>
          <span className="pfx-dot" style={{ background: '#febc2e' }}></span>
          <span className="pfx-dot" style={{ background: '#28c840' }}></span>
          <span className="pfx-label mono">{label}</span>
        </div>
        <div className="pfx-body" style={{ '--pfx-accent': accent }}>
          <img src={src} alt={alt} className="pfx-img" loading="lazy" style={{ objectPosition }} />
          <div className="pfx-overlay"></div>
          <div className="pfx-grain"></div>
        </div>
      </div>
    </div>
  );
}

// Convenience wrappers per surface
function IndustryPhoto({ industryKey, accent }) {
  const meta = {
    personal:      { src: IMG.personal,      label: 'personal-intelligence',    alt: 'Person interacting with personal AI assistant' },
    edtech:        { src: IMG.edtech,        label: 'education-and-learning',   alt: 'Student studying' },
    agents:        { src: IMG.agents,        label: 'agentic-workflows',        alt: 'Developer at workstation' },
    compliance:    { src: IMG.compliance,    label: 'quality-and-compliance',   alt: 'Industrial inspection environment' },
    retail:        { src: IMG.retail,        label: 'retail-operations',        alt: 'Retail store aisle' },
    manufacturing: { src: IMG.manufacturing, label: 'manufacturing-qc',         alt: 'Manufacturing line' },
  }[industryKey];
  if (!meta) return null;
  return <PhotoFrame src={meta.src} label={meta.label} alt={meta.alt} height={420} accent={accent} />;
}

function ServicePhoto({ slug }) {
  const meta = {
    data:     { src: IMG.svcData,     label: 'data-services',        alt: 'Data and annotation work' },
    models:   { src: IMG.svcModels,   label: 'model-development',    alt: 'Model development workstation' },
    mlops:    { src: IMG.svcMlops,    label: 'mlops-and-pipelines',  alt: 'ML infrastructure' },
    deploy:   { src: IMG.svcDeploy,   label: 'deployment',           alt: 'Deployment hardware' },
    optimize: { src: IMG.svcOptimize, label: 'monitoring-and-optimization', alt: 'Performance analytics' },
  }[slug];
  if (!meta) return null;
  return <PhotoFrame src={meta.src} label={meta.label} alt={meta.alt} height={200} />;
}

function TeamPhoto({ index, accent }) {
  const src = [IMG.team0, IMG.team1, IMG.team2, IMG.team3][index % 4];
  return (
    <div className="team-photo" style={{ '--team-accent': accent }}>
      <img src={src} alt="" loading="lazy" />
      <div className="team-photo-overlay"></div>
    </div>
  );
}

// ── Keep the case system-topology SVG (schematic) ───────────────────────
function CaseExtraVisual({ caseStudy }) {
  const accent = caseStudy.accent;
  const pipeline = caseStudy.architecture.pipeline;
  return (
    <PhotoFrameWrap label={`${caseStudy.slug}.system`} accent={accent} height={360}>
      <svg viewBox="0 0 800 360" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" style={{ display: 'block' }}>
        <defs>
          <linearGradient id={`cx-bg-${caseStudy.slug}`} x1="0" y1="0" x2="0" y2="360">
            <stop offset="0" stopColor="oklch(0.18 0.025 250)" />
            <stop offset="1" stopColor="oklch(0.12 0.01 250)" />
          </linearGradient>
          <radialGradient id={`cx-glow-${caseStudy.slug}`} cx="0.5" cy="0.5">
            <stop offset="0" stopColor={accent} stopOpacity="0.3" />
            <stop offset="1" stopColor={accent} stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="800" height="360" fill={`url(#cx-bg-${caseStudy.slug})`} />
        <ellipse cx="400" cy="180" rx="280" ry="100" fill={`url(#cx-glow-${caseStudy.slug})`} />
        <g transform="translate(0, 100)">
          {pipeline.map((stage, i) => {
            const x = 80 + i * ((720 - 80) / Math.max(1, pipeline.length - 1));
            return (
              <g key={stage}>
                {i < pipeline.length - 1 && (
                  <line x1={x} y1="80"
                    x2={80 + (i + 1) * ((720 - 80) / Math.max(1, pipeline.length - 1))}
                    y2="80" stroke={accent} strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
                )}
                <g transform={`translate(${x}, 80)`}>
                  <circle r="24" fill="oklch(0.14 0.01 250)" stroke={accent} strokeWidth="1.4" />
                  <text textAnchor="middle" y="4" fontFamily="JetBrains Mono" fontSize="9" fontWeight="600" fill="oklch(0.96 0.01 250)" letterSpacing="1">{String(i + 1).padStart(2, '0')}</text>
                  <text textAnchor="middle" y="46" fontFamily="Inter Tight" fontSize="12" fontWeight="500" fill="oklch(0.92 0.01 250)">{stage}</text>
                </g>
              </g>
            );
          })}
        </g>
        <g transform="translate(0, 260)">
          {caseStudy.outcomes.map((o, i) => (
            <g key={o.l} transform={`translate(${40 + i * 190}, 0)`}>
              <text fontFamily="Inter Tight" fontSize="28" fontWeight="500" fill={accent} letterSpacing="-1">{o.v}</text>
              <text y="20" fontFamily="JetBrains Mono" fontSize="8" letterSpacing="1.2" fill="oklch(0.65 0.014 250)">{o.l.length > 28 ? o.l.slice(0, 28) + '…' : o.l}</text>
            </g>
          ))}
        </g>
        <text x="32" y="36" fontFamily="JetBrains Mono" fontSize="9" letterSpacing="2" fill="oklch(0.55 0.014 250)">SYSTEM TOPOLOGY · {caseStudy.name.toUpperCase()}</text>
      </svg>
    </PhotoFrameWrap>
  );
}

// Small wrapper for SVG-content frames (no img inside)
function PhotoFrameWrap({ children, label, height = 360, accent = 'var(--accent)', style }) {
  return (
    <div className="pfx" style={{ height, ...style }}>
      <div className="pfx-frame">
        <div className="pfx-bar">
          <span className="pfx-dot" style={{ background: '#ff5f57' }}></span>
          <span className="pfx-dot" style={{ background: '#febc2e' }}></span>
          <span className="pfx-dot" style={{ background: '#28c840' }}></span>
          <span className="pfx-label mono">{label}</span>
        </div>
        <div className="pfx-body" style={{ '--pfx-accent': accent, overflow: 'hidden' }}>
          {children}
        </div>
      </div>
    </div>
  );
}

(function injectPhotoCss() {
  if (document.getElementById('photo-css')) return;
  const s = document.createElement('style');
  s.id = 'photo-css';
  s.textContent = `
    .pfx { width: 100%; overflow: hidden; }
    .pfx-frame { width: 100%; height: 100%; border: 1px solid var(--border); border-radius: 10px; overflow: hidden; background: oklch(0.13 0.012 250); display: flex; flex-direction: column; box-shadow: 0 20px 50px -16px oklch(0.05 0.02 250 / 0.5); }
    .pfx-bar { display: flex; align-items: center; gap: 8px; padding: 10px 14px; background: oklch(0.17 0.014 250); border-bottom: 1px solid var(--border); flex-shrink: 0; }
    .pfx-dot { width: 10px; height: 10px; border-radius: 999px; }
    .pfx-label { margin-left: 14px; font-size: 10.5px; letter-spacing: 0.06em; color: var(--text-dim); }
    .pfx-body { flex: 1; overflow: hidden; position: relative; min-height: 0; }
    .pfx-img { display: block; width: 100%; height: 100%; object-fit: cover; filter: saturate(0.85) contrast(1.04) brightness(0.78); transition: filter 0.4s ease, transform 0.6s ease; }
    .pfx-frame:hover .pfx-img { transform: scale(1.02); filter: saturate(0.95) contrast(1.04) brightness(0.82); }
    .pfx-overlay { position: absolute; inset: 0; pointer-events: none;
      background:
        radial-gradient(ellipse 80% 60% at 50% 50%, transparent, oklch(0.10 0.01 250 / 0.4) 100%),
        linear-gradient(180deg, oklch(0.13 0.012 250 / 0) 60%, oklch(0.13 0.012 250 / 0.5)),
        radial-gradient(ellipse 60% 40% at 50% 100%, var(--pfx-accent, transparent), transparent 70%);
      mix-blend-mode: multiply;
      opacity: 0.55;
    }
    .pfx-grain { position: absolute; inset: 0; pointer-events: none;
      background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 1  0 0 0 0 1  0 0 0 0 1  0 0 0 0.07 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
      mix-blend-mode: overlay; opacity: 0.6;
    }

    .team-photo { position: relative; border-radius: var(--radius); overflow: hidden; border: 1px solid var(--border); aspect-ratio: 10 / 7; background: oklch(0.13 0.012 250); }
    .team-photo img { display: block; width: 100%; height: 100%; object-fit: cover; filter: saturate(0.8) contrast(1.04) brightness(0.85); transition: transform 0.6s ease, filter 0.4s ease; }
    .team-photo:hover img { transform: scale(1.03); filter: saturate(0.95) brightness(0.9); }
    .team-photo-overlay { position: absolute; inset: 0; pointer-events: none;
      background:
        linear-gradient(180deg, transparent 50%, oklch(0.10 0.01 250 / 0.55)),
        radial-gradient(ellipse 60% 40% at 50% 100%, var(--team-accent, transparent), transparent 70%);
      mix-blend-mode: multiply; opacity: 0.7;
    }
  `;
  document.head.appendChild(s);
})();

Object.assign(window, {
  IMG, PhotoFrame, PhotoFrameWrap, IndustryPhoto, ServicePhoto, TeamPhoto, CaseExtraVisual,
});
