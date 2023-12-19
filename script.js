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

    if (board[r][c] !== " ") {
      return;
    }

    board[r][c] = currentPlayer;
    this.innerText = currentPlayer;

    if (currentPlayer === playerOne) {
      currentPlayer = playerTwo;
    } else currentPlayer = playerOne;
    checkWinner();
  });
};

const checkWinner = () => {
  //horizonntal
  for (let r = 0; r < 3; r++) {
    if (
      board[r][0] == board[r][1] &&
      board[r][1] == board[r][2] &&
      board[r][0] != " "
    ) {
      for (let i = 0; i < 3; i++) {
        let tile = document.getElementById(r.toString() + "-" + i.toString());
        console.log(tile);
        tile.classList.add("winner");
      }
      gameOver = true;
      return;
    }
  }
  //vertical
  for (let c = 0; c < 3; c++) {
    if (
      board[0][c] == board[1][c] &&
      board[1][c] == board[2][c] &&
      board[0][c] != " "
    ) {
      for (let i = 0; i < 3; i++) {
        let tile = document.getElementById(i.toString() + "-" + c.toString());
        tile.classList.add("winner");
      }
      gameOver = true;
      return;
    }
  }
  //diagonal right
  if (
    board[0][0] == board[1][1] &&
    board[1][1] == board[2][2] &&
    board[0][0] != " "
  ) {
    for (let i = 0; i < 3; i++) {
      let tile = document.getElementById(i.toString() + "-" + i.toString());
      tile.classList.add("winner");
    }
    gameOver = true;
    return;
  }
  //diagonal left
  if (
    board[0][2] == board[1][1] &&
    board[1][1] == board[2][0] &&
    board[0][2] != " "
  ) {
    //0-2
    let tile = document.getElementById("0-2");
    tile.classList.add("winner");
    //1-1
    tile = document.getElementById("1-1");
    tile.classList.add("winner");
    //2-0
    tile = document.getElementById("2-0");
    tile.classList.add("winner");
    gameOver = true;
    return;
  }
};


