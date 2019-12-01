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

    document.getElementById('playersTurn').innerHTML = localStorage.getItem('player1') + ' starts!';
}

checkTokens();