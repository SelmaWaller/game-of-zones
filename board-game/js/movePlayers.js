function token(destination, player) {
    const toElement = document.getElementById(`tile${destination}`);
    player.style.top = `${toElement.offsetTop}px`;
    player.style.left = `${toElement.offsetLeft}px`;
}

function movePlayer(destination, activePlayer) {
    return new Promise(function (resolve) {
        const player = document.getElementById(`token${activePlayer}holder`);
        let currentPosition = parseInt(localStorage.getItem(`player${activePlayer}position`) || 0, 10);
        let tilesToMove = destination - currentPosition;

        if (tilesToMove > 0) {
            for (let i = 1; i <= tilesToMove; i++) {
                setTimeout(function () {
                    token(currentPosition + i, player);
                    if (activePlayer == 1) {
                        document.getElementById('statsPosition1').innerHTML = (currentPosition + i) + '/30';
                    }
                    if (activePlayer == 2) {
                        document.getElementById('statsPosition2').innerHTML = (currentPosition + i) + '/30';
                    }
                    if (i === tilesToMove) {
                        setTimeout(resolve, 200);  // Resolve after transitions
                    }
                }, 200 * i);
            }
        } else {
            for (let i = -1; i >= tilesToMove; i--) {
                setTimeout(function () {
                    token(currentPosition + i, player);
                    if (activePlayer == 1) {
                        document.getElementById('statsPosition1').innerHTML = (currentPosition + i) + '/30';
                    }
                    if (activePlayer == 2) {
                        document.getElementById('statsPosition2').innerHTML = (currentPosition + i) + '/30';
                    }
                    if (i === tilesToMove) {
                        setTimeout(resolve, 200);  // Resolve after transitions
                    }
                }, 200 * i * -1);
            }
        }

        localStorage.setItem(`player${activePlayer}position`, destination);
    })
}

export default { token, player: movePlayer }