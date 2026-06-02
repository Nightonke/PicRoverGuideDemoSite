(function () {
  const data = window.PRGuideDemo || { galleries: {}, images: {} };
  const scriptSource = document.currentScript ? document.currentScript.getAttribute('src') || '' : '';
  const siteRoot = scriptSource.replace(/assets\/site\.js(?:\?.*)?$/, '');

  function createImageCard(item, index) {
    const figure = document.createElement('figure');
    figure.className = 'image-card';

    const imageSrc = localImageURL(item);
    const link = document.createElement('a');
    link.href = imageSrc;
    link.className = 'image-card__link';
    link.setAttribute('aria-label', item.title);

    const img = document.createElement('img');
    img.alt = item.title;
    img.width = 900;
    img.height = 1200;
    img.loading = index < 3 ? 'eager' : 'lazy';
    img.decoding = 'async';
    img.onerror = function () {
      img.onerror = null;
      img.removeAttribute('data-src');
      img.src = missingImagePlaceholder(item);
    };
    if (index < 4) {
      img.src = imageSrc;
    } else {
      img.dataset.src = imageSrc;
      img.src = tinyPlaceholder();
    }
    link.appendChild(img);

    const caption = document.createElement('figcaption');
    caption.innerHTML = `<strong>${item.title}</strong><span>${item.creator}</span>`;
    figure.appendChild(link);
    figure.appendChild(caption);
    return figure;
  }

  function localImageURL(item) {
    if (!item) return tinyPlaceholder();
    if (item.src) return item.src;
    if (!item.file) return tinyPlaceholder();
    return `${siteRoot}images/${item.file}`;
  }

  function tinyPlaceholder() {
    return 'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22900%22 height=%221200%22%3E%3Crect width=%22900%22 height=%221200%22 fill=%22%23e9edf4%22/%3E%3C/svg%3E';
  }

  function missingImagePlaceholder(item) {
    const label = item && item.file ? item.file : 'local image';
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="1200"><rect width="900" height="1200" fill="#e9edf4"/><rect x="70" y="470" width="760" height="260" rx="28" fill="#ffffff"/><text x="450" y="570" text-anchor="middle" font-family="-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif" font-size="42" font-weight="700" fill="#162033">Add local image</text><text x="450" y="642" text-anchor="middle" font-family="-apple-system,BlinkMacSystemFont,Segoe UI,sans-serif" font-size="34" fill="#68758a">${label}</text></svg>`;
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
  }

  function mountGalleries() {
    const body = document.body;
    const mounts = Array.from(document.querySelectorAll('[data-gallery-mount]'));
    if (!mounts.length) return;
    mounts.forEach((mount) => {
      const galleryName = mount.getAttribute('data-gallery-mount') || body.dataset.gallery;
      const items = data.galleries[galleryName] || [];
      if (!items.length) return;
      const fragment = document.createDocumentFragment();
      items.forEach((item, index) => fragment.appendChild(createImageCard(item, index)));
      mount.appendChild(fragment);
    });
  }

  function mountBackgroundRow() {
    const row = document.querySelector('[data-background-row]');
    if (!row) return;
    const items = data.images[row.dataset.backgroundRow] || data.images.landscapes || [];
    row.innerHTML = '';
    items.slice(0, 3).forEach((item) => {
      const imageSrc = localImageURL(item);
      const card = document.createElement('a');
      card.className = 'background-card';
      card.href = imageSrc;
      card.style.backgroundImage = `linear-gradient(180deg, rgba(12, 20, 30, .08), rgba(12, 20, 30, .68)), url("${imageSrc}")`;
      card.innerHTML = `<strong>${item.title}</strong><span>${item.creator}</span>`;
      row.appendChild(card);
    });
  }

  function enableLazyImages() {
    const lazyImages = Array.from(document.querySelectorAll('img[data-src]'));
    if (!('IntersectionObserver' in window)) {
      lazyImages.forEach(loadLazyImage);
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        loadLazyImage(entry.target);
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '420px 0px' });
    lazyImages.forEach((img) => observer.observe(img));
  }

  function loadLazyImage(img) {
    if (!img.dataset.src) return;
    img.src = img.dataset.src;
    img.removeAttribute('data-src');
  }

  document.addEventListener('DOMContentLoaded', () => {
    mountGalleries();
    mountBackgroundRow();
    enableLazyImages();
  });
})();
