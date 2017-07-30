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
