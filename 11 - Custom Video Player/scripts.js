// Get our elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.getElementsByClassName('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.getElementsByClassName('player__slider');

// Build our functions
function togglePlay() {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}

function toggleButton() {
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
}

function skip() {
    console.log(this.dataset.skip);
    video.currentTime += parseInt(this.dataset.skip);
}

// Hook up the event listeners
video.addEventListener('click', togglePlay);
video.addEventListener('play', toggleButton);
video.addEventListener('pause', toggleButton);

toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));