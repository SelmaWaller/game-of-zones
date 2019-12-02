function movePlayerToken(destination, player) {
    const toElement = document.getElementById(`tile${destination}`);
    player.style.top = `${toElement.offsetTop}px`;
    player.style.left = `${toElement.offsetLeft}px`;
}

async function movePlayer(destination, activePlayer) {

    return new Promise(function (resolve) {
        const player = document.getElementById(`token${activePlayer}holder`);
        let currentPosition = parseInt(localStorage.getItem(`player${activePlayer}position`) || 0, 10);
        let tilesToMove = destination - currentPosition;

        if (tilesToMove > 0) {
            for (let i = 1; i <= tilesToMove; i++) {
                setTimeout(function () {
                    movePlayerToken(currentPosition + i, player);
                    if (activePlayer == 1) {
                        document.getElementById('statsPosition1').innerHTML = (currentPosition + i) + '/30';
                    }
                    if (activePlayer == 2) {
                        document.getElementById('statsPosition2').innerHTML = (currentPosition + i) + '/30';
                    }
                    if (i === tilesToMove) {
                        setTimeout(resolve, 200);  // Resolve after transitions
                    }
                }, 200 * i);
            }
        } else {
            for (let i = -1; i >= tilesToMove; i--) {
                setTimeout(function () {
                    movePlayerToken(currentPosition + i, player);
                    if (activePlayer == 1) {
                        document.getElementById('statsPosition1').innerHTML = (currentPosition + i) + '/30';
                    }
                    if (activePlayer == 2) {
                        document.getElementById('statsPosition2').innerHTML = (currentPosition + i) + '/30';
                    }
                    if (i === tilesToMove) {
                        setTimeout(resolve, 200);  // Resolve after transitions
                    }
                }, 200 * i * -1);
            }
        }

        localStorage.setItem(`player${activePlayer}position`, destination);
    })
}

async function roll() {


    document.getElementById('token1').style = 'margin: 0';
    setTimeout(function () {
        document.getElementById('token2').style = 'margin: 0';
    }, 200);

    const diceBtn = document.getElementById('dice');
    diceBtn.disabled = true;
    const activePlayer = localStorage.getItem('activePlayer') || '1';
    const playerPosition = localStorage.getItem(`player${activePlayer}position`) || 0;

    localStorage.setItem(`dieCounter${activePlayer}`, Number(localStorage.getItem(`dieCounter${activePlayer}`)) + 1);
    if (Number(localStorage.getItem(`dieCounter${activePlayer}`)) == 1) {
        document.getElementById(`dieCounter${activePlayer}`).innerHTML = (localStorage.getItem(`dieCounter${activePlayer}`) + (' roll'));
    } else {
        document.getElementById(`dieCounter${activePlayer}`).innerHTML = (localStorage.getItem(`dieCounter${activePlayer}`) + (' rolls'));
    }

    document.getElementById('playersTurn').innerHTML = localStorage.getItem(`player${activePlayer}`) + ' rolled';

    let dice = Math.floor(Math.random() * 6) + 1;
    console.log(localStorage.getItem(`player${activePlayer}`) + '\'s position: ' + (Number(playerPosition) + Number(dice)) + '/30');

    let boardDice = document.getElementById('diceImg');
    let diceImg = ['../images/dice-1.svg', '../images/dice-2.svg', '../images/dice-3.svg', '../images/dice-4.svg', '../images/dice-5.svg', '../images/dice-6.svg'];

    for (let i = 0; i < dice; i++) {
        boardDice.src = diceImg[i];
    }

    const newPosition = Math.min(parseInt(playerPosition, 10) + dice, 30);
    await movePlayer(newPosition, activePlayer);

    if (newPosition == 30) {
        let winnerAnimation = document.getElementById('winnerOverlay');
        winnerAnimation.style.background = 'rgba(0, 0, 0, 1)';
        localStorage.setItem('winner', localStorage.getItem(`player${activePlayer}`));
        setTimeout(function () {
            window.location = '../play-again/index.html';
        }, 1000);
        return
    }

    function tileScript() {
        document.getElementById('tileScript');
    } //fetching tiles from external script
    tileScript();

    const tile = tiles[newPosition - 1];
    if (tile.moveTo) {
        const characterName = localStorage.getItem(`player${activePlayer}`);
        alert(tile.alertMessage(characterName));
        await movePlayer(tile.moveTo, activePlayer);
    }

    localStorage.setItem('activePlayer', activePlayer === '1' ? '2' : '1');
    diceBtn.disabled = false;

    let player1Stats = document.getElementById('player1Stats');
    let player2Stats = document.getElementById('player2Stats');
    if (activePlayer === '1') {
        player2Stats.style = 'opacity: 1; box-shadow: -4px 4px 10px -6px #63636366; background: #00000080;';
        player1Stats.style = 'opacity: 0.4; box-shadow: inset -4px -4px 10px -6px #63636333; background: #00000099;';
    }
    if (activePlayer === '2') {
        player1Stats.style = 'opacity: 1; box-shadow: 4px 4px 10px -6px #63636366; background: #00000080;';
        player2Stats.style = 'opacity: 0.4; box-shadow: inset 4px -4px 10px -6px #63636333; background: #00000099;';
    }

    if (dice == 6) {
        localStorage.setItem('activePlayer', activePlayer === '1' ? '1' : '2');
        alert('Adrenaline rushes through ' + localStorage.getItem(`player${activePlayer}`) + ' like a hurricane! No time for breaks, roll again!');
        if (activePlayer === '1') {
            player1Stats.style = 'opacity: 1; box-shadow: 4px 4px 10px -6px #63636366; background: #00000080;';
            player2Stats.style = 'opacity: 0.4; box-shadow: inset 4px -4px 10px -6px #63636333; background: #00000099;';
        }
        if (activePlayer === '2') {
            player2Stats.style = 'opacity: 1; box-shadow: -4px 4px 10px -6px #63636366; background: #00000080;';
            player1Stats.style = 'opacity: 0.4; box-shadow: inset -4px -4px 10px -6px #63636333; background: #00000099;';
        }
    }
}

function setBoard() {
    const player1Position = localStorage.getItem('player1position') || 0;
    const player2Position = localStorage.getItem('player2position') || 0;
    const player1 = document.getElementById('token1holder');
    const player2 = document.getElementById('token2holder');
    movePlayerToken(player1Position, player1);
    movePlayerToken(player2Position, player2);
}

setBoard();

window.onload = function () {
    localStorage.setItem('player1position', 0);
    localStorage.setItem('player2position', 0);
    localStorage.removeItem('dieCounter1');
    localStorage.removeItem('dieCounter2');
    const player1Position = localStorage.getItem('player1position') || 0;
    const player2Position = localStorage.getItem('player2position') || 0;
    const player1 = document.getElementById('token1holder');
    const player2 = document.getElementById('token2holder');
    movePlayerToken(player1Position, player1);
    movePlayerToken(player2Position, player2);
    localStorage.setItem('activePlayer', '1');
}