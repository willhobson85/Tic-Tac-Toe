class Game {
  constructor(player1, player2) {
    this.player1 = new Player('Player1', 'diego');
    this.player2 = new Player('Player2', 'waldo');
    this.gameGrid = {};
    this.draw = false;
  }
}
