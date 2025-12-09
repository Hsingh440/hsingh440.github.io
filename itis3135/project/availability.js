// Fetch and render crops from JSON (GET only)
(() => {
  const container = document.getElementById('crop-list');
  if (!container) return;

  fetch('data/availability.json', { cache: 'no-store' })
    .then((res) => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    })
    .then((items) => {
      if (!Array.isArray(items)) throw new Error('Bad JSON');
      container.innerHTML = items.map((item) => `
        <article class="card">
          <h3>${item.name}</h3>
          <p><em>${item.window}</em></p>
          ${item.img ? `<img src="${item.img}" alt="${item.name}">` : ''}
          <p>${item.desc || ''}</p>
        </article>
      `).join('');
    })
    .catch(() => {
      container.innerHTML = `<p>Sorry, crops are unavailable right now. Please try again later.</p>`;
    });
})();
