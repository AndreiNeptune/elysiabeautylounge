/* ═══════════════════════════════════════════════════════
   Shared Layout — Injects navbar and footer into pages
   ═══════════════════════════════════════════════════════ */

export function initSharedLayout() {
  // Insert navbar
  const navPlaceholder = document.getElementById('shared-nav');
  if (navPlaceholder) {
    navPlaceholder.outerHTML = getNavbarHTML();
  }

  // Insert mobile drawer
  const drawerPlaceholder = document.getElementById('shared-drawer');
  if (drawerPlaceholder) {
    drawerPlaceholder.outerHTML = getDrawerHTML();
  }

  // Insert footer
  const footerPlaceholder = document.getElementById('shared-footer');
  if (footerPlaceholder) {
    footerPlaceholder.outerHTML = getFooterHTML();
  }
}

function getNavbarHTML() {
  return `
  <nav class="navbar" id="navbar">
    <div class="container">
      <div class="navbar__inner">
        <a href="/" class="navbar__logo" aria-label="Elysia Beauty Lounge - Acasă">
          <img src="/images/logo.webp" alt="Elysia Beauty Lounge" width="160" height="50">
        </a>
        <div class="navbar__links">
          <a href="/" class="navbar__link">Acasă</a>
          <div class="navbar__services-trigger">
            <span class="navbar__link">Servicii <span class="chevron"></span></span>
            <div class="mega-menu">
              <a href="/manichiura-pedichiura.html" class="mega-menu__item">
                <div class="mega-menu__text"><h4>Manichiură & Pedichiură</h4><p>Semi, gel, clasic, SPA, japoneză</p></div>
              </a>
              <a href="/coafor-extensii.html" class="mega-menu__item">
                <div class="mega-menu__text"><h4>Coafor & Extensii</h4><p>Tuns, coafat, vopsit, extensii</p></div>
              </a>
              <a href="/make-up.html" class="mega-menu__item">
                <div class="mega-menu__text"><h4>Make-up</h4><p>Machiaj de zi și seară</p></div>
              </a>
              <a href="/sprancene.html" class="mega-menu__item">
                <div class="mega-menu__text"><h4>Sprâncene</h4><p>Laminare, stilizare, vopsit</p></div>
              </a>
              <a href="/epilare-definitiva.html" class="mega-menu__item">
                <div class="mega-menu__text"><h4>Epilare Definitivă</h4><p>Full Body de la 249 lei</p></div>
              </a>
              <a href="/pachete-beauty.html" class="mega-menu__item">
                <div class="mega-menu__text"><h4>Pachete Beauty</h4><p>Combinații avantajoase</p></div>
              </a>
            </div>
          </div>
          <a href="/galerie.html" class="navbar__link">Galerie</a>
          <a href="/despre-noi.html" class="navbar__link">Despre Noi</a>
          <a href="/contact.html" class="navbar__link">Contact</a>
        </div>
        <div class="navbar__cta">
          <a href="https://www.fresha.com/book-now/elysia-beauty-lounge-r38rgmme/all-offer?share=true&pId=2655167" target="_blank" rel="noopener" class="btn btn--gold btn--sm">Programează-te</a>
        </div>
        <button class="navbar__burger" id="burger" aria-label="Deschide meniul" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </nav>`;
}

function getDrawerHTML() {
  return `
  <div class="mobile-drawer" id="mobile-drawer">
    <div class="mobile-drawer__overlay"></div>
    <div class="mobile-drawer__panel">
      <button class="mobile-drawer__close" aria-label="Închide meniul">✕</button>
      <div class="mobile-drawer__logo"><img src="/images/logo.webp" alt="Elysia Beauty Lounge" width="120" height="38"></div>
      <nav class="mobile-drawer__nav">
        <a href="/" class="mobile-drawer__link">Acasă</a>
        <span class="mobile-drawer__link" style="color:var(--color-accent);font-weight:600;">Servicii</span>
        <div class="mobile-drawer__submenu">
          <a href="/manichiura-pedichiura.html">💅 Manichiură & Pedichiură</a>
          <a href="/coafor-extensii.html">✂️ Coafor & Extensii</a>
          <a href="/make-up.html">💄 Make-up</a>
          <a href="/sprancene.html">✨ Sprâncene</a>
          <a href="/epilare-definitiva.html">⚡ Epilare Definitivă</a>
          <a href="/pachete-beauty.html">🎀 Pachete Beauty</a>
        </div>
        <a href="/galerie.html" class="mobile-drawer__link">Galerie</a>
        <a href="/despre-noi.html" class="mobile-drawer__link">Despre Noi</a>
        <a href="/contact.html" class="mobile-drawer__link">Contact</a>
      </nav>
      <div class="mobile-drawer__cta">
        <a href="https://www.fresha.com/book-now/elysia-beauty-lounge-r38rgmme/all-offer?share=true&pId=2655167" target="_blank" rel="noopener" class="btn btn--gold" style="width:100%;">Programează-te</a>
      </div>
      <div class="mobile-drawer__contact">
        <p>📍 Bulevardul Unirii 63, București</p>
        <p>📞 <a href="tel:+40771580476">0771 580 476</a></p>
        <p>🕐 L–S: 10:00–20:00 · D: 11:00–17:00</p>
      </div>
    </div>
  </div>`;
}

function getFooterHTML() {
  return `
  <footer class="footer">
    <div class="container">
      <div class="footer__grid">
        <div class="footer__brand">
          <img src="/images/logo.webp" alt="Elysia Beauty Lounge" width="140" height="44">
          <p>Salon de înfrumusețare premium în zona Unirii: manichiură & pedichiură, coafor & extensii, make-up, sprâncene, epilare definitivă.</p>
        </div>
        <div>
          <h5>Servicii</h5>
          <div class="footer__links">
            <a href="/manichiura-pedichiura.html">Manichiură & Pedichiură</a>
            <a href="/coafor-extensii.html">Coafor & Extensii</a>
            <a href="/make-up.html">Make-up</a>
            <a href="/sprancene.html">Sprâncene</a>
            <a href="/epilare-definitiva.html">Epilare Definitivă</a>
            <a href="/pachete-beauty.html">Pachete Beauty</a>
          </div>
        </div>
        <div class="footer__contact">
          <h5>Contact</h5>
          <p>📞 <a href="tel:+40771580476">0771 580 476</a></p>
          <p>📍 Bulevardul Unirii 63, București, Sector 3</p>
          <p>🕐 L–S: 10:00–20:00 · D: 11:00–17:00</p>
        </div>
      </div>
      <div class="footer__anpc">
        <a href="https://anpc.ro/ce-este-sal/" target="_blank" rel="nofollow noopener"><img src="https://etamade-com.github.io/anpc-sal-sol-logo/anpc-sal.svg" alt="SAL" width="180" height="60"></a>
        <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="nofollow noopener"><img src="https://etamade-com.github.io/anpc-sal-sol-logo/anpc-sol.svg" alt="SOL" width="180" height="60"></a>
      </div>
      <div class="footer__bottom">
        <p>© <span data-year></span> elysiabeautylounge.ro — Toate drepturile rezervate.</p>
        <p><a href="https://anpc.ro/" target="_blank" rel="noopener">ANPC</a> · <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener">Platforma SOL</a></p>
      </div>
    </div>
  </footer>`;
}
