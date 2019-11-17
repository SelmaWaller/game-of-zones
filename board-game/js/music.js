let music = document.getElementById("music");
music.volume = "0.15"

// pause music on click
function toggleMusic() {
    return music.paused ? music.play() : music.pause();
};

function musicOn() {
    document.getElementById('musicIcon').src = '../images/sound.svg';
}
function musicOff() {
    document.getElementById('musicIcon').src = '../images/mute.svg';
}

//pause music on Enter
let musicBtn = document.getElementById('musicBtn').addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        return music.paused ? music.play() : music.pause();
    }
});