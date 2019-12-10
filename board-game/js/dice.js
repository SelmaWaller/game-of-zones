function dice() {
    let dice = Math.floor(Math.random() * 6) + 1;

    let boardDice = document.getElementById('diceImg');
    let diceImg = ['../images/dice-1.svg', '../images/dice-2.svg', '../images/dice-3.svg', '../images/dice-4.svg', '../images/dice-5.svg', '../images/dice-6.svg'];

    for (let i = 0; i < dice; i++) {
        boardDice.src = diceImg[i];
    }
}

export default { dice };