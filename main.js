//Variables
var thisRound = new Game('X', 'O');
var currentPlayer = thisRound.player1;
var startingPlayer = currentPlayer;
var drawCondition = [
  'box1',
  'box2',
  'box3',
  'box4',
  'box5',
  'box6',
  'box7',
  'box8',
  'box9'
]
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

//Event Listeners
gameGrid.addEventListener('click', makeMove)

//functions

function makeMove(){
  var tile = document.querySelector(`#${event.target.id}`)
  if (!tile.classList.contains('selected')) {
    if (currentPlayer === thisRound.player1) {
      tile.classList.add('selected');
      thisRound.gameGrid[event.target.id] = thisRound.player1.token;
      tile.innerHTML = '<img class="player1" src="./assets/Sandiego.png" alt="Carmen Sandiego\'s Hat">'
      currentPlayer = thisRound.player2;
      results.innerText = `It's Waldo's Turn!`;
    } else if (currentPlayer === thisRound.player2 ) {
      tile.classList.add('selected');
      thisRound.gameGrid[event.target.id] = thisRound.player2.token;
      tile.innerHTML = '<img class="player2" src="./assets/Waldo.jpeg" alt="Waldo\'s red and white striped clothes and glasses">'
      currentPlayer = thisRound.player1;
      results.innerText = `It's Carmen's Turn!`;
    }
  } else alert('This tile is taken!');
  checkWinDraw();
}


function checkWinDraw() {
  var tile1 = thisRound.gameGrid[winConditions[0][0]];
  var tile2 = thisRound.gameGrid[winConditions[0][1]];
  var tile3 = thisRound.gameGrid[winConditions[0][2]];
  for (var i = 0; i < winConditions.length; i++) {
    tile1 = thisRound.gameGrid[winConditions[i][0]];
    tile2 = thisRound.gameGrid[winConditions[i][1]];
    tile3 = thisRound.gameGrid[winConditions[i][2]];
    if (tile1 === tile2 && tile2 === tile3 && tile3 === 'diego') {
      winning(tile1);
    } else if (tile1 === tile2 && tile2 === tile3 && tile3 === 'waldo' ) {
      winning(tile1);
    }
  }
}

function checkDraw() {
  //run loop to check contains("selected");
  // if all contain selected && !winning() return draw message
  //restart game
}

function winning(winner) {
  if (winner === 'waldo') {
    thisRound.player2.increaseWins();
    results.innerText = `Waldo wins!`;
  } else if (winner === 'diego'){
    thisRound.player1.increaseWins();
    results.innerText = `Carmen wins!`;
  }
  setTimeout(startGame, 3000);
}

function tiedGame() {
  results.innerText = `This game is a draw!`;
  setTimeout(startGame, 3000);
}

function startGame() {
  // results.innerText = "Restarting Game..."
  thisRound.gameGrid.box1 = '';
  thisRound.gameGrid.box2 = '';
  thisRound.gameGrid.box3 = '';
  thisRound.gameGrid.box4 = '';
  thisRound.gameGrid.box5 = '';
  thisRound.gameGrid.box6 = '';
  thisRound.gameGrid.box7 = '';
  thisRound.gameGrid.box8 = '';
  thisRound.gameGrid.box9 = '';
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
