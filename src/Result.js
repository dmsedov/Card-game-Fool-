export default class Result {
  constructor(startPlayer, players, numberOfrounds) {
    this.startPlayer = startPlayer;
    this.players = players;
    this.numberOfrounds = numberOfrounds;
  }
  getPlayerWhoGoesFirst() {
    return this.startPlayer;
  }
  getLog() {
    return this.log;
  }
  increaseRounds() {
    this.numberOfrounds += 1;
    return this.numberOfrounds;
  }
  addToLog(message) {
    if (!this.log) {
      this.log = [];
      this.log.push(message);
    }
    this.log.push(message);
  }
  getCardsOfPlayer(round, playerName) {
    if (playerName === this.players[0].name) {
      return this.players[0].getCardsOfRound(round);
    }
    return this.players[1].getCardsOfRound(round);
  }
}
