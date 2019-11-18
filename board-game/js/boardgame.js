function checkTokens() {
    let player1 = localStorage.getItem(localStorage.key(0));
    let player2 = localStorage.getItem(localStorage.key(1));

    const tokens = ['../images/arryn-badge.png', '../images/baratheon-badge.png', '../images/clegane-badge.png', '../images/greyjoy-badge.png', '../images/lannister-badge.png', '../images/martell-badge.png', '../images/mormont-badge.png', '../images/stark-badge.png', '../images/targaryen-badge.png', '../images/tyrell-badge.png'];

    const characters = ['Robert Arryn', 'Tommen Baratheon', 'Sandor Clegane', 'Theon Greyjoy', 'Tyrion Lannister', 'Oberyn Nymeros Martell', 'Lyra Mormont', 'Arya Stark', 'Daenerys Targaryen', 'Margaery Tyrell']

    for (i = 0; i < characters.length; i++) {
        if (localStorage.getItem('player1') == characters[i]) {
            console.log('Player 1\'s character is ' + player1);
            document.getElementById('token1').src = tokens[i];
            document.getElementById('player1Name').innerHTML += `${characters[i]}`
        }
    }

    for (i = 0; i < characters.length; i++) {
        if (localStorage.getItem('player2') == characters[i]) {
            console.log('Player 2\'s character is ' + player2);
            document.getElementById('token2').src = tokens[i];
            document.getElementById('player2Name').innerHTML += `${characters[i]}`
        }
    }
}

checkTokens();

function roll() {
    let dice = Math.floor(Math.random() * 6) + 1;
    console.log(dice);
    let boardDice = document.getElementById('diceImg');
    let diceImg = ['../images/dice-1.svg', '../images/dice-2.svg', '../images/dice-3.svg', '../images/dice-4.svg', '../images/dice-5.svg', '../images/dice-6.svg']
    for (i = 0; i < dice; i++) {
        boardDice.src = diceImg[i];
    }

    if (dice == 6) {
        console.log('you get an extra turn!');
    }
}

function path() {
    let path = document.getElementById('board').children;
    pathArray = Array.prototype.slice.call(path);
    console.log(path);
    let boardGame = document.querySelectorAll('*[id^="n"]');
    console.log(boardGame);
    let sortPath = [].slice.call(boardGame).sort(function (a, b) {
        return a.id > b.id ? 1 : b.id > a.id ? -1 : 0; // <3 I DID IT OMG
    });
    sortPath.forEach(function (boardGame) {
        console.log(boardGame);
    });
}

path();


