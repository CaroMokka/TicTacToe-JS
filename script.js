let board;
let playerOne = "O";
let playerTwo = "X";

let currentPlayer = playerOne;
let gameOver = false;

window.onload = function () {
  setGame();
};

function setGame() {
  board = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ];
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      let tile = document.createElement("div");
      tile.id = r.toString() + "-" + c.toString();
      tile.classList.add("tile");
      console.log(tile);
      if (r === 0 || r === 1) {
        tile.classList.add("horizontal-line");
      }
      if (c === 0 || c === 1) {
        tile.classList.add("vertical-line");
      }
      document.querySelector("#board").appendChild(tile);
      tileSelected(tile);
    }
  }
}
const tileSelected = (tile) => {
  tile.addEventListener("click", function () {
    if (gameOver) {
      return;
    }
    let coords = tile.id.split("-");
    console.log(coords);
    let r = parseInt(coords[0]);
    let c = parseInt(coords[1]);
    console.log(r, c);
    board[r][c];
    this.innerText = currentPlayer;
    if (currentPlayer === playerOne) {
      currentPlayer = playerTwo;
    } else currentPlayer = playerOne;
  });
};

// el chico del video Kennny Yip
// function tileSelected() {
//   if (gameOver) {
//     return;
//   }

//   let coords = this.id.split("-");
//   console.log(coords)
//   let r = parseInt(coords[0]);
//   let c = parseInt(coords[1]);

//   board[r][c] = currentPlayer;
//   this.innerText = currentPlayer;
// };
