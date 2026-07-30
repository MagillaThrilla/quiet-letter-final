const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const scene = document.getElementById("scene");
const blackout = document.getElementById("blackout");
const button = document.getElementById("musicButton");

const lines = [...document.querySelectorAll(".line")];
const signature = document.querySelector(".signature");
const daniel = document.querySelector(".daniel");
const angela = document.querySelector(".angela");
const infinity = document.querySelector(".infinity");

let openingComplete = false;
let endingStarted = false;

async function playOpening() {
  button.disabled = true;

  await sleep(650);
  blackout.classList.add("open");
  scene.classList.add("is-room-visible");

  await sleep(2300);
  scene.classList.add("is-paper-visible");

  await sleep(2200);
  for (const line of lines) {
    line.classList.add("visible");
    await sleep(1650);
  }

  await sleep(900);
  signature.classList.add("visible");

  await sleep(1000);
  daniel.classList.add("visible");

  await sleep(900);
  angela.classList.add("visible");

  await sleep(950);
  infinity.classList.add("visible");

  await sleep(1050);
  button.classList.add("visible");

  scene.classList.add("is-holding");
  openingComplete = true;
  button.disabled = false;
}

async function playEnding(event) {
  event.preventDefault();
  event.stopPropagation();

  if (!openingComplete || endingStarted) return;

  endingStarted = true;
  button.disabled = true;
  scene.classList.remove("is-holding");

  button.classList.add("pressed");
  await sleep(420);
  button.classList.remove("visible");

  await sleep(900);
  infinity.classList.remove("visible");

  await sleep(900);
  daniel.classList.remove("visible");
  angela.classList.remove("visible");

  await sleep(1000);
  signature.classList.remove("visible");

  await sleep(900);
  for (const line of [...lines].reverse()) {
    line.classList.remove("visible");
    await sleep(350);
  }

  await sleep(1100);
  scene.classList.remove("is-paper-visible");

  await sleep(2100);
  scene.classList.remove("is-room-visible");

  await sleep(900);
  blackout.classList.remove("open");
  blackout.classList.add("close");

  await sleep(2900);
  window.location.assign("https://m.youtube.com/watch?v=UCqQ0itHl1A");
}

button.addEventListener("click", playEnding, { passive: false });
window.addEventListener("load", playOpening, { once: true });
