class Game {
  constructor(player1, player2) {
    this.player1 = new Player(id, token);
    this.player2 = new Player(id, token);
  }

  makeMove(){
    var currentPlayer = this.player1;
    var gameGrid = document.querySelector(".grid");
    var tiles = document.querySelectorAll(".grid div");
    gameGrid.addEventListener('click', makeMove);
    if (tiles[i].classList.contains('selected')) {
      if (currentPlayer === player1) {
        tiles[i].classList.add('selected');
        tiles[i].classList.add(this.player1.token);
        currentPlayer = player2;
        tiles.innerHTML = diego;
      } else if (currentPlayer === player2 ) {
        tiles[i].classList.add('selected');
        tiles[i].classList.add(this.player2.token);
        currentPlayer = player1;
        tiles.innerHTML = waldo;
      } else alert('This tile is taken!');
      checkWinDraw();
    }
  }

  checkWinDraw() {
    for (var i = 0; i < winConditions.length; i++) {
    var tile1 = tiles[winConditions[i][0];
    var tile2 = tiles[winConditions[i][1];
    var tile3 = tiles[winConditions[i][2];
    if (
        tile1.classList.contains(player1.token) &&
        tile2.classList.contains(player1.token) &&
        tile3.classList.contains(player1.token)) {
        winning();
      } else if (tile1.classList.contains(player2.token) &&
        tile2.classList.contains(player2.token) &&
        tile3.classList.contains(player2.token)) {
        tiedGame();
      } else {
        makeMove();
      }
    }
  }

  winning() {
    this.player.wins === player.wins + 1;
    results.innerText = `${this.player} wins!`
    setTimeout();
  }

  tiedGame() {
    results.innerText = `This game is a draw!`
    setTimeout()
  }

  setTimeout(startGame() {
  }, 3000};

}


// A Game should include:
// A way to keep track of the data for the game board
// A way to keep track of which player’s turn it currently is
// A way to check the Game’s board data for win conditions
// A way to detect when a game is a draw (no one has won)
// A way to reset the Game’s board to begin a new game
