const tiles = [{
    id: 'tile1',
}, {
    id: 'tile2',
    moveTo: 1,
    alertMessage: (characterName) => `Oops. ${characterName} forgot their map at tile 1. Embarrassing.`
}, {
    id: 'tile3',
}, {
    id: 'tile4',
}, {
    id: 'tile5',
    moveTo: 8,
    alertMessage: (characterName) => `${characterName} found a shortcut and moves 3 extra steps forward!`
}, {
    id: 'tile6',
}, {
    id: 'tile7',
    moveTo: 6,
    alertMessage: (characterName) => `Woah there! ${characterName} just ran their shoe off at tile 6 and has to go back and pick it up`
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
    alertMessage: (characterName) => `${characterName} notice a crazed greyscaled figure and quickly hides behind a big tree at tile 12!`
}, {
    id: 'tile14',
}, {
    id: 'tile15',
}, {
    id: 'tile16',
    moveTo: 19,
    alertMessage: (characterName) => `${characterName} found a shortcut and moves 3 extra steps forward!`
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
    alertMessage: (characterName) => `Oh no! ${characterName} is being chased by a tribe of wildlings and doesn't shake them off before they're at tile 17...`
}, {
    id: 'tile24',
    moveTo: 27,
    alertMessage: (characterName) => `${characterName} found a shortcut and moves 3 extra steps forward!`
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
    alertMessage: (characterName) => `AAAH! Rhaegal snatched ${characterName} out of nowhere and dropped them all the way back to tile 22! That stings.`
}, {
    id: 'tile30',
}];

export default tiles;