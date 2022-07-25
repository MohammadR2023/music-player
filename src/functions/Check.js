let isPlaying = false;

// Play
function playSong() {
    isPlaying = true;
    const playBtn = document.querySelector("#play");
    const music = document.querySelector("audio");
    playBtn.classList.replace("fa-play", "fa-pause");
    playBtn.setAttribute("title", "Pause");
    music.play();
}

// Pause
function pauseSong() {
    const playBtn = document.querySelector("#play");
    const music = document.querySelector("audio");
    isPlaying = false;
    playBtn.classList.replace("fa-pause", "fa-play");
    playBtn.setAttribute("title", "Play");
    music.pause();
}

// Play or Pause Event Listener
function check() {
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
}

export default check;