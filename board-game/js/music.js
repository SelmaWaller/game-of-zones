let music = document.getElementById("music");
music.volume = "0.15";

function toggleMusic() {
    return music.paused ? music.play() : music.pause();
}

function musicOn() {
    document.getElementById('musicIcon').src = '../images/sound.svg';
}
function musicOff() {
    document.getElementById('musicIcon').src = '../images/mute.svg';
}

document.getElementById('musicBtn').addEventListener('keyup', function (event) {
    let keys = [13, 32, 27];
    for (let i = 0; i <= keys.length; i++) {
        if (event.keyCode == keys[i]) {
            return music.paused ? music.play() : music.pause();
        }
    }
});