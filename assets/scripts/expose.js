// expose.js

window.addEventListener('DOMContentLoaded', init);
const jsConfetti = new JSConfetti()

function init() {
  const selectElement = document.querySelector("select");
  const image = document.querySelector("img");
  const audio = document.querySelector("audio");

  selectElement.addEventListener("change", (event) => {
    image.src = `assets/images/${event.target.value}.svg`;
    audio.src = `assets/audio/${event.target.value}.mp3`;
  });

  const button = document.querySelector("button");

  button.addEventListener("click", (event) => {
    let audio = document.querySelector("audio");
    audio.play();
    const selectElement = document.getElementById("horn-select");
    if (selectElement.value == "party-horn") {
      jsConfetti.addConfetti({
        confettiRadius: 10,
      })
    }
  });

  const volume = document.querySelector("input");
  const volumeImage = document.querySelector("div img");

  volume.addEventListener("input", (event) => {
    audio.volume = event.target.value / 100;
    if (event.target.value == 0) {
      volumeImage.src = "assets/icons/volume-level-0.svg";
    }
    else if (event.target.value < 33) {
      volumeImage.src = "assets/icons/volume-level-1.svg";
    }
    else if (event.target.value < 67) {
      volumeImage.src = "assets/icons/volume-level-2.svg";
    }
    else {
      volumeImage.src = "assets/icons/volume-level-3.svg";
    }
  });


}