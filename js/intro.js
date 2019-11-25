function intro() {
    document.getElementById('intro').style.display = 'none';
    document.getElementById('main').style.display = 'block';
    localStorage.removeItem('player1position');
    localStorage.removeItem('player2position');
    localStorage.removeItem('player1');
    localStorage.removeItem('player2');
    localStorage.removeItem('winner');
    localStorage.setItem('activePlayer', '1');
}

let hideIntro = document.getElementById('start').addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        document.getElementById('intro').style.display = 'none';
        document.getElementById('main').style.display = 'block';
    }
});