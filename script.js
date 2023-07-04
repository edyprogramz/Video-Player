const video = document.querySelector("video");
const videoContainer = document.querySelector(".video-container");

const playPauseBtn = document.querySelector(".play-pause-btn");
const theaterBtn = document.querySelector(".theater-btn");

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
document.addEventListener("keydown", e => {
    switch (e.key.toLowerCase()) {
        case " ":
        case "p":
            togglePlayPause()
            break
        case "t":
            theaterMode()
            break
    }
})

// theater
theaterBtn.addEventListener("click", theaterMode)

function theaterMode () {
    if (videoContainer.classList.contains("theater")){
        videoContainer.classList.remove("theater")
    } else {
        videoContainer.classList.add("theater")
    }
}

// fullscreen 