// Basic client-side validation helper
(() => {
  const form = document.querySelector('.contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    const name = form.querySelector('#name');
    const email = form.querySelector('#email');
    const reason = form.querySelector('#reason');

    let ok = true;

    if (!name.value.trim()) { name.setCustomValidity('Please enter your name.'); ok = false; }
    else name.setCustomValidity('');

    if (!email.validity.valid) { email.setCustomValidity('Enter a valid email.'); ok = false; }
    else email.setCustomValidity('');

    if (!reason.value) { reason.setCustomValidity('Please choose a reason.'); ok = false; }
    else reason.setCustomValidity('');

    if (!ok) { e.preventDefault(); form.reportValidity(); }
  });
})();
