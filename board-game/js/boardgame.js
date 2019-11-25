const tiles = [{
    id: 'tile1',
}, {
    id: 'tile2',
    moveTo: 1,
    alertMessage: (characterName) => `Oops. ${characterName} forgot their map. Embarrassing.`
}, {
    id: 'tile3',
}, {
    id: 'tile4',
}, {
    id: 'tile5',
    moveTo: 8,
    alertMessage: (characterName) => `${characterName} found a shortcut!`
}, {
    id: 'tile6',
}, {
    id: 'tile7',
    moveTo: 6,
    alertMessage: (characterName) => `Woah there! ${characterName} just ran their left foot shoe off! You'll need that shoe, ${characterName}. Go back one step and pick it up.`
}, {
    id: 'tile8',
}, {
    id: 'tile9',
}, {
    id: 'tile10',
}, {
    id: 'tile11',
}, {
    id: 'tile12',
}, {
    id: 'tile13',
    moveTo: 12,
    alertMessage: (characterName) => `${characterName} notice a crazed greyscaled figure and quickly hides behind a big tree behind them!`
}, {
    id: 'tile14',
}, {
    id: 'tile15',
}, {
    id: 'tile16',
    moveTo: 19,
    alertMessage: (characterName) => `${characterName} found a shortcut!`
}, {
    id: 'tile17',
}, {
    id: 'tile18',
}, {
    id: 'tile19',
}, {
    id: 'tile20',
    moveTo: 19,
    alertMessage: (characterName) => `${characterName} smells Hot Pie's delicious pastries from the bakery at tile 19 and can't resist grabbing a bite`
}, {
    id: 'tile21',
}, {
    id: 'tile22',
}, {
    id: 'tile23',
    moveTo: 17,
    alertMessage: (characterName) => `Oh no! ${characterName} just relized they've lost their right foot shoe all the way back in The Reach! Take 6 sad steps back and learn to tie your shoes.`
}, {
    id: 'tile24',
    moveTo: 27,
    alertMessage: (characterName) => `${characterName} found a shortcut!`
}, {
    id: 'tile25',
}, {
    id: 'tile26',
}, {
    id: 'tile27',
}, {
    id: 'tile28',
}, {
    id: 'tile29',
    moveTo: 22,
    alertMessage: (characterName) => `AAAH! Rhaegal snatched ${characterName} out of nowhere and dropped them all the way back in the Riverlands! That stings.`
}, {
    id: 'tile30',
}]


function checkTokens() {
    let player1 = localStorage.getItem('player1');
    let player2 = localStorage.getItem('player2');

    const tokens = ['../images/arryn-badge.png', '../images/baratheon-badge.png', '../images/clegane-badge.png', '../images/greyjoy-badge.png', '../images/lannister-badge.png', '../images/martell-badge.png', '../images/mormont-badge.png', '../images/stark-badge.png', '../images/targaryen-badge.png', '../images/tyrell-badge.png'];

    const characters = ['Robert Arryn', 'Tommen Baratheon', 'Sandor Clegane', 'Theon Greyjoy', 'Tyrion Lannister', 'Oberyn Nymeros Martell', 'Lyra Mormont', 'Arya Stark', 'Daenerys Targaryen', 'Margaery Tyrell']

    for (let i = 0; i < characters.length; i++) {
        if (localStorage.getItem('player1') == characters[i]) {
            console.log('Player 1 as ' + player1);
            document.getElementById('token1').src = tokens[i];
            document.getElementById('statsToken1').src = tokens[i];
        }
    }

    for (let i = 0; i < characters.length; i++) {
        if (localStorage.getItem('player2') == characters[i]) {
            console.log('Player 2 as ' + player2);
            document.getElementById('token2').src = tokens[i];
            document.getElementById('statsToken2').src = tokens[i];
        }
    }

    document.getElementById('playersTurn').innerHTML += localStorage.getItem('player1') + ' starts!';
}

checkTokens();

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
                    console.log(currentPosition + i, Date.now());
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
                    console.log(currentPosition + i, Date.now());
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

    const diceBtn = document.getElementById('dice')
    diceBtn.disabled = true;
    const activePlayer = localStorage.getItem('activePlayer') || '1';
    const playerPosition = localStorage.getItem(`player${activePlayer}position`) || 0;

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

    const tile = tiles[newPosition - 1]
    if (tile.moveTo) {
        const characterName = localStorage.getItem(`player${activePlayer}`);
        alert(tile.alertMessage(characterName));
        await movePlayer(tile.moveTo, activePlayer);
    }

    localStorage.setItem('activePlayer', activePlayer === '1' ? '2' : '1');
    diceBtn.disabled = false;


    if (dice == 6) {
        localStorage.setItem('activePlayer', activePlayer === '1' ? '1' : '2');
        alert('Adrenaline rushes through ' + localStorage.getItem(`player${activePlayer}`) + ' like a hurricane! No time for breaks, roll again!');
        if (activePlayer === '1') {
            player2Stats.style = 'opacity: 1; box-shadow: -4px 4px 10px -6px #C5C5C566;';
            player1Stats.style = 'opacity: 0.5; box-shadow: 4px 4px 10px -6px #C5C5C500;';
        }
        if (activePlayer === '2') {
            player1Stats.style = 'opacity: 0.5; box-shadow: 4px 4px 10px -6px #C5C5C566;';
            player2Stats.style = 'opacity: 1; box-shadow: -4px 4px 10px -6px #C5C5C500;';
        }
    }
    //display with styling whose turn it is
    let player1Stats = document.getElementById('player1Stats');
    let player2Stats = document.getElementById('player2Stats');
    if (activePlayer === '1') {
        player2Stats.style = 'opacity: 1; box-shadow: -4px 4px 10px -6px #C5C5C566; background: #00000080;';
        player1Stats.style = 'opacity: 0.5; box-shadow: 4px 4px 10px -6px #C5C5C500; background: #00000000;';
    }
    if (activePlayer === '2') {
        player1Stats.style = 'opacity: 1; box-shadow: 4px 4px 10px -6px #C5C5C566; background: #00000080;';
        player2Stats.style = 'opacity: 0.5; box-shadow: -4px 4px 10px -6px #C5C5C500; background: #00000000;';
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
    const player1Position = localStorage.getItem('player1position') || 0;
    const player2Position = localStorage.getItem('player2position') || 0;
    const player1 = document.getElementById('token1holder');
    const player2 = document.getElementById('token2holder');
    movePlayerToken(player1Position, player1);
    movePlayerToken(player2Position, player2);
    localStorage.setItem('activePlayer', '1');
}