// expose.js

window.addEventListener('DOMContentLoaded', init);
const jsConfetti = new JSConfetti()
function init() {
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