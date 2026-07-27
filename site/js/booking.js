// =============================================================================
// Range & Motion — Booking CTA
//
// Configuration:
//   Set BOOKING_URL to the MIOS booking URL when it goes live.
//   Leave empty to show the interim contact modal.
//
// All "Book Your Assessment" buttons must have class .book-cta
// =============================================================================

(function () {
  'use strict';

  // ── Configuration ────────────────────────────────────────────────────────
  // Replace with MIOS booking URL when ready.
  // e.g.: 'https://book.mios.rangeandmotion.com/assessment'
  const BOOKING_URL = '';

  // Contact details — replace before launch
  const CONTACT_PHONE = '[PHONE]';
  const CONTACT_EMAIL = '[EMAIL]';

  // ── DOM setup ─────────────────────────────────────────────────────────────
  function init() {
    const ctaButtons = document.querySelectorAll('.book-cta');
    const modal = document.getElementById('booking-modal');
    const backdrop = document.getElementById('booking-modal-backdrop');
    const closeBtn = document.getElementById('booking-modal-close');
    const phoneEl = document.getElementById('modal-phone');
    const emailEl = document.getElementById('modal-email');

    // Populate contact details
    if (phoneEl) phoneEl.textContent = CONTACT_PHONE;
    if (emailEl) {
      emailEl.textContent = CONTACT_EMAIL;
      emailEl.href = 'mailto:' + CONTACT_EMAIL;
    }

    // Sticky mobile CTA visibility
    initStickyBar();

    // FAQ accordion
    initFaq();

    if (!ctaButtons.length) return;

    // ── CTA click handler ──────────────────────────────────────────────────
    ctaButtons.forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();

        // Fire analytics event
        const location = btn.dataset.ctaLocation || btn.closest('[data-section]')?.dataset.section || 'unknown';
        try {
          document.dispatchEvent(new CustomEvent('assessment_cta_click', {
            detail: { location: location },
            bubbles: true,
          }));
        } catch (_) {}

        if (BOOKING_URL) {
          window.location.href = BOOKING_URL;
        } else {
          openModal(btn);
        }
      });
    });

    // ── Modal logic ────────────────────────────────────────────────────────
    let lastTrigger = null;

    function openModal(trigger) {
      if (!backdrop || !modal) return;
      lastTrigger = trigger;
      backdrop.classList.add('open');
      backdrop.removeAttribute('hidden');
      document.body.style.overflow = 'hidden';
      // Focus close button
      setTimeout(function () {
        if (closeBtn) closeBtn.focus();
      }, 50);
    }

    function closeModal() {
      if (!backdrop) return;
      backdrop.classList.remove('open');
      backdrop.setAttribute('hidden', '');
      document.body.style.overflow = '';
      if (lastTrigger) {
        lastTrigger.focus();
        lastTrigger = null;
      }
    }

    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    // Backdrop click to close
    if (backdrop) {
      backdrop.addEventListener('click', function (e) {
        if (e.target === backdrop) closeModal();
      });
    }

    // ESC to close
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && backdrop && backdrop.classList.contains('open')) {
        closeModal();
      }
    });

    // Focus trap within modal
    if (modal) {
      modal.addEventListener('keydown', function (e) {
        if (e.key !== 'Tab') return;
        const focusable = modal.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      });
    }
  }

  // ── Sticky mobile CTA ──────────────────────────────────────────────────
  function initStickyBar() {
    const stickyBar = document.querySelector('.sticky-mobile-cta');
    const finalCta = document.querySelector('.section-final-cta');
    if (!stickyBar || !finalCta) return;

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            stickyBar.classList.add('hidden');
          } else {
            stickyBar.classList.remove('hidden');
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(finalCta);
  }

  // ── FAQ accordion ─────────────────────────────────────────────────────
  function initFaq() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(function (item) {
      const btn = item.querySelector('.faq-question');
      if (!btn) return;
      btn.addEventListener('click', function () {
        const isOpen = item.classList.contains('open');
        // Close all
        faqItems.forEach(function (i) { i.classList.remove('open'); });
        // Toggle current
        if (!isOpen) item.classList.add('open');
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
