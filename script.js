const video = document.querySelector("video");
const videoContainer = document.querySelector(".video-container");

const playPauseBtn = document.querySelector(".play-pause-btn");

// play/ pause 
playPauseBtn.addEventListener("click", togglePlayPause);

function togglePlayPause(){
    video.paused ? video.play() : video.pause()
}

video.addEventListener("play", () => {
    videoContainer.classList.remove("paused")
})
video.addEventListener("pause", () => {
    videoContainer.classList.add("paused")
})
videoContainer.addEventListener("click", togglePlayPause)

// keydown 
