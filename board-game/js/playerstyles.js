let player1Stats = document.getElementById('player1Stats');
let player2Stats = document.getElementById('player2Stats');

function setTokens() {
    document.getElementById('token1').style = 'margin: 0';
    setTimeout(function () {
        document.getElementById('token2').style = 'margin: 0';
    }, 200);
}

function p2style1() {
    player2Stats.style = 'opacity: 1; box-shadow: -4px 4px 10px -6px #63636366; background: #00000080;';
}

function p2style2() {
    player2Stats.style = 'opacity: 0.4; box-shadow: inset 4px -4px 10px -6px #63636333; background: #00000099;';
}

function p1style1() {
    player1Stats.style = 'opacity: 1; box-shadow: 4px 4px 10px -6px #63636366; background: #00000080;';
}

function p1style2() {
    player1Stats.style = 'opacity: 0.4; box-shadow: inset -4px -4px 10px -6px #63636333; background: #00000099;';
}
export default { setTokens, p2style1, p2style2, p1style1, p1style2 };