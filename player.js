class Player {
  constructor(name, token) {
    this.name = name;
    this.token = token;
    this.wins = 0;
    this.active = true;
  }

  increaseWins() {
    this.wins = this.wins + 1;
  }
}
