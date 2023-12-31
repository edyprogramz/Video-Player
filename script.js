const video = document.querySelector("video");
const videoContainer = document.querySelector(".video-container");

const playPauseBtn = document.querySelector(".play-pause-btn");
const theaterBtn = document.querySelector(".theater-btn");
const fullScreenBtn = document.querySelector(".full-screen-btn");
const miniPlayerBtn = document.querySelector(".mini-player-btn");

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
        case "f":
            fullscreenMode()
            break
        case "m":
            miniPlayerMode()
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
fullScreenBtn.addEventListener("click", fullscreenMode)

function fullscreenMode (){
    if (document.fullscreenElement == null){
        videoContainer.requestFullscreen()
    } else {
        document.exitFullscreen()
    }
}

document.addEventListener("fullscreenchange", () => {
    videoContainer.classList.toggle("full-screen")
})


// Mini-Player
miniPlayerBtn.addEventListener("click", miniPlayerMode)

function miniPlayerMode(){
    if(videoContainer.classList.contains("miniplay")){
        document.exitPictureInPicture()
    } else {
        video.requestPictureInPicture()
    }
}

video.addEventListener("enterpictureinpicture", () => {
    videoContainer.classList.add("miniplay")
})

video.addEventListener("leavepictureinpicture", () => {
    videoContainer.classList.remove("miniplay")
})