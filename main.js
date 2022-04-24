//Variables
var thisRound = new Game ();
var winConditions = [
  ["box1", "box2", "box3"],
  ["box4", "box5", "box6"],
  ["box7", "box8", "box9"],
  ["box1", "box4", "box7"],
  ["box2", "box5", "box8"],
  ["box3", "box6", "box9"],
  ["box1", "box5", "box9"],
  ["box3", "box5", "box7"],
];


//Query Selectors
var gameGrid = document.querySelector("#game-board");
var tiles = document.querySelectorAll(".grid div");
var results = document.querySelector(".h2");
var diego = document.querySelector("#player1");
var waldo = document.querySelector("#player2");

//Event Listeners
gameGrid.addEventListener('click', makeMove)

//functions

//function makeMove() {
  // for (var i = 0; i < tiles.length; i++) {
  //   tiles[i].onclick = () {
  //     alert('You have clicked tile ' + i)
  //   }
  // }
  // if (thisRound.turn === thisRound.player1) {
  //   event.target.innerText = thisRound.player.token;
  // } else {
  //   event.target.innerText = thisRound.player2.token;
  // }
//}

// startGame() {
//   //sets up board
//   //initiate first turn (previous loser || player1)
//   // if/elseif for this?
// }
