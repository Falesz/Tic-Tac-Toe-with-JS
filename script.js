// Main script for Tic-Tac-Toe game
const gameTable = document.getElementById("gameTable")

function initTable() {
    gameTable.innerHTML += "<tr><td>X</td><td>X</td><td>X</td></tr>";
    gameTable.innerHTML += "<tr><td>X</td><td>X</td><td>X</td></tr>";
    gameTable.innerHTML += "<tr><td>X</td><td>X</td><td>X</td></tr>";

    // useful stuff:
    // gameTable.rows.length
    // gameTable.rows[i]
    // gameTable.rows.cells.length
    // gameTable.rows.cells[i]
}

initTable();