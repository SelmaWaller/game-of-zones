let help = document.getElementById("helpContent");

function toggleHelp() {
    let content = document.getElementById('helpContent');
    if (content.style.display === 'none') {
        content.style.display = 'block';
    } else {
        content.style.display = 'none';
    }
}

document.getElementById('helpBtn').addEventListener('keyup', function (event) {
    let keys = [13, 32, 27];
    for (let i = 0; i <= keys.length; i++) {
        if (event.keyCode == keys[i]) {
            let content = document.getElementById('helpContent');
            if (content.style.display === 'none') {
                content.style.display = 'block';
            } else {
                content.style.display = 'none';
            }
        }
    }
})