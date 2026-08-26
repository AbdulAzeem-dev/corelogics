/* card-fx.js — unified card micro-interactions.
   Adds a cursor-tracking border glow + lift to every card across the site.
   Non-invasive: a single document-level pointer listener lazily attaches a
   masked-border "spotlight" element to any matching card the cursor enters. */

(function () {
  // Block cards (lift + border glow) and grid tiles (tint + border glow).
  var BLOCK = [
    '.corner-card', '.case-card', '.cover', '.industry-card', '.role-card',
    '.principle', '.cap-card', '.aside-card', '.case-next', '.location-card',
    '.pfx-frame', '.team-photo', '.cover-frame',
    '.ai-card', '.suite-card', '.ai-card-cta', '.stack-row'
  ];
  var TILE = ['.fact', '.metric', '.outcome', '.case-result', '.hero-stat'];
  var ALL = BLOCK.concat(TILE).join(',');

  function ensureSpot(card) {
    if (card.__cfx) return;
    card.__cfx = true;
    var cs = getComputedStyle(card);
    if (cs.position === 'static') card.style.position = 'relative';
    var spot = document.createElement('span');
    spot.className = 'cfx-spot';
    card.appendChild(spot);
    card.classList.add('cfx');
  }

  var raf = 0, pending = null;
  function flush() {
    raf = 0;
    if (!pending) return;
    var card = pending.card, x = pending.x, y = pending.y;
    var r = card.getBoundingClientRect();
    card.style.setProperty('--mx', (((x - r.left) / r.width) * 100).toFixed(2) + '%');
    card.style.setProperty('--my', (((y - r.top) / r.height) * 100).toFixed(2) + '%');
    pending = null;
  }

  document.addEventListener('pointermove', function (e) {
    if (e.pointerType === 'touch') return;
    var card = e.target.closest && e.target.closest(ALL);
    if (!card) return;
    ensureSpot(card);
    pending = { card: card, x: e.clientX, y: e.clientY };
    if (!raf) raf = requestAnimationFrame(flush);
  }, { passive: true });

  var css = `
    /* Cursor-tracking border glow — only the border lights up, never the text */
    .cfx-spot {
      position: absolute; inset: 0; border-radius: inherit; pointer-events: none;
      padding: 1px;
      background: radial-gradient(160px circle at var(--mx, 50%) var(--my, 0%),
                  var(--case-accent, var(--accent)), transparent 65%);
      -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
      -webkit-mask-composite: xor; mask-composite: exclude;
      opacity: 0; transition: opacity .35s ease; z-index: 3;
    }
    .cfx:hover > .cfx-spot { opacity: .75; }

    /* Block cards: lift + shadow + brighter border on hover */
    .corner-card, .role-card, .principle, .cap-card, .aside-card,
    .case-next, .location-card, .industry-card, .suite-card, .ai-card {
      transition: transform .3s cubic-bezier(.2,.7,.2,1),
                  border-color .3s ease, box-shadow .3s ease, background .3s ease;
      will-change: transform;
    }
    @media (prefers-reduced-motion: no-preference) {
      .corner-card:hover, .role-card:hover, .principle:hover,
      .cap-card:hover, .aside-card:hover, .location-card:hover,
      .suite-card:hover, .ai-card:hover {
        transform: translateY(-4px);
        box-shadow: var(--shadow-3);
        border-color: var(--case-accent, var(--border-strong));
      }
      .ai-card:hover { border-color: var(--accent-glow); box-shadow: var(--shadow-3); }
      .ai-card-cta:hover { border-color: transparent; }
      .suite-card:hover .suite-icon { color: var(--accent-ink); border-color: var(--accent); background: var(--accent); transition: color .3s ease, background-color .3s ease, border-color .3s ease; }
    }

    /* Corner ticks ignite to the accent on hover */
    .cfx.corner-card:hover .corner::before,
    .cfx.corner-card:hover .corner::after {
      background: var(--case-accent, var(--accent));
      transition: background .3s ease;
    }

    /* Grid tiles: subtle background tint + value pop, no lift (they share borders) */
    .fact, .metric, .outcome, .case-result, .hero-stat {
      transition: background .35s ease, box-shadow .35s ease;
      position: relative;
    }
    .fact:hover, .metric:hover, .outcome:hover, .case-result:hover {
      background: var(--surface-2);
    }
    .metric:hover .metric-val { color: var(--accent); transition: color .35s ease; }
    .outcome:hover .outcome-v { filter: brightness(1.12); transition: filter .35s ease; }

    /* Press feedback for clickable cards */
    @media (prefers-reduced-motion: no-preference) {
      .case-card:active, .cover-visual:active .cover-frame, .case-next:active {
        transform: translateY(-1px) scale(0.995);
      }
    }
  `;
  var s = document.createElement('style');
  s.id = 'card-fx-css';
  s.textContent = css;
  document.head.appendChild(s);
})();
