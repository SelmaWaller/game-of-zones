//let url get specific names
let gotApi = async (characterName) => {
    try {
        const fetchResult = await fetch(`https://anapioficeandfire.com/api/characters?name=${characterName.split(' ').join('+')}`);
        const data = await fetchResult.json();
        return data[0];
    } catch (error) {
        console.log('Fetch error', error);
    }
};

let getCharacters = async () => {
    return Promise.all(['Robert Arryn', 'Tommen Baratheon', 'Sandor Clegane', 'Theon Greyjoy', 'Tyrion Lannister', 'Oberyn Nymeros Martell', 'Lyanna Mormont', 'Arya Stark', 'Daenerys Targaryen', 'Margaery Tyrell'].map(gotApi)); //wait for all promises: [gotApi('Robert Arryn'), gotApi('Robert I Baratheon') etc..]
}

window.characters = []
const images = ['images/arryn-badge.png', 'images/baratheon-badge.png', 'images/clegane-badge.png', 'images/greyjoy-badge.png', 'images/lannister-badge.png', 'images/martell-badge.png', 'images/mormont-badge.png', 'images/stark-badge.png', 'images/targaryen-badge.png', 'images/tyrell-badge.png'];

function createCharacter(character, index) {
    let container = document.getElementById('characters');
    let badge = document.createElement('div');
    badge.setAttribute('class', 'badge');
    let idBtn = document.createElement('button');
    let name = document.createElement('h3');
    name.textContent = (character.name);
    let img = document.createElement('img');
    img.setAttribute('src', images[index]);
    img.setAttribute('id', 'a' + character.playedBy);
    img.setAttribute('alt', character.name + ' badge');
    let about = document.createElement('div');
    about.setAttribute('class', 'aboutChar');
    let gender = document.createElement('p');
    gender.innerHTML = `<b>Gender:</b> <span>${character.gender}</span>`;
    let born = document.createElement('p');
    born.innerHTML = `<b>Born:</b> <span>${character.born}</span>`;
    let died = document.createElement('p');
    died.innerHTML = `<b>Died:</b> <span>${character.died}</span>`;
    if (character.died === "") {
        died.innerHTML = `<b>Died:</b> <span>Unknown</span>`;
    }
    let alias = document.createElement('p');
    alias.innerHTML = `<b>Main alias:</b> <span>${character.aliases.slice(0, 1)}</span>`;
    if (character.aliases == "") {
        alias.innerHTML = `<b>Main alias:</b> <span>Unknown</span>`;
    }
    let culture = document.createElement('p');
    culture.innerHTML = `<b>Culture:</b> <span>${character.culture}</span>`;
    if (character.culture == "") {
        culture.innerHTML = `<b>Culture:</b> <span>Unknown</span>`;
    }

    //appendChild over innerHTML because of conditions
    container.appendChild(badge);
    badge.appendChild(idBtn);
    idBtn.appendChild(name);
    idBtn.appendChild(img);
    idBtn.appendChild(about);
    about.appendChild(gender);
    about.appendChild(born);
    about.appendChild(died);
    about.appendChild(alias);
    about.appendChild(culture);

    //cards styled here for animations to work
    idBtn.style = 'position: relative; max-height: 350px; width: 100%; height: 100%; max-width: 215px; padding: 0; background: #0000004d; border: 1px solid #C5C5C533; transition: 400ms; cursor: default;';
    img.style.opacity = '0';
    about.style.opacity = '1';
    idBtn.onmouseout = function () {
        idBtn.style = 'position: relative; max-height: 350px; width: 100%; height: 100%; max-width: 215px; padding: 0; background: #0000004d; border: 1px solid #C5C5C533; transition: 400ms; cursor: default;';
        img.style.opacity = '0';
        about.style.opacity = '1';
    };
    idBtn.onmouseover = function () {
        idBtn.style = 'position: relative; max-height: 350px; width: 100%; height: 100%; max-width: 215px; padding: 0; transition: 400ms; transform: translateY(-4px); background: #00000099; border: 1px solid #C5C5C533; box-shadow: 0 0 10px #C5C5C580; animation: badgeShadow 2s infinite; cursor: pointer;'
        img.style.opacity = '1';
        about.style.opacity = '0';
    };
    idBtn.onfocus = function () {
        idBtn.style = 'position: relative; max-height: 350px; width: 100%; height: 100%; max-width: 215px; padding: 0; transition: 400ms; transform: translateY(-4px); background: #00000099; border: 1px solid #C5C5C533; box-shadow: 0 0 10px #C5C5C580; animation: badgeShadow 2s infinite; cursor: pointer;'
        img.style.opacity = '1';
        about.style.opacity = '0';
    }
    idBtn.onblur = function () {
        idBtn.style = 'position: relative; max-height: 350px; width: 100%; height: 100%; max-width: 215px; padding: 0; background: #0000004d; border: 1px solid #C5C5C533; transition: 400ms; cursor: default;';
        img.style.opacity = '0';
        about.style.opacity = '1';
    }

    idBtn.onclick = () => {
        let startGame = document.getElementById('startGame');
        startGame.disabled = true;
        let player1 = document.getElementById('selectPlayer1');
        let player2 = document.getElementById('selectPlayer2');
        player1.value = character.name;
        player2.value = character.name;
        if (player1.value == player2.value) {
            player2.value = '';

            player1.style.backgroundImage = 'url(' + `${images[index]}` + ')';
            if (localStorage.getItem('inputToken1')) {
                let selectedToken1 = localStorage.getItem('inputToken1');
                player1.style.backgroundImage = 'url(' + `${selectedToken1}` + ')';
            }

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
                    localStorage.setItem('inputToken1', images[index]);
                    let selectedToken1 = localStorage.getItem('inputToken1');
                    player1.style.backgroundImage = 'url(' + `${selectedToken1}` + ')';
                    badge.style = 'opacity: 0.5; animation: none';
                    about.style.opacity = '0';
                    img.style.opacity = '1';
                    idBtn.disabled = true;
                    let confirmText = document.createElement('p');
                    confirmText.setAttribute('id', 'confirmText');
                    confirmText.textContent = 'Player 1';
                    idBtn.appendChild(confirmText);
                    let confirm = document.getElementById('confirm');
                    confirm.style = 'opacity: 0; cursor: default;';
                    confirm.disabled = true;
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
            localStorage.setItem('inputToken2', images[index]);
            let selectedToken2 = localStorage.getItem('inputToken2');
            player2.style.backgroundImage = 'url(' + `${selectedToken2}` + ')';
            startGame.style = 'opacity: 1; cursor: pointer; margin-bottom: 20px';
            startGame.disabled = false;
        }

        startGame.onclick = function () {
            let confirmText = document.createElement('p');
            confirmText.setAttribute('id', 'confirmText');
            confirmText.textContent = 'Player 2';
            idBtn.appendChild(confirmText);
            badge.style = 'opacity: 0.5; animation: none';
            about.style.opacity = '0';
            img.style.opacity = '1';
            let transition = document.getElementById('transitionOverlay');
            setTimeout(function () {
                transition.style.background = 'rgba(0, 0, 0, 1)';
            }, 500)
            setTimeout(function () {
                window.location = 'board-game/index.html';
            }, 2000);
        }
    }
}

window.onload = function () {
    localStorage.removeItem('player1position');
    localStorage.removeItem('player2position');
    localStorage.removeItem('player1');
    localStorage.removeItem('player2');
    localStorage.removeItem('inputToken1');
    localStorage.removeItem('inputToken2');
    localStorage.removeItem('dieCounter1');
    localStorage.removeItem('dieCounter2');
    localStorage.removeItem('winner');
    localStorage.setItem('activePlayer', '1');
}

getCharacters().then(chars => {
    window.characters = chars;
    console.log(chars);
    chars.forEach((char, index) => createCharacter(char, index))
});