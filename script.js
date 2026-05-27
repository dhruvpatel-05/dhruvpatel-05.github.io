/* ── Scroll progress bar ─────────────────────────────────────────────── */
const progressBar = document.getElementById('progress-bar');
function updateProgress() {
  const scrolled = window.scrollY;
  const total    = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.width = `${(scrolled / total) * 100}%`;
}
window.addEventListener('scroll', updateProgress, { passive: true });

/* ── Navbar shadow on scroll ─────────────────────────────────────────── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

/* ── Mobile hamburger ─────────────────────────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');
hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(l => l.addEventListener('click', () => navLinks.classList.remove('open')));

/* ── Active nav link on scroll ────────────────────────────────────────── */
const sections = document.querySelectorAll('section[id]');
const links    = document.querySelectorAll('.nav-links a');
const navObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      links.forEach(l => l.classList.remove('active'));
      const a = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
      if (a) a.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });
sections.forEach(s => navObserver.observe(s));

/* ── Scroll reveal ────────────────────────────────────────────────────── */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add('visible'); revealObserver.unobserve(e.target); }
  });
}, { threshold: 0.08 });
document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.transitionDelay = `${(i % 5) * 0.06}s`;
  revealObserver.observe(el);
});

/* ── Hero canvas: particle network ───────────────────────────────────── */
(function initCanvas() {
  const canvas = document.getElementById('hero-canvas');
  const ctx    = canvas.getContext('2d');

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize, { passive: true });

  const N    = Math.min(65, Math.floor((window.innerWidth * window.innerHeight) / 18000));
  const DIST = 155;
  const nodes = Array.from({ length: N }, () => ({
    x:  Math.random() * canvas.width,
    y:  Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.38,
    vy: (Math.random() - 0.5) * 0.38,
  }));

  let rafId;

  function tick() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < N; i++) {
      for (let j = i + 1; j < N; j++) {
        const dx   = nodes[i].x - nodes[j].x;
        const dy   = nodes[i].y - nodes[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < DIST) {
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = `rgba(108,143,255,${0.13 * (1 - dist / DIST)})`;
          ctx.lineWidth   = 0.7;
          ctx.stroke();
        }
      }
    }

    for (let i = 0; i < N; i++) {
      ctx.beginPath();
      ctx.arc(nodes[i].x, nodes[i].y, 1.6, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(108,143,255,0.45)';
      ctx.fill();

      nodes[i].x += nodes[i].vx;
      nodes[i].y += nodes[i].vy;
      if (nodes[i].x < 0 || nodes[i].x > canvas.width)  nodes[i].vx *= -1;
      if (nodes[i].y < 0 || nodes[i].y > canvas.height) nodes[i].vy *= -1;
    }

    rafId = requestAnimationFrame(tick);
  }

  tick();

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) cancelAnimationFrame(rafId);
    else tick();
  });
})();
