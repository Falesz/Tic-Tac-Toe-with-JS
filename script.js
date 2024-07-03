// Main script for Tic-Tac-Toe game
const gameTable = document.getElementById("gameTable");
let playerXTurn = true;

const playerMoved = new Event("playerMoved"); 

function initTable() {
    gameTable.innerHTML += "<tr><td></td><td></td><td></td></tr>";
    gameTable.innerHTML += "<tr><td></td><td></td><td></td></tr>";
    gameTable.innerHTML += "<tr><td></td><td></td><td></td></tr>";

    // useful stuff:
    // gameTable.rows.length
    // gameTable.rows[i]
    // gameTable.rows.cells.length
    // gameTable.rows.cells[i]
}

function addEventListenersToGameTableCells() {
    for (i = 0; i < gameTable.rows.length; ++i) {
        for (j = 0; j < gameTable.rows[i].cells.length; ++j) {
            gameTable.rows[i].cells[j].addEventListener("click", (event) => {
                if (event.target.innerText.length != 0) {
                    return;
                }

                event.target.innerText = playerXTurn ? "X" : "O";
                playerXTurn = !playerXTurn;
                document.dispatchEvent(playerMoved);
            });
        }
    }
}

function checkForGameOver() {
    // Check rows
    /* outer:
    for (i = 0; i < gameTable.rows.length; ++i) {
        for (j = 1; j < gameTable.rows[i].cells.length; ++j) {
            if (gameTable.rows[i].cells[j].innerText !== gameTable.rows[i].cells[0].innerText) {
                continue outer;
            }
        }
        return true;
    } */

    return false;
}

// ----------------------------------------------------------------------------------------------------------
// Main script

initTable();
addEventListenersToGameTableCells();
document.addEventListener("playerMoved", () => {
    let gameOver = checkForGameOver();
    console.log("Game is over: " + gameOver);
})