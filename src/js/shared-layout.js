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
          <picture><source media="(max-width: 768px)" srcset="/images/logo-mobile.webp"><img src="/images/logo.webp" alt="Elysia Beauty Lounge" width="140" height="44"></picture>
          <p>Salon de înfrumusețare premium în zona Unirii: manichiură & pedichiură, coafor & extensii, make-up, sprâncene, epilare definitivă.</p>
        </div>
        <div>
          <p class="footer__title">Servicii</p>
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
          <p class="footer__title">Legal</p>
          <div class="footer__links">
            <a href="/politica-de-confidentialitate">Politica de Confidențialitate</a>
            <a href="/politica-cookie">Politica de Cookie-uri</a>
            <a href="/termeni-si-conditii">Termeni și Condiții</a>
            <div class="footer__legal-badges">
              <a href="https://anpc.ro/ce-este-sal/" target="_blank" rel="nofollow noopener"><img src="/images/anpc-sal.svg" alt="SAL" width="180" height="60"></a>
              <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="nofollow noopener"><img src="/images/anpc-sol.svg" alt="SOL" width="180" height="60"></a>
            </div>
          </div>
        </div>
        <div class="footer__contact">
          <p class="footer__title">Contact</p>
          <p><strong>Telefon:</strong> <a href="tel:+40771580476">0771 580 476</a></p>
          <p><strong>Adresă:</strong> Bulevardul Unirii 63, București, Sector 3</p>
          <p><strong>Program:</strong> L–S: 10:00–20:00 · D: 11:00–17:00</p>
        </div>
      </div>
      <div class="footer__bottom">
        <div class="footer__legal-info">
          <p>© 2025 ELYSIA BEAUTY LOUNGE SRL | CUI: 52231547 | Reg. Com: J2025056110006 | Sediu: Str. Odei 82, Sc. C, Et. 1, Ap. 2, Sector 4, București</p>
        </div>
        <div class="footer__attribution">
          <p><a href="https://upscaleinnovation.com/" target="_blank" rel="noopener">Powered by Upscale Innovation Group</a></p>
        </div>
      </div>
    </div>
  </footer>
  
  <!-- Floating WhatsApp Button -->
  <a onclick="dataLayer.push({'event': 'btn_whatsapp'});" href="https://wa.me/40771580476" class="floating-wa" target="_blank" rel="noopener" aria-label="Contactează-ne pe WhatsApp">
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
    </svg>
  </a>`;
}
