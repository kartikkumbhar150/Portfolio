import './style.css';
import { HeroScene } from './three-scene.js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

// ─── Initialize Three.js ───
const canvas = document.getElementById('hero-canvas');
const heroScene = new HeroScene(canvas);

// ─── Smooth Scroll (Lenis) ───
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  mouseMultiplier: 1,
  smoothTouch: false,
  touchMultiplier: 2,
  infinite: false,
});

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

// ─── Cursor Glow Effect ───
const cursorGlow = document.getElementById('cursor-glow');
let cursorActive = false;

document.addEventListener('mousemove', (e) => {
  if (!cursorActive) {
    cursorGlow.classList.add('active');
    cursorActive = true;
  }
  cursorGlow.style.left = e.clientX + 'px';
  cursorGlow.style.top = e.clientY + 'px';
});

document.addEventListener('mouseleave', () => {
  cursorGlow.classList.remove('active');
  cursorActive = false;
});

// ─── Navigation ───
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

// Scroll effect for navbar
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;
  if (currentScroll > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
  lastScroll = currentScroll;
});

// Mobile toggle
navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('active');
  navLinks.classList.toggle('active');
});

// Close nav on link click
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navToggle.classList.remove('active');
    navLinks.classList.remove('active');
  });
});

// ═══════════════════════════════════════════
// HERO ANIMATIONS (Dramatic Boot-up)
// ═══════════════════════════════════════════
const heroTimeline = gsap.timeline({ defaults: { ease: 'power2.inOut' } });

heroTimeline
  .to('.hero__badge', {
    opacity: 1,
    duration: 1.5,
    delay: 0.5,
  })
  .to('.hero__title-word', {
    opacity: 1,
    y: 0,
    duration: 2,
    stagger: 0.3,
    ease: 'expo.out'
  }, '-=1')
  .to('.hero__subtitle', {
    opacity: 1,
    duration: 1.5,
  }, '-=1.2')
  .to('.hero__cta-group', {
    opacity: 1,
    duration: 1.5,
  }, '-=1')
  .to('.hero__scroll-indicator', {
    opacity: 0.8,
    duration: 2,
  }, '-=0.5');

// ═══════════════════════════════════════════
// SECTION HEADER ANIMATIONS
// ═══════════════════════════════════════════
document.querySelectorAll('.section__header').forEach(header => {
  gsap.from(header, {
    scrollTrigger: {
      trigger: header,
      start: 'top 85%',
      toggleActions: 'play none none reverse',
    },
    opacity: 0,
    y: 20,
    duration: 1.5,
    ease: 'power2.out'
  });
});

// ═══════════════════════════════════════════
// ABOUT SECTION ANIMATIONS
// ═══════════════════════════════════════════
gsap.from('.about__photo-frame', {
  scrollTrigger: {
    trigger: '.about__photo-area',
    start: 'top 80%',
    toggleActions: 'play none none reverse',
  },
  opacity: 0,
  duration: 2,
  ease: 'power2.out',
});

gsap.from('.about__photo-decoration', {
  scrollTrigger: {
    trigger: '.about__photo-area',
    start: 'top 75%',
    toggleActions: 'play none none reverse',
  },
  opacity: 0,
  x: -20,
  y: -20,
  stagger: 0.15,
  duration: 0.8,
  delay: 0.3,
});

gsap.from('.about__gallery-item', {
  scrollTrigger: {
    trigger: '.about__photo-gallery',
    start: 'top 85%',
    toggleActions: 'play none none reverse',
  },
  opacity: 0,
  y: 30,
  stagger: 0.1,
  duration: 0.6,
});

gsap.from('.about__bio', {
  scrollTrigger: {
    trigger: '.about__content',
    start: 'top 75%',
    toggleActions: 'play none none reverse',
  },
  opacity: 0,
  y: 30,
  duration: 0.8,
});

// Stat counter animation
const statCards = document.querySelectorAll('.stat-card__number');
statCards.forEach(card => {
  const target = parseFloat(card.dataset.target);
  const prefix = card.dataset.prefix || '';
  const suffix = card.dataset.suffix || '';
  const isDecimal = target % 1 !== 0;

  ScrollTrigger.create({
    trigger: card,
    start: 'top 85%',
    onEnter: () => {
      gsap.to({ val: 0 }, {
        val: target,
        duration: 2,
        ease: 'power2.out',
        onUpdate: function () {
          const current = this.targets()[0].val;
          card.textContent = prefix + (isDecimal ? current.toFixed(2) : Math.floor(current)) + suffix;
        },
      });
    },
    once: true,
  });
});

gsap.from('.stat-card', {
  scrollTrigger: {
    trigger: '.about__stats',
    start: 'top 80%',
    toggleActions: 'play none none reverse',
  },
  opacity: 0,
  y: 30,
  stagger: 0.1,
  duration: 0.6,
});

gsap.from('.about__resume-btn', {
  scrollTrigger: {
    trigger: '.about__resume-btn',
    start: 'top 90%',
    toggleActions: 'play none none reverse',
  },
  opacity: 0,
  y: 20,
  duration: 0.6,
});

// ═══════════════════════════════════════════
// SKILLS ANIMATIONS
// ═══════════════════════════════════════════
gsap.from('.skill-category', {
  scrollTrigger: {
    trigger: '.skills__grid',
    start: 'top 75%',
    toggleActions: 'play none none reverse',
  },
  opacity: 0,
  y: 40,
  stagger: {
    each: 0.1,
    grid: [2, 3],
    from: 'start',
  },
  duration: 0.7,
  ease: 'power3.out',
});

// ═══════════════════════════════════════════
// PROJECTS ANIMATIONS
// ═══════════════════════════════════════════
document.querySelectorAll('.project-card').forEach((card, index) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
    opacity: 0,
    y: 60,
    duration: 0.9,
    delay: index * 0.15,
    ease: 'power3.out',
  });
});

// Project card 3D tilt on hover
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / centerY * -3;
    const rotateY = (x - centerX) / centerX * 3;

    gsap.to(card, {
      rotateX: rotateX,
      rotateY: rotateY,
      transformPerspective: 1000,
      duration: 0.3,
      ease: 'power2.out',
    });
  });

  card.addEventListener('mouseleave', () => {
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
      ease: 'power2.out',
    });
  });
});

// ═══════════════════════════════════════════
// TIMELINE (EXPERIENCE) ANIMATIONS
// ═══════════════════════════════════════════
gsap.from('.timeline__line', {
  scrollTrigger: {
    trigger: '.timeline',
    start: 'top 70%',
    end: 'bottom 20%',
    scrub: 1,
  },
  scaleY: 0,
  transformOrigin: 'top center',
});

document.querySelectorAll('.timeline__item').forEach((item, index) => {
  const isLeft = item.classList.contains('timeline__item--left');

  gsap.from(item.querySelector('.timeline__card'), {
    scrollTrigger: {
      trigger: item,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
    opacity: 0,
    x: isLeft ? -50 : 50,
    duration: 0.8,
    delay: 0.2,
    ease: 'power3.out',
  });

  gsap.from(item.querySelector('.timeline__dot'), {
    scrollTrigger: {
      trigger: item,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
    scale: 0,
    duration: 0.4,
    ease: 'back.out(2)',
  });
});

// ═══════════════════════════════════════════
// ACHIEVEMENTS ANIMATIONS
// ═══════════════════════════════════════════
document.querySelectorAll('.achievement-card').forEach((card, index) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: 'top 85%',
      toggleActions: 'play none none reverse',
    },
    opacity: 0,
    y: 40,
    scale: 0.95,
    duration: 0.7,
    delay: index * 0.1,
    ease: 'power3.out',
  });

  // Hover 3D tilt
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / centerY * -5;
    const rotateY = (x - centerX) / centerX * 5;

    gsap.to(card, {
      rotateX,
      rotateY,
      transformPerspective: 800,
      duration: 0.3,
    });
  });

  card.addEventListener('mouseleave', () => {
    gsap.to(card, {
      rotateX: 0,
      rotateY: 0,
      duration: 0.5,
    });
  });
});

// ═══════════════════════════════════════════
// CONTACT ANIMATIONS
// ═══════════════════════════════════════════
gsap.from('.contact__intro', {
  scrollTrigger: {
    trigger: '.contact__grid',
    start: 'top 75%',
    toggleActions: 'play none none reverse',
  },
  opacity: 0,
  y: 30,
  duration: 0.7,
});

gsap.from('.contact__link', {
  scrollTrigger: {
    trigger: '.contact__links',
    start: 'top 80%',
    toggleActions: 'play none none reverse',
  },
  opacity: 0,
  x: -30,
  stagger: 0.1,
  duration: 0.6,
});

gsap.from('.form-group', {
  scrollTrigger: {
    trigger: '.contact__form',
    start: 'top 80%',
    toggleActions: 'play none none reverse',
  },
  opacity: 0,
  y: 30,
  stagger: 0.12,
  duration: 0.6,
});

gsap.from('.contact__submit', {
  scrollTrigger: {
    trigger: '.contact__submit',
    start: 'top 90%',
    toggleActions: 'play none none reverse',
  },
  opacity: 0,
  y: 20,
  duration: 0.6,
});

// ═══════════════════════════════════════════
// CONTACT FORM HANDLING
// ═══════════════════════════════════════════
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const submitBtn = document.getElementById('contact-submit');
  const originalContent = submitBtn.innerHTML;

  submitBtn.innerHTML = '<span>Sending...</span>';
  submitBtn.disabled = true;

  // Simulate form submission
  setTimeout(() => {
    submitBtn.innerHTML = '<span>Message Sent! ✓</span>';
    submitBtn.style.background = 'linear-gradient(135deg, #00f0a0, #00c8ff)';

    setTimeout(() => {
      submitBtn.innerHTML = originalContent;
      submitBtn.style.background = '';
      submitBtn.disabled = false;
      contactForm.reset();
    }, 2500);
  }, 1200);
});

// ═══════════════════════════════════════════
// SMOOTH SCROLL
// ═══════════════════════════════════════════
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ═══════════════════════════════════════════
// ACTIVE NAV HIGHLIGHT
// ═══════════════════════════════════════════
const sections = document.querySelectorAll('.section');
const navLinkItems = document.querySelectorAll('.nav-link');

const observerOptions = {
  root: null,
  rootMargin: '-20% 0px -80% 0px',
  threshold: 0,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinkItems.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === `#${id}`) {
          link.style.color = 'var(--accent-primary)';
        }
      });
    }
  });
}, observerOptions);

sections.forEach(section => observer.observe(section));

// ═══════════════════════════════════════════
// MAGNETIC BUTTONS
// ═══════════════════════════════════════════
const magneticElements = document.querySelectorAll('.btn, .nav-link, .nav-toggle');

magneticElements.forEach((elem) => {
  elem.addEventListener('mousemove', function(e) {
    const position = elem.getBoundingClientRect();
    const x = e.clientX - position.left - position.width / 2;
    const y = e.clientY - position.top - position.height / 2;
    
    gsap.to(elem, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.4,
      ease: 'power2.out'
    });
  });
  
  elem.addEventListener('mouseleave', function() {
    gsap.to(elem, {
      x: 0,
      y: 0,
      duration: 0.7,
      ease: 'elastic.out(1, 0.3)'
    });
  });
});

console.log('%c✦ Kartik Kumbhar Portfolio Loaded ✦', 'color: #00c8ff; font-size: 14px; font-weight: bold;');
