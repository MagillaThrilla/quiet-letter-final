(() => {
  "use strict";

  const image = document.querySelector(".retirement-image");

  if (!image) {
    return;
  }

  image.addEventListener("error", () => {
    console.error(
      "Website 2 background image was not found. " +
      "Place the finished image at assets/final-background.jpg"
    );
  });
})();

// Local placeholders are intentionally usable without invented destinations.
// Actual external URLs bypass this handler automatically.
document.querySelectorAll('.keepsake-link').forEach((link) => {
  link.addEventListener('click', (event) => {
    const href = link.getAttribute('href');
    if (!href || !href.startsWith('#')) return;
    const notice = document.getElementById(href.slice(1));
    if (notice && typeof notice.showModal === 'function') {
      event.preventDefault();
      notice.showModal();
    }
  });
});

// Assigning href strings does not request their destinations.
const settings = window.QUIET_LETTER_SETTINGS;
if (settings) {
  document.querySelector('.song-link').setAttribute('href', settings.SONG_URL);
  document.querySelector('.pinterest-link').setAttribute('href', settings.PINTEREST_URL);
}
// Reserve the actual footer height, including wrapped text and safe areas.
const footer = document.querySelector('.keepsake-footer');
const reserveFooterSpace = () => {
  document.documentElement.style.setProperty('--footer-height', `${footer.getBoundingClientRect().height}px`);
};
reserveFooterSpace();
if ('ResizeObserver' in window) new ResizeObserver(reserveFooterSpace).observe(footer);
window.addEventListener('resize', reserveFooterSpace);
