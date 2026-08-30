/* smooth-scroll.js — site-wide inertial ("lazy") scrolling.
   Intercepts wheel input and eases the page toward a target offset instead of
   jumping to it, which gives the whole site the same damped feel as the rest of
   the motion design. Deliberately conservative:
     - touch, trackpad pinch-zoom, and coarse pointers keep native scrolling
     - prefers-reduced-motion turns it off entirely
     - inner scrollable panes (overflow: auto/scroll) keep native scrolling
     - keyboard, scrollbar drags, and programmatic scrollTo stay native; the
       loop simply re-syncs its target whenever the page moves without us. */

(function () {
  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine = window.matchMedia('(pointer: fine)').matches;
  if (reduced || !fine) return;

  // How much of the remaining distance is covered each frame at 60fps.
  // Lower = longer glide. 0.11 lands just short of feeling floaty.
  var EASE = 0.11;
  var target = window.scrollY;
  var running = false;
  var self = false;      // true while we are the ones moving the page
  var selfTimer = 0;

  function maxScroll() {
    return Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
  }

  function frame() {
    var diff = target - window.scrollY;
    if (Math.abs(diff) < 0.5) {
      running = false;
      return;
    }
    self = true;
    // 'instant' matters: html { scroll-behavior: smooth } would otherwise queue
    // a browser animation per frame and fight this loop.
    window.scrollTo({ top: window.scrollY + diff * EASE, behavior: 'instant' });
    // Release the flag after the resulting scroll event has fired.
    clearTimeout(selfTimer);
    selfTimer = setTimeout(function () { self = false; }, 60);
    requestAnimationFrame(frame);
  }

  function start() {
    if (running) return;
    running = true;
    requestAnimationFrame(frame);
  }

  // A wheel over an element that can scroll itself (a code block, a dialog,
  // an overflow-x rail) belongs to that element, not to the page.
  function insideScrollable(node, delta) {
    while (node && node !== document.body && node !== document.documentElement) {
      if (node.nodeType === 1 && node.scrollHeight > node.clientHeight + 1) {
        var overflow = getComputedStyle(node).overflowY;
        if (overflow === 'auto' || overflow === 'scroll') {
          var atTop = node.scrollTop <= 0;
          var atBottom = node.scrollTop + node.clientHeight >= node.scrollHeight - 1;
          if (!((delta < 0 && atTop) || (delta > 0 && atBottom))) return true;
        }
      }
      node = node.parentNode;
    }
    return false;
  }

  function normalize(e) {
    if (e.deltaMode === 1) return e.deltaY * 16;            // lines
    if (e.deltaMode === 2) return e.deltaY * window.innerHeight; // pages
    return e.deltaY;
  }

  window.addEventListener('wheel', function (e) {
    if (e.ctrlKey || e.metaKey) return;          // pinch-zoom / browser zoom
    if (e.defaultPrevented) return;
    // requestAnimationFrame is frozen in a background tab; never swallow the
    // wheel when we have no way to move the page ourselves.
    if (document.hidden) return;
    var delta = normalize(e);
    if (!delta) return;
    if (insideScrollable(e.target, delta)) return;

    e.preventDefault();
    if (!running) target = window.scrollY;       // pick up where the page is
    target = Math.min(maxScroll(), Math.max(0, target + delta));
    start();
  }, { passive: false });

  // Anything that moves the page without us — keyboard, scrollbar, anchor
  // jumps, the route-change scrollTo — becomes the new resting target.
  window.addEventListener('scroll', function () {
    if (!self) target = window.scrollY;
  }, { passive: true });

  // A resized viewport can shorten the document under an in-flight glide.
  window.addEventListener('resize', function () {
    target = Math.min(target, maxScroll());
  });
})();
