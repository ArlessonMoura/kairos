// ==========================================================================
// KAIRÓS — main.js
// ==========================================================================

// Bootstrap (instalado via npm — sem CDN)
import 'bootstrap/dist/css/bootstrap.min.css';
import { Collapse } from 'bootstrap';

// Fontes (npm, subset latin-ext para acentuação em português)
import '@fontsource/fraunces/latin-ext-400.css';
import '@fontsource/fraunces/latin-ext-500.css';
import '@fontsource/fraunces/latin-ext-600.css';
import '@fontsource/fraunces/latin-ext-600-italic.css';
import '@fontsource/manrope/latin-ext-400.css';
import '@fontsource/manrope/latin-ext-500.css';
import '@fontsource/manrope/latin-ext-600.css';
import '@fontsource/manrope/latin-ext-700.css';
import '@fontsource/manrope/latin-ext-800.css';

import './style.css';
import { icon } from './icons.js';

// --------------------------------------------------------------------------
// Configuração central do WhatsApp
// --------------------------------------------------------------------------
const WHATSAPP_NUMBER = '5581998909050';

function buildWaLink(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function initWhatsAppLinks() {
  document.querySelectorAll('[data-wa-msg]').forEach((el) => {
    const message = el.getAttribute('data-wa-msg');
    el.setAttribute('href', buildWaLink(message));
    el.setAttribute('target', '_blank');
    el.setAttribute('rel', 'noopener noreferrer');

    el.addEventListener('click', () => {
      el.classList.remove('is-tapped');
      // força reflow para permitir repetir a animação
      void el.offsetWidth;
      el.classList.add('is-tapped');
    });
  });
}

// --------------------------------------------------------------------------
// Ícones — injeta os SVGs nos placeholders [data-icon]
// --------------------------------------------------------------------------
function initIcons() {
  document.querySelectorAll('[data-icon]').forEach((el) => {
    const name = el.getAttribute('data-icon');
    el.innerHTML = icon(name);
  });
}

// --------------------------------------------------------------------------
// Preferência por menos movimento
// --------------------------------------------------------------------------
function initMotionPreference() {
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  const apply = () => {
    document.documentElement.classList.toggle('reduce-motion', mq.matches);
  };
  apply();
  mq.addEventListener?.('change', apply);
}

// --------------------------------------------------------------------------
// Navbar — estado ao rolar + fechar menu mobile ao clicar em link
// --------------------------------------------------------------------------
function initNavbar() {
  const navbar = document.querySelector('.kai-navbar');
  if (!navbar) return;

  const onScroll = () => {
    navbar.classList.toggle('is-scrolled', window.scrollY > 24);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  const collapseEl = document.querySelector('#kaiNavMenu');
  if (collapseEl) {
    const bsCollapse = Collapse.getOrCreateInstance(collapseEl, { toggle: false });
    collapseEl.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        if (collapseEl.classList.contains('show')) {
          bsCollapse.hide();
        }
      });
    });
  }
}

// --------------------------------------------------------------------------
// Botão flutuante do WhatsApp — aparece depois do Hero
// --------------------------------------------------------------------------
function initFloatingWhatsApp() {
  const floatBtn = document.querySelector('.wa-float');
  const hero = document.querySelector('.hero');
  if (!floatBtn || !hero) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      floatBtn.classList.toggle('is-visible', !entry.isIntersecting);
    },
    { threshold: 0.15 }
  );
  observer.observe(hero);
}

// --------------------------------------------------------------------------
// Revelação suave ao rolar a página
// --------------------------------------------------------------------------
function initScrollReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  if (document.documentElement.classList.contains('reduce-motion') || !('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14, rootMargin: '0px 0px -60px 0px' }
  );

  items.forEach((el) => observer.observe(el));
}

// --------------------------------------------------------------------------
// Ano corrente no rodapé
// --------------------------------------------------------------------------
function initFooterYear() {
  const el = document.querySelector('[data-current-year]');
  if (el) el.textContent = new Date().getFullYear();
}

// --------------------------------------------------------------------------
// Boot
// --------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  initMotionPreference();
  initIcons();
  initWhatsAppLinks();
  initNavbar();
  initFloatingWhatsApp();
  initScrollReveal();
  initFooterYear();
});
