/* ============================================
   SCRIPT.JS – PORTFOLIO INTERACTIVITY
   Yaswanth Kumar Mallela
   ============================================ */

// ─── CURSOR ─────────────────────────────────────
const dot = document.getElementById('cursorDot');
const ring = document.getElementById('cursorRing');
let ringX = 0, ringY = 0;

document.addEventListener('mousemove', e => {
  dot.style.left = e.clientX + 'px';
  dot.style.top = e.clientY + 'px';
});

function animateRing() {
  ringX += (parseFloat(dot.style.left || 0) - ringX) * 0.12;
  ringY += (parseFloat(dot.style.top || 0) - ringY) * 0.12;
  ring.style.left = ringX + 'px';
  ring.style.top = ringY + 'px';
  requestAnimationFrame(animateRing);
}
animateRing();

document.querySelectorAll('a, button, .skill-pill, .project-card, .stat-card').forEach(el => {
  el.addEventListener('mouseenter', () => ring.classList.add('hovered'));
  el.addEventListener('mouseleave', () => ring.classList.remove('hovered'));
});

// ─── NAVBAR SCROLL ──────────────────────────────
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);

  // Active section highlight
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) link.classList.add('active');
  });
}, { passive: true });

// ─── HAMBURGER MENU ─────────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinksEl = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinksEl.classList.toggle('open');
});
navLinksEl.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinksEl.classList.remove('open');
  });
});

// ─── TYPING EFFECT ──────────────────────────────
const phrases = [
  'Data Science Student 📊',
  'ML & AI Engineer 🤖',
  'Full-Stack Developer 🌐',
  'Freelance AI Developer 💼',
  'Problem Solver ✨',
];
let phraseIndex = 0, charIndex = 0, isDeleting = false;
const typingEl = document.getElementById('typingText');

function type() {
  const phrase = phrases[phraseIndex];
  if (!isDeleting) {
    typingEl.textContent = phrase.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === phrase.length) {
      isDeleting = true;
      setTimeout(type, 1800);
      return;
    }
  } else {
    typingEl.textContent = phrase.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }
  setTimeout(type, isDeleting ? 50 : 80);
}
type();

// ─── PARTICLE CANVAS ────────────────────────────
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');

function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener('resize', resize);

const PARTICLE_COUNT = 70;
const particles = [];

class Particle {
  constructor() { this.reset(); }
  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.r = Math.random() * 1.8 + 0.3;
    this.vx = (Math.random() - 0.5) * 0.4;
    this.vy = (Math.random() - 0.5) * 0.4;
    this.alpha = Math.random() * 0.5 + 0.1;
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(108,99,255,${this.alpha})`;
    ctx.fill();
  }
}

for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());

function drawConnections() {
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(108,99,255,${0.15 * (1 - dist / 120)})`;
        ctx.lineWidth = 0.6;
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.stroke();
      }
    }
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => { p.update(); p.draw(); });
  drawConnections();
  requestAnimationFrame(animateParticles);
}
animateParticles();

// ─── STAT COUNTER ───────────────────────────────
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const duration = 1800;
  const start = performance.now();
  function update(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target);
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

// ─── INTERSECTION OBSERVER (AOS + counters) ─────
const observerOptions = { threshold: 0.15, rootMargin: '0px 0px -40px 0px' };

const aosObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Delay support
      const delay = entry.target.dataset.delay ? parseInt(entry.target.dataset.delay) : 0;
      setTimeout(() => entry.target.classList.add('aos-animate'), delay);
      aosObserver.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('[data-aos]').forEach(el => aosObserver.observe(el));

const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number[data-target]').forEach(el => counterObserver.observe(el));

// ─── HERO PHOTO PARALLAX ────────────────────────
const heroPhoto = document.getElementById('heroPhoto');
if (heroPhoto && window.innerWidth > 900) {
  document.addEventListener('mousemove', e => {
    const xRatio = (e.clientX / window.innerWidth - 0.5) * 10;
    const yRatio = (e.clientY / window.innerHeight - 0.5) * 10;
    heroPhoto.style.transform = `translate(${xRatio}px, ${yRatio}px)`;
  });
}

// ─── SMOOTH SCROLL FOR ANCHOR LINKS ─────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      const offset = target.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  });
});

// ─── SKILL PILL HOVER RIPPLE ────────────────────
document.querySelectorAll('.skill-pill').forEach(pill => {
  pill.addEventListener('click', () => {
    pill.style.transform = 'scale(0.95)';
    setTimeout(() => pill.style.transform = '', 150);
  });
});

// ─── CONTACT FORM ───────────────────────────────
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', e => {
    const btn = document.getElementById('sendBtn');
    btn.innerHTML = '<i class="fas fa-check"></i> Opening mail client...';
    btn.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';
    setTimeout(() => {
      btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
      btn.style.background = '';
    }, 3000);
  });
}

// ─── PAGE LOAD FADE-IN ──────────────────────────
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease';
window.addEventListener('load', () => {
  document.body.style.opacity = '1';
});
