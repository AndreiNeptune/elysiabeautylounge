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
              <a href="/manichiura-pedichiura" class="mega-menu__item">
                <div class="mega-menu__text"><h4>Manichiură & Pedichiură</h4><p>Semi, gel, clasic, SPA, japoneză</p></div>
              </a>
              <a href="/coafor-extensii" class="mega-menu__item">
                <div class="mega-menu__text"><h4>Coafor & Extensii</h4><p>Tuns, coafat, vopsit, extensii</p></div>
              </a>
              <a href="/make-up" class="mega-menu__item">
                <div class="mega-menu__text"><h4>Make-up</h4><p>Machiaj de zi și seară</p></div>
              </a>
              <a href="/sprancene" class="mega-menu__item">
                <div class="mega-menu__text"><h4>Sprâncene</h4><p>Laminare, stilizare, vopsit</p></div>
              </a>
              <a href="/epilare-definitiva" class="mega-menu__item">
                <div class="mega-menu__text"><h4>Epilare Definitivă</h4><p>Full Body de la 249 lei</p></div>
              </a>
              <a href="/pachete-beauty" class="mega-menu__item">
                <div class="mega-menu__text"><h4>Pachete Beauty</h4><p>Combinații avantajoase</p></div>
              </a>
            </div>
          </div>
          <a href="/galerie" class="navbar__link">Galerie</a>
          <a href="/despre-noi" class="navbar__link">Despre Noi</a>
          <a href="/contact" class="navbar__link">Contact</a>
        </div>
        <div class="navbar__cta">
          <a href="https://www.fresha.com/book-now/elysia-beauty-lounge-r38rgmme/all-offer?share=true&pId=2655167" target="_blank" rel="noopener" class="btn btn--gold">Programează-te</a>
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
          <a href="/manichiura-pedichiura">Manichiură & Pedichiură</a>
          <a href="/coafor-extensii">Coafor & Extensii</a>
          <a href="/make-up">Make-up</a>
          <a href="/sprancene">Sprâncene</a>
          <a href="/epilare-definitiva">Epilare Definitivă</a>
          <a href="/pachete-beauty">Pachete Beauty</a>
        </div>
        <a href="/galerie" class="mobile-drawer__link">Galerie</a>
        <a href="/despre-noi" class="mobile-drawer__link">Despre Noi</a>
        <a href="/contact" class="mobile-drawer__link">Contact</a>
      </nav>
      <div class="mobile-drawer__cta">
        <a href="https://www.fresha.com/book-now/elysia-beauty-lounge-r38rgmme/all-offer?share=true&pId=2655167" target="_blank" rel="noopener" class="btn btn--gold" style="width:100%;">Programează-te</a>
      </div>
      <div class="mobile-drawer__contact">
        <p><strong>Adresă:</strong> Bulevardul Unirii 63, București</p>
        <p><strong>Telefon:</strong> <a href="tel:+40771580476">0771 580 476</a></p>
        <p><strong>Program:</strong> L–S: 10:00–20:00 · D: 11:00–17:00</p>
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
          <h4>Servicii</h4>
          <div class="footer__links">
            <a href="/manichiura-pedichiura">Manichiură & Pedichiură</a>
            <a href="/coafor-extensii">Coafor & Extensii</a>
            <a href="/make-up">Make-up</a>
            <a href="/sprancene">Sprâncene</a>
            <a href="/epilare-definitiva">Epilare Definitivă</a>
            <a href="/pachete-beauty">Pachete Beauty</a>
          </div>
        </div>
        <div>
          <h4>Legal</h4>
          <div class="footer__links">
            <a href="/politica-de-confidentialitate">Politica de Confidențialitate</a>
            <a href="/termeni-si-conditii">Termeni și Condiții</a>
            <div class="footer__legal-badges">
              <a href="https://anpc.ro/ce-este-sal/" target="_blank" rel="nofollow noopener"><img src="https://etamade-com.github.io/anpc-sal-sol-logo/anpc-sal.svg" alt="SAL" width="180" height="60"></a>
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="nofollow noopener"><img src="https://etamade-com.github.io/anpc-sal-sol-logo/anpc-sol.svg" alt="SOL" width="180" height="60"></a>
            </div>
          </div>
        </div>
        <div class="footer__contact">
          <h4>Contact</h4>
          <p><strong>Telefon:</strong> <a href="tel:+40771580476">0771 580 476</a></p>
          <p><strong>Adresă:</strong> Bulevardul Unirii 63, București, Sector 3</p>
          <p><strong>Program:</strong> L–S: 10:00–20:00 · D: 11:00–17:00</p>
        </div>
      </div>
      <div class="footer__bottom">
        <div class="footer__legal-info">
          <p style="opacity: 0.7;">© 2025 ELYSIA BEAUTY LOUNGE SRL | CUI: 52231547 | Reg. Com: J2025056110006 | Sediu: Str. Odei 82, Sc. C, Et. 1, Ap. 2, Sector 4, București</p>
        </div>
        <div class="footer__attribution">
          <p><a href="https://upscaleinnovation.com/" target="_blank" rel="noopener" style="opacity: 0.8;">Powered by Upscale Innovation Group</a></p>
        </div>
      </div>
    </div>
  </footer>`;
}
