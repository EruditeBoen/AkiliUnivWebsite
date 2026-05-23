function showLayer(name) {
  document.querySelectorAll('.layer').forEach(l => l.classList.remove('active'));
  document.getElementById('layer-' + name).classList.add('active');

  document.querySelectorAll('.nav-links button, .mobile-menu button').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.layer === name);
  });

  document.getElementById('layer-' + name).scrollTop = 0;

  // Keep URL hash in sync for direct linking and browser history
  history.pushState(null, '', '#' + name);
}

function toggleMobile() {
  const menu = document.getElementById('mobile-menu');
  const btn  = document.getElementById('hamburger');
  const open = menu.classList.toggle('open');
  btn.classList.toggle('open', open);
}

// Close mobile menu on outside click
document.addEventListener('click', e => {
  const menu = document.getElementById('mobile-menu');
  const ham  = document.getElementById('hamburger');
  if (menu.classList.contains('open') && !menu.contains(e.target) && !ham.contains(e.target)) {
    menu.classList.remove('open');
    ham.classList.remove('open');
  }
});

// Support direct linking via URL hash (e.g. akiliuniverse.org/#curriculum)
(function () {
  const valid = ['home', 'about', 'curriculum', 'universities', 'gallery', 'contact'];
  const hash  = window.location.hash.replace('#', '');
  if (valid.includes(hash)) showLayer(hash);
})();

// ── Contact form – reCAPTCHA gate + FormSubmit submission ────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Show success message if returning from a successful FormSubmit redirect
  if (sessionStorage.getItem('formSent') === 'true') {
    sessionStorage.removeItem('formSent');
    const msg = document.getElementById('form-success-msg');
    if (msg) { msg.removeAttribute('hidden'); msg.classList.add('visible'); }
  }

  const form       = document.getElementById('contact-form');
  const captchaErr = document.getElementById('captcha-error');
  if (!form) return;

  form.addEventListener('submit', e => {
    const recaptchaResponse = (typeof grecaptcha !== 'undefined') ? grecaptcha.getResponse() : '';

    if (!recaptchaResponse) {
      e.preventDefault();
      captchaErr.classList.add('visible');
      captchaErr.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      return;
    }

    captchaErr.classList.remove('visible');
    sessionStorage.setItem('formSent', 'true');
    // reCAPTCHA passed — native form submits to FormSubmit
  });
});
