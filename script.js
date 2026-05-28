/* ── Preloader ─────────────────────────────────────────────────────────── */
const preloader = document.getElementById('preloader');

window.addEventListener('load', () => {
  setTimeout(() => {
    preloader.classList.add('hide');
    setTimeout(startTypewriter, 500);
  }, 750);
});

/* ── Typewriter ────────────────────────────────────────────────────────── */
const line1El  = document.getElementById('typed-line1');
const line2El  = document.getElementById('typed-line2');
const cursorEl = document.querySelector('.type-cursor');

function typeText(el, text, speed, onDone) {
  let i = 0;
  const interval = setInterval(() => {
    el.textContent += text[i];
    i++;
    if (i >= text.length) {
      clearInterval(interval);
      if (onDone) onDone();
    }
  }, speed);
}

function startTypewriter() {
  typeText(line1El, 'Dhruv', 90, () => {
    setTimeout(() => {
      typeText(line2El, 'Patel', 90, () => {
        setTimeout(() => {
          cursorEl.classList.add('done');
          document.querySelector('.hero-info').classList.add('visible');
          setTimeout(() => {
            document.querySelector('.hero-links').classList.add('visible');
          }, 250);
        }, 900);
      });
    }, 180);
  });
}

/* ── Custom cursor ─────────────────────────────────────────────────────── */
const cursorDot  = document.getElementById('cursor-dot');
const cursorRing = document.getElementById('cursor-ring');
let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursorDot.style.left = mx + 'px';
  cursorDot.style.top  = my + 'px';
});

(function animCursor() {
  rx += (mx - rx) * 0.12;
  ry += (my - ry) * 0.12;
  cursorRing.style.left = rx + 'px';
  cursorRing.style.top  = ry + 'px';
  requestAnimationFrame(animCursor);
})();

document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => cursorRing.classList.add('expand'));
  el.addEventListener('mouseleave', () => cursorRing.classList.remove('expand'));
});

/* ── Progress bar ──────────────────────────────────────────────────────── */
const progressBar = document.getElementById('progress-bar');
function updateProgress() {
  const total = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.width = `${(window.scrollY / total) * 100}%`;
}
window.addEventListener('scroll', updateProgress, { passive: true });

/* ── Navbar border on scroll ───────────────────────────────────────────── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 8);
}, { passive: true });

/* ── Mobile hamburger ──────────────────────────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');
hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(l => l.addEventListener('click', () => navLinks.classList.remove('open')));

/* ── Active nav + side dot on scroll ───────────────────────────────────── */
const sections = document.querySelectorAll('section[id]');
const navAs    = document.querySelectorAll('.nav-links a');
const sdots    = document.querySelectorAll('.sdot');

function setActive(id) {
  navAs.forEach(a => a.classList.toggle('active', a.getAttribute('href') === `#${id}`));
  sdots.forEach(d => d.classList.toggle('active', d.getAttribute('href') === `#${id}`));
}

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
}, { rootMargin: '-40% 0px -55% 0px' });
sections.forEach(s => sectionObserver.observe(s));

/* ── Section heading line draw ─────────────────────────────────────────── */
const headObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('drawn');
      headObs.unobserve(e.target);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('.s-head').forEach(h => headObs.observe(h));

/* ── Scroll reveal ─────────────────────────────────────────────────────── */
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

/* ── Experience tab switcher ───────────────────────────────────────────── */
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
