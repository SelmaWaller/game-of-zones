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

let characters = [];

getCharacters().then(chars => {
    characters = chars;
    console.log(chars);
    for (i = 0; i < chars.length; i++) {
        images = ['images/arryn-badge.png', 'images/baratheon-badge.png', 'images/clegane-badge.png', 'images/greyjoy-badge.png', 'images/lannister-badge.png', 'images/martell-badge.png', 'images/mormont-badge.png', 'images/stark-badge.png', 'images/targaryen-badge.png', 'images/tyrell-badge.png'];
        let container = document.getElementById('characters');
        badge = document.createElement('div');
        badge.setAttribute('class', 'badge');
        let idBtn = document.createElement('button');
        idBtn.setAttribute('id', chars[i].playedBy);
        let name = document.createElement('h3');
        name.textContent = (chars[i].name);
        let img = document.createElement('img');
        img.setAttribute('src', images[i]);
        img.setAttribute('id', 'a' + chars[i].playedBy);
        img.setAttribute('alt', chars[i].name + ' badge');
        let about = document.createElement('div');
        about.setAttribute('class', 'aboutChar');
        let gender = document.createElement('p');
        gender.textContent = ('Gender: ' + chars[i].gender);
        let born = document.createElement('p');
        born.textContent = ('Born: ' + chars[i].born);
        died = document.createElement('p');
        died.textContent = ('Died: ' + chars[i].died);
        if (chars[i].died === "") {
            died.textContent = ('Died: Still alive/unknown');
        }
        let title = document.createElement('p');
        title.textContent = ('Main Title: ' + chars[i].titles.slice(0, 1));
        if (chars[i].titles == "") {
            title.textContent = ('Main Title: No title');
        }
        let culture = document.createElement('p');
        culture.textContent = ('Culture: ' + chars[i].culture);
        if (chars[i].culture == "") {
            culture.textContent = ('Culture: Unknown')
        }
        container.appendChild(badge);
        badge.appendChild(idBtn);
        idBtn.appendChild(name);
        idBtn.appendChild(img);
        idBtn.appendChild(about);
        about.appendChild(gender);
        about.appendChild(born);
        about.appendChild(died);
        about.appendChild(title);
        about.appendChild(culture);
    }
})