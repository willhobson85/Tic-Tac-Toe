class Game() {
  constructor() {
    this.player1 = new Player(id, token);
    this.player2 = new Player(id, token);
  }

  makeMove(){
    //innerText = currentPlayer

    //place token
    // disable box click
  }

  checkWinDraw() {
    var winConditions = [
      {"box1", "box2", "box3"},
      {"box4", "box5", "box6"},
      {"box7", "box8", "box9"},
      {"box1", "box4", "box7"},
      {"box2", "box5", "box8"},
      {"box3", "box6", "box9"},
      {"box1", "box5", "box9"},
      {"box3", "box5", "box7"}
    ];
    if (something) {
      winning();
    } else if (something) {
      tiedGame();
    } else {
      makeMove();
    }
  }

  winning() {
    this.player.wins === player.wins + 1;
    //h2 = player wins!
    timerCountdown();
  }

  // setTimeout(function () {
  // }, 3000};

}

// A Game should include:
// A way to keep track of the data for the game board
// A way to keep track of which player’s turn it currently is
// A way to check the Game’s board data for win conditions
// A way to detect when a game is a draw (no one has won)
// A way to reset the Game’s board to begin a new game
