/* ── Progress bar ─────────────────────────────────────────────────────── */
const progressBar = document.getElementById('progress-bar');
function updateProgress() {
  const total = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.width = `${(window.scrollY / total) * 100}%`;
}
window.addEventListener('scroll', updateProgress, { passive: true });

/* ── Navbar border on scroll ─────────────────────────────────────────── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 8);
}, { passive: true });

/* ── Mobile hamburger ─────────────────────────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');
hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(l => l.addEventListener('click', () => navLinks.classList.remove('open')));

/* ── Active nav + side dot on scroll ─────────────────────────────────── */
const sections  = document.querySelectorAll('section[id]');
const navAs     = document.querySelectorAll('.nav-links a');
const sdots     = document.querySelectorAll('.sdot');

function setActive(id) {
  navAs.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${id}`));
  sdots.forEach(d => d.classList.toggle('active', d.getAttribute('href') === `#${id}`));
}

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
}, { rootMargin: '-40% 0px -55% 0px' });
sections.forEach(s => sectionObserver.observe(s));

/* ── Scroll reveal ────────────────────────────────────────────────────── */
/* Uses animation (not transition) so .exp-item hover transition can't conflict */
const revealObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      revealObs.unobserve(e.target);
    }
  });
}, { threshold: 0.07 });

document.querySelectorAll('.reveal').forEach((el, i) => {
  el.style.animationDelay = `${(i % 4) * 0.07}s`;
  revealObs.observe(el);
});

/* ── Experience tab switcher ──────────────────────────────────────────── */
const tabs   = document.querySelectorAll('.exp-tab');
const panels = document.querySelectorAll('.exp-panel');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const idx = Number(tab.dataset.idx);
    tabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
    panels.forEach(p => p.classList.remove('active'));
    tab.classList.add('active');
    tab.setAttribute('aria-selected', 'true');
    panels[idx].classList.add('active');
  });
});

/* Keyboard arrow navigation for tabs */
tabs.forEach((tab, i) => {
  tab.addEventListener('keydown', e => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      tabs[(i + 1) % tabs.length].focus();
      tabs[(i + 1) % tabs.length].click();
    }
    if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      tabs[(i - 1 + tabs.length) % tabs.length].focus();
      tabs[(i - 1 + tabs.length) % tabs.length].click();
    }
  });
});

/* ── Hero canvas: particle network (orange) ───────────────────────────── */
(function () {
  const canvas = document.getElementById('hero-canvas');
  const ctx    = canvas.getContext('2d');

  function resize() {
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }
  resize();

  const resizeObs = new ResizeObserver(resize);
  resizeObs.observe(canvas.parentElement);

  const N    = Math.min(70, Math.floor((window.innerWidth * window.innerHeight) / 15000));
  const DIST = 145;

  const nodes = Array.from({ length: N }, () => ({
    x:  Math.random() * canvas.width,
    y:  Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.32,
    vy: (Math.random() - 0.5) * 0.32,
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
          const a = 0.1 * (1 - dist / DIST);
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.strokeStyle = `rgba(249,115,22,${a})`;
          ctx.lineWidth   = 0.6;
          ctx.stroke();
        }
      }
    }

    for (let i = 0; i < N; i++) {
      ctx.beginPath();
      ctx.arc(nodes[i].x, nodes[i].y, 1.5, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(249,115,22,0.5)';
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
