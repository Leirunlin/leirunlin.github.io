// Project two moving ribbons onto the profile background. Scroll changes the twist.
(() => {
  const canvas = document.querySelector('.flow-field');
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  const hero = canvas.parentElement;
  const toggle = hero.querySelector('.field-toggle');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let paused = reduced.matches, visible = false, frame = 0, previous = 0, time = 0;
  let width, height, scroll = 0, targetX = 0, targetY = 0, driftX = 0, driftY = 0;

  function draw() {
    ctx.clearRect(0, 0, width, height);
    const lanes = width < 650 ? 19 : 28;
    const samples = Math.ceil(width / 10);
    for (let ribbon = 0; ribbon < 2; ribbon++) {
      for (let row = 0; row < lanes; row++) {
        const lane = 2 * row / (lanes - 1) - 1;
        const cool = (row + ribbon * 5) % 11 < 6;
        ctx.strokeStyle = cool ? 'rgba(107,206,245,.30)' : 'rgba(177,159,255,.35)';
        ctx.fillStyle = cool ? '#9ae5ff' : '#c7bcff';
        ctx.beginPath();
        const dots = [];
        for (let col = 0; col <= samples; col++) {
          const u = col / samples;
          const phase = u * 7.6 + time * .54 + ribbon * 2.8 + scroll * 3.5;
          const bend = Math.sin(phase + lane * .28);
          const twist = Math.cos(phase * .81 + lane * .36);
          const spine = ribbon === 0
            ? .87 - .52 * u * u + .13 * Math.sin(u * 6.7 + time * .32 + scroll * 2)
            : .04 + .24 * u + .095 * Math.cos(u * 7 - time * .28 - scroll * 3);
          const x = width * u + Math.sin(Math.PI * u) * (lane * 20 * bend + driftX * 18);
          const y = height * spine + lane * Math.min(height * .17, 132) * twist +
            11 * Math.sin(lane * 3.8 + phase) + driftY * 14 * Math.sin(Math.PI * u);
          if (col === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
          if (row % 2 === 0 && col % 3 === row % 3) dots.push([x, y, u]);
        }
        ctx.lineWidth = row % 4 === 0 ? 1.05 : .65;
        ctx.stroke();
        for (const [x, y, u] of dots) {
          const crest = Math.max(0, Math.cos(u * 12 - time * 1.7 + lane + ribbon));
          const radius = .7 + crest * crest * 1.15;
          ctx.globalAlpha = .25 + .7 * crest;
          ctx.fillRect(x - radius / 2, y - radius / 2, radius, radius);
        }
        ctx.globalAlpha = 1;
      }
    }
  }

  function animate(now) {
    frame = 0;
    if (previous && now - previous < 32) {
      frame = requestAnimationFrame(animate);
      return;
    }
    time += previous ? Math.min(now - previous, 80) / 1000 : 0;
    previous = now;
    driftX += (targetX - driftX) * .09;
    driftY += (targetY - driftY) * .09;
    draw();
    frame = requestAnimationFrame(animate);
  }

  function sync() {
    cancelAnimationFrame(frame);
    previous = 0;
    if (visible && !document.hidden && !paused) frame = requestAnimationFrame(animate);
    toggle.textContent = paused ? 'Play motion' : 'Pause motion';
  }
  new ResizeObserver(() => {
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    const ratio = Math.min(devicePixelRatio, 2);
    canvas.width = Math.round(width * ratio);
    canvas.height = Math.round(height * ratio);
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    draw();
  }).observe(canvas);
  new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    sync();
  }).observe(hero);
  window.addEventListener('scroll', () => {
    if (visible) scroll = Math.max(0, Math.min(1, -hero.getBoundingClientRect().top / height));
  }, {passive: true});
  hero.addEventListener('pointermove', event => {
    const rect = canvas.getBoundingClientRect();
    targetX = (event.clientX - rect.left) / width * 2 - 1;
    targetY = (event.clientY - rect.top) / height * 2 - 1;
  });
  hero.addEventListener('pointerleave', () => { targetX = targetY = 0; });
  toggle.addEventListener('click', () => { paused = !paused; sync(); });
  reduced.addEventListener('change', () => { paused = reduced.matches; sync(); });
  document.addEventListener('visibilitychange', sync);
  toggle.hidden = false;
})();
