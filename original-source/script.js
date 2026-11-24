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
