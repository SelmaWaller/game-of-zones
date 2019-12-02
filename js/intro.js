function intro() {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('main').style.display = 'block';
    document.getElementById('logo').style.display = 'block';
}

document.getElementById('start').addEventListener('keyup', function (event) {
    let keys = [13, 32, 27];
    for (let i = 0; i <= keys.length; i++) {
        if (event.keyCode == keys[i]) {
            document.getElementById('intro').style.display = 'none';
            document.getElementById('main').style.display = 'block';
            document.getElementById('logo').style.display = 'block';
        }
    }
});