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
}