let help = document.getElementById("helpContent");

// open help on click
function toggleHelp() {
    help.style.display = 'block';
};

// open help on Enter
let helpBtn = document.getElementById('helpBtn').addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        help.style.display = 'block';
    }
});

function closeHelp() {
    help.style.display = 'none';
}

let closeBtn = document.getElementById('closeBtn').addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        help.style.display = 'none';
    }
});