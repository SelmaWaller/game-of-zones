function winner() {
    let winner = localStorage.getItem('winner');
    console.log(winner + ' reached the Iron Throne first!');
    const tokens = ['../images/arryn-badge.png', '../images/baratheon-badge.png', '../images/clegane-badge.png', '../images/greyjoy-badge.png', '../images/lannister-badge.png', '../images/martell-badge.png', '../images/mormont-badge.png', '../images/stark-badge.png', '../images/targaryen-badge.png', '../images/tyrell-badge.png'];

    const characters = ['Robert Arryn', 'Tommen Baratheon', 'Sandor Clegane', 'Theon Greyjoy', 'Tyrion Lannister', 'Oberyn Nymeros Martell', 'Lyra Mormont', 'Arya Stark', 'Daenerys Targaryen', 'Margaery Tyrell']

    for (let i = 0; i < characters.length; i++) {
        if (winner.includes(characters[i])) {
            document.getElementById('winnerToken').src = tokens[i];
        }
    }
    document.getElementById('winnerName').innerHTML += winner + '!';
}

winner();