class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.wins = 0;
    this.active = true;
  }

  increaseWins(draw) {
    if (draw === true) {
      this.wins = this.wins + 0;
    } else {
      this.wins = this.wins + 1;
    }
  }
}
