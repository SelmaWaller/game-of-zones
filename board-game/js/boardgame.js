function checkTokens() {
    let player1 = localStorage.getItem('player1');
    let player2 = localStorage.getItem('player2');

    const tokens = ['../images/arryn-badge.png', '../images/baratheon-badge.png', '../images/clegane-badge.png', '../images/greyjoy-badge.png', '../images/lannister-badge.png', '../images/martell-badge.png', '../images/mormont-badge.png', '../images/stark-badge.png', '../images/targaryen-badge.png', '../images/tyrell-badge.png'];

    const characters = ['Robert Arryn', 'Tommen Baratheon', 'Sandor Clegane', 'Theon Greyjoy', 'Tyrion Lannister', 'Oberyn Nymeros Martell', 'Lyra Mormont', 'Arya Stark', 'Daenerys Targaryen', 'Margaery Tyrell']

    for (let i = 0; i < characters.length; i++) {
        if (localStorage.getItem('player1') == characters[i]) {
            console.log('Player 1 as ' + player1);
            document.getElementById('token1').src = tokens[i];
            document.getElementById('player1Name').innerHTML += `${characters[i]}`
        }
    }

    for (let i = 0; i < characters.length; i++) {
        if (localStorage.getItem('player2') == characters[i]) {
            console.log('Player 2 as ' + player2);
            document.getElementById('token2').src = tokens[i];
            document.getElementById('player2Name').innerHTML += `${characters[i]}`
        }
    }
}

checkTokens();

function movePlayer(tileId, playerId) {
    const player = document.getElementById(playerId);
    const toElement = document.getElementById(tileId);

    player.style.top = `${toElement.offsetTop}px`;
    player.style.left = `${toElement.offsetLeft}px`;
}


function roll() {
    const activePlayer = localStorage.getItem('activePlayer') || '1';
    const playerPosition = localStorage.getItem(`player${activePlayer}position`) || 0;

    console.log(localStorage.getItem(`player${activePlayer}`) + '\'s position: ' + playerPosition)
    let dice = Math.floor(Math.random() * 6) + 1;
    console.log(dice);
    let boardDice = document.getElementById('diceImg');
    let diceImg = ['../images/dice-1.svg', '../images/dice-2.svg', '../images/dice-3.svg', '../images/dice-4.svg', '../images/dice-5.svg', '../images/dice-6.svg'];
    for (let i = 0; i < dice; i++) {
        boardDice.src = diceImg[i];
    }

    const newPosition = Math.min(parseInt(playerPosition, 10) + dice, 30);

    movePlayer(`tile${newPosition}`, `token${activePlayer}holder`);

    localStorage.setItem(`player${activePlayer}position`, newPosition);
    localStorage.setItem('activePlayer', activePlayer === '1' ? '2' : '1');

    if (localStorage.getItem(`player${activePlayer}`) && dice == 6) {
        localStorage.setItem('activePlayer', activePlayer === '1' ? '1' : '2');
        localStorage.setItem('activePlayer', activePlayer === '2' ? '2' : '1');
        setTimeout(function () {
            alert('Adrenaline rushes through ' + localStorage.getItem(`player${activePlayer}`) + ' like a hurricane! No time for breaks, roll again!');
        }, 300);
    }
    if (localStorage.getItem(`player${activePlayer}position`) === '5') {
        localStorage.setItem(`player${activePlayer}position`, '8');
        const playerNPosition = localStorage.getItem(`player${activePlayer}position`) || 0;
        setTimeout(function () {
            movePlayer(`tile${playerNPosition}`, `token${activePlayer}holder`);
            alert(localStorage.getItem(`player${activePlayer}`) + ' found a shortcut!');
        }, 300);
    }
    if (localStorage.getItem(`player${activePlayer}position`) === '7') {
        localStorage.setItem(`player${activePlayer}position`, '6');
        const playerNPosition = localStorage.getItem(`player${activePlayer}position`) || 0;
        setTimeout(function () {
            movePlayer(`tile${playerNPosition}`, `token${activePlayer}holder`);
            alert('Woah there! ' + localStorage.getItem(`player${activePlayer}`) + ' just ran their left foot shoe off! You\'ll need that shoe, ' + localStorage.getItem(`player${activePlayer}`) + '. Go back one step and pick it up.');
        }, 300);
    }
    if (localStorage.getItem(`player${activePlayer}position`) === '16') {
        localStorage.setItem(`player${activePlayer}position`, '19');
        const playerNPosition = localStorage.getItem(`player${activePlayer}position`) || 0;
        setTimeout(function () {
            movePlayer(`tile${playerNPosition}`, `token${activePlayer}holder`);
            alert(localStorage.getItem(`player${activePlayer}`) + ' found a shortcut!');
        }, 300);
    }
    if (localStorage.getItem(`player${activePlayer}position`) === '23') {
        localStorage.setItem(`player${activePlayer}position`, '17');
        const playerNPosition = localStorage.getItem(`player${activePlayer}position`) || 0;
        setTimeout(function () {
            movePlayer(`tile${playerNPosition}`, `token${activePlayer}holder`);
            alert('Oh no! ' + localStorage.getItem(`player${activePlayer}`) + ' just relized they\'ve lost their right foot shoe all the way back in The Reach! Take 6 sad steps back and learn to tie your shoes.');
        }, 300);
    }
    if (localStorage.getItem(`player${activePlayer}position`) === '29') {
        localStorage.setItem(`player${activePlayer}position`, '22');
        const playerNPosition = localStorage.getItem(`player${activePlayer}position`) || 0;
        setTimeout(function () {
            movePlayer(`tile${playerNPosition}`, `token${activePlayer}holder`);
            alert('AAAH! Rhaegal snatched ' + localStorage.getItem(`player${activePlayer}`) + ' out of nowhere and dropped them all the way back in the Riverlands! That stings.');
        }, 300);
    }
    if (localStorage.getItem(`player${activePlayer}position`) === '30') {
        let winnerAnimation = document.getElementById('winnerOverlay');
        winnerAnimation.style.display = 'block';
        localStorage.setItem('winner', localStorage.getItem(`player${activePlayer}`));
        setTimeout(function () {
            window.location = '../play-again/index.html';
        }, 1000);
    }
}

function setBoard() {
    const player1Position = localStorage.getItem('player1position') || 0;
    const player2Position = localStorage.getItem('player2position') || 0;
    movePlayer(`tile${player1Position}`, 'token1holder');
    movePlayer(`tile${player2Position}`, 'token2holder');
}

function playAgain() {
    localStorage.removeItem('player1position');
    localStorage.removeItem('player2position');
    movePlayer('tile0', 'token1holder');
    movePlayer('tile0', 'token2holder');
    localStorage.setItem('activePlayer', '1');
}

setBoard();

