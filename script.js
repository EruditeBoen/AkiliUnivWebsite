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

// ── Contact form – Web3Forms submission ──────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const form      = document.getElementById('contact-form');
  const captchaErr = document.getElementById('captcha-error');
  if (!form) return;

  form.addEventListener('submit', async e => {
    e.preventDefault();

    const recaptchaResponse = (typeof grecaptcha !== 'undefined') ? grecaptcha.getResponse() : '';

    if (!recaptchaResponse) {
      captchaErr.classList.add('visible');
      captchaErr.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      return;
    }
    captchaErr.classList.remove('visible');

    const submitBtn = form.querySelector('.btn-submit');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';

    const data = Object.fromEntries(new FormData(form));
    data['g-recaptcha-response'] = recaptchaResponse;

    try {
      const res  = await fetch('https://api.web3forms.com/submit', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body:    JSON.stringify(data),
      });
      const json = await res.json();

      if (json.success) {
        form.innerHTML = '<p class="form-success">Thank you! We\'ll be in touch soon.</p>';
      } else {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
        alert('Something went wrong. Please try again or email us directly at admissions@akiliuniverse.org.');
      }
    } catch {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send Message';
      alert('Network error. Please check your connection and try again.');
    }
  });
});
