export function initCookieBanner() {
  const cookieName = 'elysia_cookies_accepted';
  const hasConsented = localStorage.getItem(cookieName);

  if (hasConsented) return;

  const bannerHTML = `
    <div class="cookie-banner" id="cookie-banner">
      <div class="cookie-banner__content">
        <p>Folosim cookie-uri pentru a vă asigura cea mai bună experiență pe site-ul nostru. Pentru mai multe detalii, vă rugăm să consultați <a href="/politica-cookie">Politica de Cookie-uri</a>.</p>
      </div>
      <div class="cookie-banner__actions">
        <button class="cookie-banner__btn cookie-banner__btn--reject" id="cookie-reject">Refuză</button>
        <button class="cookie-banner__btn cookie-banner__btn--accept" id="cookie-accept">Acceptă</button>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', bannerHTML);

  const banner = document.getElementById('cookie-banner');
  const btnAccept = document.getElementById('cookie-accept');
  const btnReject = document.getElementById('cookie-reject');

  // Show banner with a small delay for animation
  setTimeout(() => {
    banner.classList.add('show');
  }, 500);

  btnAccept.addEventListener('click', () => {
    localStorage.setItem(cookieName, 'true');
    hideBanner();
  });

  btnReject.addEventListener('click', () => {
    localStorage.setItem(cookieName, 'false');
    hideBanner();
  });

  function hideBanner() {
    banner.classList.remove('show');
    setTimeout(() => {
      banner.remove();
    }, 300); // Wait for transition to finish
  }
}
