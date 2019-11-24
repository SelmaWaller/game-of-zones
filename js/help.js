let help = document.getElementById("helpContent");

// open help on click
function toggleHelp() {
    let content = document.getElementById('helpContent');
    if (content.style.display === 'none') {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
}

let helpBtn = document.getElementById('helpBtn').addEventListener('keyup', function (event) {
    if (event.keyCode === 13) {
        let content = document.getElementById('helpContent');
        if (content.style.display === 'none') {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }
    }
})