//Variables
var thisRound = new Game ();

//Query Selectors
var gameGrid = document.querySelector("#game-board");

//Event Listeners
gameGrid.addEventListener('click', makeMove)

//functions

function makeMove() {
  if (thisRound.turn === thisRound.player1) {
    event.target.innerText = thisRound.player.token;
  } else {
    event.target.innerText = thisRound.player2.token;
  }
}

startGame() {
  //sets up board
  //initiate first turn (previous loser || player1)
  // if/elseif for this?
}
