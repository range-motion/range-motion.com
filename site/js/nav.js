// =============================================================================
// Range & Motion — Navigation
// Handles: mobile hamburger toggle, aria-expanded, nav scroll behavior
// =============================================================================

(function () {
  'use strict';

  function initNav() {
    const nav = document.querySelector('.site-nav');
    const hamburger = document.querySelector('.nav-hamburger');
    const mobileMenu = document.querySelector('.nav-mobile-menu');
    const mobileLinks = document.querySelectorAll('.nav-mobile-link');

    if (!nav) return;

    // ── Scroll behavior: transparent → filled ──
    function updateNavState() {
      if (window.scrollY > 20) {
        nav.classList.remove('nav-transparent');
        nav.classList.add('nav-filled');
      } else {
        nav.classList.add('nav-transparent');
        nav.classList.remove('nav-filled');
      }
    }

    // Only start transparent on pages with a full hero
    if (document.querySelector('.hero, .page-hero-navy')) {
      nav.classList.add('nav-transparent');
    } else {
      nav.classList.add('nav-filled');
    }

    window.addEventListener('scroll', updateNavState, { passive: true });
    updateNavState();

    // ── Mobile hamburger ──
    if (!hamburger || !mobileMenu) return;

    function openMenu() {
      hamburger.setAttribute('aria-expanded', 'true');
      mobileMenu.classList.add('open');
      document.body.style.overflow = 'hidden';
      // Move focus into menu
      const firstLink = mobileMenu.querySelector('.nav-mobile-link, .btn');
      if (firstLink) firstLink.focus();
    }

    function closeMenu() {
      hamburger.setAttribute('aria-expanded', 'false');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
      hamburger.focus();
    }

    hamburger.addEventListener('click', function () {
      const isOpen = hamburger.getAttribute('aria-expanded') === 'true';
      if (isOpen) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    // Close on mobile link click
    mobileLinks.forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });

    // Close on ESC
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && hamburger.getAttribute('aria-expanded') === 'true') {
        closeMenu();
      }
    });

    // Close on backdrop click (outside menu)
    mobileMenu.addEventListener('click', function (e) {
      if (e.target === mobileMenu) closeMenu();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNav);
  } else {
    initNav();
  }
})();
