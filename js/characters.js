//let url get specific names
let gotApi = async (characterName) => {
    try {
        const fetchResult = await fetch(`https://anapioficeandfire.com/api/characters?name=${characterName.split(' ').join('+')}`); //inserts names correctly
        const data = await fetchResult.json();
        return data[0];
    } catch (error) {
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
    let badge = document.createElement('div');
    badge.setAttribute('class', 'badge');
    let idBtn = document.createElement('button');
    idBtn.style = 'position: relative; max-height: 350px; width: 100%; height: 100%; max-width: 215px; padding: 0; background: #0000004d; border: 1px solid #C5C5C533; transition: 400ms;';
    idBtn.onmouseout = function () {
        idBtn.style = 'position: relative; max-height: 350px; width: 100%; height: 100%; max-width: 215px; padding: 0; background: #0000004d; border: 1px solid #C5C5C533; transition: 400ms;';
    };
    idBtn.onmouseover = function () {
        idBtn.style = 'position: relative; max-height: 350px; width: 100%; height: 100%; max-width: 215px; padding: 0; transition: 400ms; transform: translateY(-4px); background: #00000099; border: 1px solid #C5C5C533; box-shadow: 0 0 10px #C5C5C580; animation: badgeShadow 2s infinite;'
    };
    idBtn.onfocus = function () {
        idBtn.style = 'position: relative; max-height: 350px; width: 100%; height: 100%; max-width: 215px; padding: 0; transition: 400ms; transform: translateY(-4px); background: #00000099; border: 1px solid #C5C5C533; box-shadow: 0 0 10px #C5C5C580; animation: badgeShadow 2s infinite;'
    }
    idBtn.onblur = function () {
        idBtn.style = 'position: relative; max-height: 350px; width: 100%; height: 100%; max-width: 215px; padding: 0; background: #0000004d; border: 1px solid #C5C5C533; transition: 400ms;';
    }
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
    let died = document.createElement('p');
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

    //select chars on click
    idBtn.onclick = () => {
        let startGame = document.getElementById('startGame');
        startGame.disabled = true;
        let player1 = document.getElementById('selectPlayer1');
        let player2 = document.getElementById('selectPlayer2');
        player1.value = character.name;
        player2.value = character.name;
        if (player1.value == player2.value) {
            player2.value = '';
            document.getElementById('confirm').onclick = function () {
                localStorage.setItem('player1', character.name);
                player2.style.opacity = '1';

                let mobile = window.matchMedia('(max-width: 680px)');
                mobile.addListener(fitScreen);
                function fitScreen(mobile) {
                    if (mobile.matches) {
                        player2.style.margin = '70px 20px 0';
                        document.getElementById('versus').style.marginTop = '0';
                    }
                }

                fitScreen(mobile);

                if (localStorage.getItem('player1', character.name)) {
                    badge.style.opacity = '0.5';
                    badge.style.animation = 'none';
                    idBtn.disabled = true;
                    document.getElementById('confirm').style = 'opacity: 0; cursor: default;';
                    document.getElementById('versus').style.opacity = '1';
                }
            }
        }
        if (localStorage.getItem('player1', character.name)) {
            player1.value = localStorage.getItem('player1', character.name);
            player2.value = character.name;
            localStorage.setItem('player2', character.name);
        }
        if (localStorage.getItem('player2', character.name)) {
            startGame.style = 'opacity: 1; cursor: pointer; margin-bottom: 20px';
            startGame.disabled = false;
        }

        startGame.onclick = function () {
            window.location = 'board-game/index.html';
        }
    }
}

getCharacters().then(chars => {
    window.characters = chars;
    console.log(chars);
    chars.forEach((char, index) => createCharacter(char, index))
});