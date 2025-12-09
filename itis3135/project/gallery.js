// Lightbox Gallery - Akaal Farms
(() => {
  const gallery = document.getElementById('livestock-gallery');
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightbox-img');
  const btnClose = document.getElementById('lightbox-close');

  if (!gallery || !lb || !lbImg || !btnClose) return;

  // Open
  gallery.addEventListener('click', (e) => {
    const a = e.target.closest('a.thumb');
    if (!a) return;
    e.preventDefault();
    const src = a.getAttribute('data-full') || a.querySelector('img')?.src;
    if (!src) return;
    lbImg.src = src;
    lb.setAttribute('aria-hidden', 'false');
    btnClose.focus();
  });

  // Close actions
  function closeLB() {
    lb.setAttribute('aria-hidden', 'true');
    lbImg.removeAttribute('src');
  }
  btnClose.addEventListener('click', closeLB);
  lb.addEventListener('click', (e) => { if (e.target === lb) closeLB(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLB(); });
})();
