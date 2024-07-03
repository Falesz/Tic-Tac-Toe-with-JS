// Main script for Tic-Tac-Toe game
const gameTable = document.getElementById("gameTable");
let playerXTurn = true;

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
            });
        }
    }
}

initTable();
addEventListenersToGameTableCells();