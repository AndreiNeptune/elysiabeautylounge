/* ═══════════════════════════════════════════════════════
   Gallery — Masonry Filter + Lightbox
   ═══════════════════════════════════════════════════════ */

export function initGallery() {
  const filters = document.querySelectorAll('.gallery-filter');
  const items = document.querySelectorAll('.masonry-grid__item');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = lightbox?.querySelector('img');
  const lightboxClose = lightbox?.querySelector('.lightbox__close');

  // Filter
  filters.forEach(filter => {
    filter.addEventListener('click', () => {
      const category = filter.dataset.filter;

      // Update active filter
      filters.forEach(f => f.classList.remove('active'));
      filter.classList.add('active');

      // Filter items
      items.forEach(item => {
        if (category === 'all' || item.dataset.category === category) {
          item.style.display = '';
          setTimeout(() => { item.style.opacity = '1'; item.style.transform = 'scale(1)'; }, 50);
        } else {
          item.style.opacity = '0';
          item.style.transform = 'scale(0.95)';
          setTimeout(() => { item.style.display = 'none'; }, 300);
        }
      });
    });
  });

  // Lightbox open
  items.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      if (lightboxImg && img) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt || '';
        lightbox.classList.add('open');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  // Lightbox close
  function closeLightbox() {
    lightbox?.classList.remove('open');
    document.body.style.overflow = '';
  }

  lightboxClose?.addEventListener('click', closeLightbox);
  lightbox?.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox?.classList.contains('open')) {
      closeLightbox();
    }
  });
  // Service Slider - Infinite Loop & Drag to Scroll
  const sliders = document.querySelectorAll('.service-slider');
  sliders.forEach(slider => {
    const items = Array.from(slider.children);
    if (items.length === 0) return;

    // Clone items for infinite scroll (prepend and append)
    const appendClones = [];
    items.forEach(item => {
      const clone = item.cloneNode(true);
      appendClones.push(clone);
      slider.appendChild(clone); // append
    });
    
    items.slice().reverse().forEach(item => {
      slider.insertBefore(item.cloneNode(true), slider.firstChild); // prepend
    });

    let jumpDistance = 0;
    
    // Set initial scroll to the original items
    setTimeout(() => {
      jumpDistance = appendClones[0].offsetLeft - items[0].offsetLeft;
      slider.scrollLeft = jumpDistance;
    }, 50);

    // Handle seamless looping
    slider.addEventListener('scroll', () => {
      if (!jumpDistance) return;
      
      // If scrolled near the very beginning, jump forward exactly one set
      if (slider.scrollLeft <= 10) {
        slider.scrollLeft += jumpDistance;
      } 
      // If scrolled past the original set into the appended clones, jump backward exactly one set
      else if (slider.scrollLeft >= jumpDistance * 2 - 10) {
        slider.scrollLeft -= jumpDistance;
      }
    }, { passive: true });

    // Drag to scroll logic
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
      slider.style.scrollBehavior = 'auto'; // Disable smooth scroll while dragging
    });
    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.classList.remove('active');
    });
    slider.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2; // Scroll speed multiplier
      slider.scrollLeft = scrollLeft - walk;
    });
  });
}
