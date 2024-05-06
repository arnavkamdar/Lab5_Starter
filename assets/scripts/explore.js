// explore.js

window.addEventListener('DOMContentLoaded', init);
const voiceSelect = document.querySelector("select");
const input = document.getElementById("text-to-speak");
let currentInput = "";
let voices = [];
const button = document.querySelector("button");
const synth = window.speechSynthesis;

function init() {
  function populateVoiceList() {
    voices = synth.getVoices();
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }
  input.addEventListener("change", updateValue);
  function updateValue(e) {
    currentInput = e.target.value;
  }
  button.addEventListener("click", (event) => {
    event.preventDefault();
    const utterThis = new SpeechSynthesisUtterance(currentInput);
    const selectedOption =
      voiceSelect.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }
    const image = document.querySelector("img");
    synth.speak(utterThis);

    function changeImageWhileSpeaking(){
      if (synth.speaking == true) {
        image.src = "assets/images/smiling-open.png";
        setTimeout(changeImageWhileSpeaking, 500);
      }
      else {
        image.src = "assets/images/smiling.png";
      }
    }
    
    changeImageWhileSpeaking();
  });
}