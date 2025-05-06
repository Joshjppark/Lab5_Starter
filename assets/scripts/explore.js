// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const textbox = document.querySelector('textarea');
  const button = document.querySelector('button');
  const select = document.getElementById('voice-select');
  const face = document.querySelector('#explore img');

  const jarvis = window.speechSynthesis;
  let voices = [];

  function populateVoiceList() {
    voices = jarvis.getVoices();
  
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }
  
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      select.appendChild(option);
    }
  }
  populateVoiceList();

  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  button.addEventListener('click', () => {
    const speaker = new SpeechSynthesisUtterance(textbox.value);
    const selectedOption =
      select.selectedOptions[0].getAttribute("data-name");
    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        speaker.voice = voices[i];
      }
    }

    speaker.onstart = () => {
      face.src = "assets/images/smiling-open.png";
    };
  

    speaker.onend = () => {
      face.src = "assets/images/smiling.png";
    };

    jarvis.speak(speaker);
  });
}