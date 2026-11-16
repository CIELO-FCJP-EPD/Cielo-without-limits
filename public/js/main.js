'use strict';
/* Datos modificables. Los contenidos institucionales permanecen en HTML.
   Las colecciones vacías no representan publicaciones ni eventos existentes.
   Antes de publicar, confirmar la vigencia de los canales de las diapositivas. */
const CIELO = {
  name: 'CIELO', tagline: 'Sin límites', plan: '2026–2027', timezone: 'America/Lima',
  contact: {email: 'cielo.litigacion@gmail.com', instagram: 'https://www.instagram.com/cielo.fcjp/', source: 'Diapositivas 5 y 6', verifiedCurrent: false},
  publications: [], events: [], opportunities: []
};
document.querySelectorAll('[data-email]').forEach(link => {link.href = 'mailto:' + CIELO.contact.email; link.textContent = CIELO.contact.email;});
document.querySelectorAll('[data-instagram]').forEach(link => {link.href = CIELO.contact.instagram;});
document.getElementById('year').textContent = new Date().getFullYear();

/* Menú móvil: mejora progresiva, navegación visible si JavaScript no funciona. */
const menuButton = document.querySelector('.menu-toggle');
const nav = document.getElementById('navegacion');
const mobileNav = matchMedia('(max-width: 900px)');
function closeMenu(returnFocus = false) {
  nav.classList.remove('is-open'); menuButton.setAttribute('aria-expanded', 'false');
  if (returnFocus) menuButton.focus();
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  nav.classList.toggle('is-open', open); menuButton.setAttribute('aria-expanded', String(open));
});
nav.addEventListener('click', event => {
  const link = event.target.closest('a');
  if (!link || !mobileNav.matches) return;
  closeMenu();
  const target = document.querySelector(link.hash);
  if (target) {target.setAttribute('tabindex', '-1'); target.focus({preventScroll: true}); target.addEventListener('blur', () => target.removeAttribute('tabindex'), {once: true});}
});
document.addEventListener('keydown', event => {if (event.key === 'Escape' && nav.classList.contains('is-open')) closeMenu(true);});
document.addEventListener('click', event => {if (!event.target.closest('.header') && nav.classList.contains('is-open')) closeMenu();});
mobileNav.addEventListener('change', () => closeMenu());
document.documentElement.classList.add('menu-ready');

/* Copiar no significa enviar: no hay formulario ni envío automatizado. */
const copyButton = document.getElementById('copy-email');
const copyStatus = document.getElementById('copy-status');
copyButton.hidden = false;
copyButton.addEventListener('click', async () => {
  try {await navigator.clipboard.writeText(CIELO.contact.email); copyStatus.textContent = 'Correo copiado. Puedes pegarlo donde lo necesites.';}
  catch {copyStatus.textContent = 'Selecciona el correo para copiarlo, o pulsa el enlace para abrir tu aplicación de correo.';}
});

const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');

const hero = document.getElementById('inicio');
const motionControl = document.getElementById('motion-control');
motionControl.hidden = reducedMotion.matches;
motionControl.addEventListener('click', () => {
  const paused = hero.classList.toggle('motion-paused');
  motionControl.setAttribute('aria-pressed', String(paused));
  motionControl.textContent = paused ? 'Reproducir fondo' : 'Pausar fondo';
});
reducedMotion.addEventListener('change', () => {motionControl.hidden = reducedMotion.matches;});
document.addEventListener('visibilitychange', () => {
  const paused = document.hidden || motionControl.getAttribute('aria-pressed') === 'true';
  hero.classList.toggle('motion-paused', paused);
});

/* Animaciones no bloqueantes: todo el contenido es visible por defecto. */
function reveal(element, delay = 0) {
  if (reducedMotion.matches || typeof element.animate !== 'function') return;
  element.animate([{opacity: 0, transform: 'translateY(14px)'}, {opacity: 1, transform: 'translateY(0)'}], {duration: 700, delay, easing: 'cubic-bezier(.16,1,.3,1)', fill: 'backwards'});
}
document.querySelectorAll('.hero-copy > *').forEach((element, i) => reveal(element, i * 90));
if ('IntersectionObserver' in window) {
  const reveals = new IntersectionObserver(entries => {entries.forEach(entry => {if (entry.isIntersecting) {reveal(entry.target); reveals.unobserve(entry.target);}});}, {threshold: .1});
  document.querySelectorAll('.section-top, .intro-grid, .identity-grid, .publication-copy, .join-copy, .faq-title').forEach(element => reveals.observe(element));
}
reducedMotion.addEventListener('change', () => {if (reducedMotion.matches) document.getAnimations().forEach(animation => animation.cancel());});
