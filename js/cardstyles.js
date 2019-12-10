function carddefault() {
    card[i].style = 'position: relative; max-height: 350px; width: 100%; height: 100%; max-width: 215px; padding: 0; background: #0000004d; border: 1px solid #C5C5C533; transition: 400ms; cursor: default;';
    img.style.opacity = '0';
    about.style.opacity = '1';
};
function cardhover() {
    card[i].style = 'position: relative; max-height: 350px; width: 100%; height: 100%; max-width: 215px; padding: 0; transition: 400ms; transform: translateY(-4px); background: #00000099; border: 1px solid #C5C5C533; box-shadow: 0 0 10px #C5C5C580; animation: badgeShadow 2s infinite; cursor: pointer;'
    img.style.opacity = '1';
    about.style.opacity = '0';
};
function cardfocus() {
    card[i].style = 'position: relative; max-height: 350px; width: 100%; height: 100%; max-width: 215px; padding: 0; transition: 400ms; transform: translateY(-4px); background: #00000099; border: 1px solid #C5C5C533; box-shadow: 0 0 10px #C5C5C580; animation: badgeShadow 2s infinite; cursor: pointer;'
    img.style.opacity = '1';
    about.style.opacity = '0';
}
function cardblur() {
    card[i].style = 'position: relative; max-height: 350px; width: 100%; height: 100%; max-width: 215px; padding: 0; background: #0000004d; border: 1px solid #C5C5C533; transition: 400ms; cursor: default;';
    img.style.opacity = '0';
    about.style.opacity = '1';
}

export default { carddefault, cardhover, cardfocus, cardblur }