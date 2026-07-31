const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const experience = document.getElementById("experience");
const blackout = document.getElementById("blackout");
const songLink = document.getElementById("songLink");
const matchSound = document.getElementById("matchSound");

const covers = {
  salutation: document.querySelector(".cover-salutation"),
  paragraph1: document.querySelector(".cover-paragraph-1"),
  paragraph2: document.querySelector(".cover-paragraph-2"),
  paragraph3: document.querySelector(".cover-paragraph-3"),
  closing: document.querySelector(".cover-closing"),
  signature: document.querySelector(".cover-signature"),
  daniel: document.querySelector(".cover-daniel"),
  angela: document.querySelector(".cover-angela")
};

let openingComplete = false;
let endingStarted = false;

function reveal(cover) {
  cover.classList.add("revealed");
}

function conceal(cover) {
  cover.classList.remove("revealed");
}

function showDebugState(state) {
  blackout.classList.add("open");
  experience.classList.add("room-visible");

  if (state === "pre-angela") {
    experience.classList.add("reading");
    reveal(covers.salutation);
    reveal(covers.paragraph1);
    reveal(covers.paragraph2);
    reveal(covers.paragraph3);
    reveal(covers.closing);
    reveal(covers.signature);
    reveal(covers.daniel);
  }

  if (state === "final") {
    experience.classList.add("reading");

    Object.values(covers).forEach(reveal);

    songLink.classList.add("visible");
  }

  if (state === "rest-final") {
    Object.values(covers).forEach(reveal);
    songLink.classList.add("visible");
  }
}

async function playOpening() {
  const debugState = new URLSearchParams(window.location.search).get("state");

  if (debugState === "blank" || debugState === "pre-angela" || debugState === "final" || debugState === "rest-final") {
    showDebugState(debugState);
    return;
  }

  songLink.disabled = true;

  await sleep(650);

  try {
    matchSound.volume = 0.55;
    matchSound.play().catch(() => {});
  } catch (_) {}

  blackout.classList.add("open");
  experience.classList.add("room-visible");

  // Let the exact room and blank paper breathe before moving closer.
  await sleep(3800);

  experience.classList.add("reading");

  await sleep(2400);

  reveal(covers.salutation);
  await sleep(850);

  reveal(covers.paragraph1);
  await sleep(950);

  reveal(covers.paragraph2);
  await sleep(950);

  reveal(covers.paragraph3);
  await sleep(950);

  reveal(covers.closing);
  await sleep(800);

  reveal(covers.signature);
  await sleep(1050);

  reveal(covers.daniel);
  await sleep(1350);

  reveal(covers.angela);
  await sleep(1350);

  songLink.classList.add("visible");
  await sleep(850);
  songLink.disabled = false;

  openingComplete = true;
}

async function playEnding(event) {
  event.preventDefault();
  event.stopPropagation();

  if (!openingComplete || endingStarted) return;

  endingStarted = true;
  songLink.disabled = true;
  songLink.classList.add("pressed");

  await sleep(260);

  songLink.classList.remove("pressed");
  songLink.classList.remove("visible");

  // The larger handwritten song title disappears first.
  await sleep(650);

  // Back away gently—less zoom than the previous build.
  experience.classList.remove("reading");

  await sleep(2400);

  // Angela leaves first.
  conceal(covers.angela);
  await sleep(3200);

  // Daniel leaves afterward.
  conceal(covers.daniel);
  await sleep(3000);

  // Then the exact approved signature disappears.
  conceal(covers.signature);
  await sleep(1400);

  // Bottom-up text disappearance.
  conceal(covers.closing);
  await sleep(650);

  conceal(covers.paragraph3);
  await sleep(650);

  conceal(covers.paragraph2);
  await sleep(650);

  conceal(covers.paragraph1);
  await sleep(650);

  conceal(covers.salutation);

  // Hold on the exact blank photographed parchment.
  await sleep(1800);

  experience.classList.remove("room-visible");
  blackout.classList.remove("open");
  blackout.classList.add("close");

  await sleep(3100);

  // Universal YouTube link: app when supported, browser otherwise.
  window.location.assign("https://youtu.be/UCqQ0itHl1A");
}

window.addEventListener("load", playOpening, { once: true });
songLink.addEventListener("click", playEnding, { passive: false });
