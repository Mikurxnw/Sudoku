const input = document.querySelector("input");
const body = document.getElementById("theme-mode");
const board = document.getElementById("board");
const numbers = document.getElementById("numbers");
const startBtn = document.getElementById("start-btn");
const header = document.querySelector("header");
const timer = document.getElementById("timer");
const lives = document.getElementById("lives");
var numSelected = null;
var tileSelected = null;
var errors = 0;
var visibleboard = [
  "--74916-5",
  "2---6-3-9",
  "-----7-1-",
  "-586----4",
  "--3----9-",
  "--62--187",
  "9-4-7---2",
  "67-83----",
  "81--45---",
];
var solution = [
  "387491625",
  "241568379",
  "569327418",
  "758619234",
  "123784596",
  "496253187",
  "934176852",
  "675832941",
  "812945763",
];

const toggleThemeMode = () => {
  body.classList.toggle("dark");
};

input.addEventListener("change", toggleThemeMode);

startBtn.addEventListener("click", () => {
  timer.classList.remove("hidden");
  lives.classList.remove("hidden");
  header.classList.add("hidden");
  board.classList.remove("hidden");
  numbers.classList.remove("hidden");

  for (let i = 1; i <= 9; i++) {
    let number = document.createElement("div");
    number.id = i;
    number.innerText = i;
    number.addEventListener("click", selectNum);
    number.classList.add("number");
    document.getElementById("numbers").appendChild(number);
  }

  for (let row = 1; row <= 9; row++) {
    for (let col = 1; col <= 9; col++) {
      let tile = document.createElement("div");
      tile.id = row.toString() + col.toString();
      tile.addEventListener("click", selectTile);
      if (visibleboard[row - 1][col - 1] != "-") {
        tile.innerText = visibleboard[row - 1][col - 1];
        tile.classList.add("tile-start");
      }
      tile.classList.add("tile");
      document.getElementById("board").appendChild(tile);
    }
  }
});

function selectNum() {
  if (numSelected != null) {
    numSelected.classList.remove("number-selected");
  }
  numSelected = this;
  numSelected.classList.add("number-selected");
}

function selectTile() {
  if (numSelected) {
    if (this.innerText != "") {
      return;
    }
    this.innerText = numSelected.id;
  }
}
