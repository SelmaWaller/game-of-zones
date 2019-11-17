//let url get specific names
let gotApi = async (characterName) => {
    try {
        const fetchResult = await fetch(`https://anapioficeandfire.com/api/characters?name=${characterName.split(' ').join('+')}`); //inserts names correctly
        const data = await fetchResult.json();
        return data[0];
    } catch (e) {
        console.log('Fetch error', error);
    }
};

let getCharacters = async () => {
    return Promise.all(['Robert Arryn', 'Tommen Baratheon', 'Sandor Clegane', 'Theon Greyjoy', 'Tyrion Lannister', 'Oberyn Nymeros Martell', 'Lyra Mormont', 'Arya Stark', 'Daenerys Targaryen', 'Margaery Tyrell'].map(gotApi)); //wait for all promises: [gotApi('Robert Arryn'), gotApi('Robert I Baratheon') etc..]
}

window.characters = []
//make an array for each character
const images = ['images/arryn-badge.png', 'images/baratheon-badge.png', 'images/clegane-badge.png', 'images/greyjoy-badge.png', 'images/lannister-badge.png', 'images/martell-badge.png', 'images/mormont-badge.png', 'images/stark-badge.png', 'images/targaryen-badge.png', 'images/tyrell-badge.png'];
//place badges in each card

function createCharacter(character, index) {
    let container = document.getElementById('characters');
    badge = document.createElement('div');
    badge.setAttribute('class', 'badge');
    let idBtn = document.createElement('button');
    idBtn.setAttribute('id', character.playedBy);
    let name = document.createElement('h3');
    name.textContent = (character.name);
    let img = document.createElement('img');
    img.setAttribute('src', images[index]);
    img.setAttribute('id', 'a' + character.playedBy);
    img.setAttribute('alt', character.name + ' badge');
    let choose = document.createElement('button');
    choose.setAttribute('class', 'choose');
    choose.textContent = ('Choose');
    let about = document.createElement('div');
    about.setAttribute('class', 'aboutChar');
    let gender = document.createElement('p');
    gender.textContent = ('Gender: ' + character.gender);
    let born = document.createElement('p');
    born.textContent = ('Born: ' + character.born);
    died = document.createElement('p');
    died.textContent = ('Died: ' + character.died);
    if (character.died === "") {
        died.textContent = ('Died: Still alive/unknown');
    }
    let title = document.createElement('p');
    title.textContent = ('Main Title: ' + character.titles.slice(0, 1));
    if (character.titles == "") {
        title.textContent = ('Main Title: No title');
    }
    let culture = document.createElement('p');
    culture.textContent = ('Culture: ' + character.culture);
    if (character.culture == "") {
        culture.textContent = ('Culture: Unknown')
    }
    container.appendChild(badge);
    badge.appendChild(idBtn);
    idBtn.appendChild(name);
    idBtn.appendChild(img);
    idBtn.appendChild(about);
    //idBtn.appendChild(choose);
    about.appendChild(gender);
    about.appendChild(born);
    about.appendChild(died);
    about.appendChild(title);
    about.appendChild(culture);

    /*select chars on card click
    idBtn.onclick = () => {
        let player1 = document.getElementById('player1');
        let player2 = document.getElementById('player2');

        player1.value = character.name;
        player2.value = character.name;
        localStorage.setItem('player1', character.name);
        localStorage.setItem('player2', character.name);
        const chosenPlayer1 = localStorage.getItem('player1');
        const chosenPlayer2 = localStorage.getItem('player2');
        console.log('Player 1: ' + chosenPlayer1);
        console.log('Player 2: ' + chosenPlayer2);
    }*/

    document.getElementById('startGame').addEventListener('click', function () {
        let player1 = document.getElementById('player1');
        let player2 = document.getElementById('player2');
        localStorage.setItem('player1', player1.value);
        localStorage.setItem('player2', player2.value);
        let chosenCharacter1 = localStorage.getItem('player1', player1.value);
        let chosenCharacter2 = localStorage.getItem('player2', player2.value);
        console.log('Player 1: ' + chosenCharacter1);
        console.log('Player 2: ' + chosenCharacter2);
        window.location = 'board-game/index.html';
    });
}

getCharacters().then(chars => {
    window.characters = chars;
    console.log(chars);
    chars.forEach((char, index) => createCharacter(char, index))
});