function intro() {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('main').style.display = 'block';
}

let hideIntro = document.getElementById('start').addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        document.getElementById('intro').style.display = 'none';
        document.getElementById('main').style.display = 'block';
    }
});