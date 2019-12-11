import tiles from './tiles.js';
import move from './movePlayers.js';
import playerstyles from './playerstyles.js';

async function roll() {
    let popupTrap = document.getElementById('popup');
    let message = document.getElementById('popupText');
    let popupDice6 = document.getElementById('popupDice6');
    let messageDice6 = document.getElementById('popupTextDice6');

    playerstyles.setTokens();

    const diceBtn = document.getElementById('dice');
    diceBtn.disabled = true;
    const activePlayer = localStorage.getItem('activePlayer') || '1';
    const playerPosition = localStorage.getItem(`player${activePlayer}position`) || 0;

    localStorage.setItem(`diceCounter${activePlayer}`, Number(localStorage.getItem(`diceCounter${activePlayer}`)) + 1);
    document.getElementById(`diceCounter${activePlayer}`).innerHTML = 'Rolls: ' + localStorage.getItem(`diceCounter${activePlayer}`);

    document.getElementById('playersTurn').innerHTML = localStorage.getItem(`player${activePlayer}`) + ' rolled';

    let dice = Math.floor(Math.random() * 6) + 1;

    let boardDice = document.getElementById('diceImg');
    let diceImg = ['../images/dice-1.svg', '../images/dice-2.svg', '../images/dice-3.svg', '../images/dice-4.svg', '../images/dice-5.svg', '../images/dice-6.svg'];

    for (let i = 0; i < dice; i++) {
        boardDice.src = diceImg[i];
    }

    const newPosition = Math.min(parseInt(playerPosition, 10) + dice, 30);
    const tile = tiles[newPosition - 1];
    await move.player(newPosition, activePlayer);
    localStorage.setItem('activePlayer', activePlayer === '1' ? '2' : '1');

    if (newPosition == 30) {
        let winnerAnimation = document.getElementById('winnerOverlay');
        winnerAnimation.style.background = 'rgba(0, 0, 0, 1)';
        localStorage.setItem('winner', localStorage.getItem(`player${activePlayer}`));
        setTimeout(function () {
            window.location = '../play-again/index.html';
        }, 1000);
        return
    }


    diceBtn.disabled = false;

    if (activePlayer === '1') {
        playerstyles.p1style2();
        playerstyles.p2style1();
    }
    if (activePlayer === '2') {
        playerstyles.p1style1();
        playerstyles.p2style2();
    }

    if (dice == 6) {
        localStorage.setItem('activePlayer', activePlayer === '1' ? '1' : '2');
        popupDice6.style.display = 'flex';
        messageDice6.innerHTML = 'Adrenaline rushes through ' + localStorage.getItem(`player${activePlayer}`) + ' like a hurricane! No time for breaks, roll again!';
        if (activePlayer === '1') {
            playerstyles.p1style1();
            playerstyles.p2style2();
        }
        if (activePlayer === '2') {
            playerstyles.p1style2();
            playerstyles.p2style1();
        }
    }

    if (tile.moveTo) {
        const characterName = localStorage.getItem(`player${activePlayer}`);
        popupTrap.style.display = 'flex';
        message.innerHTML = tile.alertMessage(characterName);
        move.player(tile.moveTo, activePlayer);
    }
}

function setBoard() {
    const player1Position = localStorage.getItem('player1position') || 0;
    const player2Position = localStorage.getItem('player2position') || 0;
    const player1 = document.getElementById('token1holder');
    const player2 = document.getElementById('token2holder');
    move.token(player1Position, player1);
    move.token(player2Position, player2);
}

setBoard();

window.onload = function () {
    localStorage.setItem('player1position', 0);
    localStorage.setItem('player2position', 0);
    localStorage.removeItem('diceCounter1');
    localStorage.removeItem('diceCounter2');
    const player1Position = localStorage.getItem('player1position') || 0;
    const player2Position = localStorage.getItem('player2position') || 0;
    const player1 = document.getElementById('token1holder');
    const player2 = document.getElementById('token2holder');
    move.token(player1Position, player1);
    move.token(player2Position, player2);
    localStorage.setItem('activePlayer', '1');
    window.roll = roll;
}