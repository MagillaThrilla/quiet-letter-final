// EDIT ONLY THESE THREE SETTINGS. URLs are inert strings until a visitor clicks.
// Replace the placeholder with the complete YouTube video URL.
const SONG_URL = "https://youtu.be/2PrNmpT_aFE";
// Use the entire In His Time Pinterest BOARD URL, not an individual pin.
const PINTEREST_URL = "https://pin.it/2sNilN6Zz";
// true = both links; false = hide song and center Pinterest.
const SHOW_SONG_LINK = true;

// No destination is fetched, previewed, embedded, played, or preloaded here.
window.QUIET_LETTER_SETTINGS = Object.freeze({ SONG_URL, PINTEREST_URL, SHOW_SONG_LINK });
document.documentElement.dataset.showSong = String(SHOW_SONG_LINK);

