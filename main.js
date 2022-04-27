//Variables
var thisRound = new Game('Carmen', 'Waldo');
var currentPlayer = thisRound.player1;
var startingPlayer = currentPlayer;
var endGame = false;
var turnNumber = 0;
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
var gameGrid = document.querySelector(".grid");
var tiles = document.querySelectorAll(".grid div");
var results = document.querySelector("h2");
var diego = document.querySelector("#player1");
var waldo = document.querySelector("#player2");
var diegoWins = document.querySelector(".diego-wins");
var waldoWins = document.querySelector(".waldo-wins");

//Event Listeners
gameGrid.addEventListener('click', makeMove)

//functions

function makeMove(){
  var tile = document.querySelector(`#${event.target.id}`);
  if (!tile.classList.contains('selected')) {
    if (currentPlayer === thisRound.player1) {
      turnNumber = turnNumber + 1;
      tile.classList.add('selected');
      thisRound.gameGrid[event.target.id] = thisRound.player1.token;
      tile.innerHTML = '<img class="player1" src="./Assets/sandiego.png" alt="Carmen Sandiego\'s Hat">'
      currentPlayer = thisRound.player2;
      results.innerText = `It's Waldo's Turn!`;
    } else if (currentPlayer === thisRound.player2 ) {
      turnNumber = turnNumber + 1;
      tile.classList.add('selected');
      thisRound.gameGrid[event.target.id] = thisRound.player2.token;
      tile.innerHTML = '<img class="player2" src="./Assets/waldo.jpeg" alt="Waldo\'s red and white striped clothes and glasses">'
      currentPlayer = thisRound.player1;
      results.innerText = `It's Carmen's Turn!`;
    }
  } else alert('This tile is taken!');
  checkWin();
}

function checkWin() {
  thisRound.draw = false;
  for (var i = 0; i < winConditions.length; i++) {
  var tile1 = thisRound.gameGrid[winConditions[i][0]];
  var tile2 = thisRound.gameGrid[winConditions[i][1]];
  var tile3 = thisRound.gameGrid[winConditions[i][2]];
    if (tile1 === tile2 && tile2 === tile3 && tile3 === 'diego') {
      turnNumber = 0;
      winning(tile1);
      endGame = true;
    } else if (tile1 === tile2 && tile2 === tile3 && tile3 === 'waldo' ) {
      turnNumber = 0;
      winning(tile1);
      endGame = true;
    } else {
      checkDraw();
    }
  }
}

function checkDraw() {
  if (turnNumber === 9 && !endGame){
    turnNumber = 0;
    tiedGame();
  }

}

function winning(winner) {
  if (winner === 'waldo') {
    thisRound.player2.increaseWins(thisRound.draw);
    results.innerText = `Waldo wins!`;
  } else if (winner === 'diego'){
    thisRound.player1.increaseWins(thisRound.draw);
    results.innerText = `Carmen wins!`;
  }
  setTimeout(startGame, 3000);
}

function tiedGame() {
  thisRound.draw = true;
  results.innerText = `This game is a draw!`;
  setTimeout(startGame, 3000);
}

function startGame() {
  thisRound.gameGrid.box1 = '';
  thisRound.gameGrid.box2 = '';
  thisRound.gameGrid.box3 = '';
  thisRound.gameGrid.box4 = '';
  thisRound.gameGrid.box5 = '';
  thisRound.gameGrid.box6 = '';
  thisRound.gameGrid.box7 = '';
  thisRound.gameGrid.box8 = '';
  thisRound.gameGrid.box9 = '';
  endGame = false;
  diegoWins.innerText = `${thisRound.player1.wins} wins`;
  waldoWins.innerText = `${thisRound.player2.wins} wins`;
  for (var i = 0; i< tiles.length; i++) {
    tiles[i].innerHTML = '';
    tiles[i].classList.remove('selected');
  }
  if (startingPlayer === thisRound.player1) {
    currentPlayer = thisRound.player2;
    startingPlayer = currentPlayer;
    results.innerText = `It's Waldo's Turn!`;
  } else {
    currentPlayer = thisRound.player1;
    startingPlayer = currentPlayer;
    results.innerText = `It's Carmen's Turn!`;
  }
}
