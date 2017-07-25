export default class Result {
  constructor(startPlayer, players) {
    this.startPlayer = startPlayer;
    this.players = players;
  }
  getPlayerWhoGoesFirst() {
    return this.startPlayer;
  }
  getLog() {
    return this.log;
  }
  addToLog(message) {
    if (!this.log) {
      this.log = [];
      this.log.push(message);
    }
    this.log.push(message);
  }
  getCardsOfPlayer(index, playerName) {
    if (playerName) {
      return this.players[0].getCardsOfRounds();
    }
    return this.players[1].getCardsOfRounds();
  }
}
