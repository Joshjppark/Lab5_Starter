// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const horn = document.getElementById('horn-select');
  const volume_slider = document.querySelector("[type='range']");
  const volume_icon = document.querySelector('#volume-controls img');
  const horn_image = document.querySelector('#expose img');
  const play_button = document.querySelector('button');
  const audio_type = document.querySelector('audio');

  const jsConfetti = new JSConfetti();

  horn.addEventListener('change', () => {
    let horn_type = horn.value;
  
    if (horn_type === 'air-horn') {
      horn_image.src = 'assets/images/air-horn.svg';
      audio_type.src = 'assets/audio/air-horn.mp3';
    } else if (horn_type === 'car-horn') {
      horn_image.src = 'assets/images/car-horn.svg';
      audio_type.src = 'assets/audio/car-horn.mp3';
    } else if (horn_type === 'party-horn') {
      horn_image.src = 'assets/images/party-horn.svg';
      audio_type.src = 'assets/audio/party-horn.mp3';
    }
  });

  volume_slider.addEventListener('input', () => {
    let volume = parseInt(volume_slider.value);
    audio_type.volume = volume / 100;

    if (volume === 0) {
      volume_icon.src = 'assets/icons/volume-level-0.svg';
    } else if (volume < 33) {
      volume_icon.src = 'assets/icons/volume-level-1.svg';
    } else if (volume < 67) {
      volume_icon.src = 'assets/icons/volume-level-2.svg';
    } else {
      volume_icon.src = 'assets/icons/volume-level-3.svg';
    }
  });

  play_button.addEventListener('click', () => {
    if (audio_type.src) {
      audio_type.play();
      if (horn.value === 'party-horn') {
        jsConfetti.addConfetti();
      }
    }
  });
}