const video = document.getElementById("promo-video");

const muteBtn = document.getElementById("mute-toggle");
const muteIcon = muteBtn.querySelector("i");
muteBtn.addEventListener("click", () => {
    video.muted = !video.muted;
    if (video.muted) {
        muteIcon.classList.replace("fa-volume-up", "fa-volume-mute");
    } else {
        muteIcon.classList.replace("fa-volume-mute", "fa-volume-up");
        video.play();
    }
});

const playPauseBtn = document.getElementById("play-pause-toggle");
const playPauseIcon = playPauseBtn.querySelector("i");
playPauseBtn.addEventListener("click", () => {
    if (video.paused) {
        video.play();
        playPauseIcon.classList.replace("fa-play", "fa-pause");
    } else {
        video.pause();
        playPauseIcon.classList.replace("fa-pause", "fa-play");
    }
});
