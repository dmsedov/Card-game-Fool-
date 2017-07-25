export default class Player {
  constructor(name, cards) {
    this.name = name;
    this.cards = cards;
  }
  getName() {
    return this.name;
  }
  getCards() {
    return this.cards;
  }
  getCardsOfRounds() {
    if (!this.cardsOfRounds) {
      this.cardsOfRounds = [];
    }
    return this.cardsOfRounds;
  }
  addCards(arrOfCards) {
    return this.cardsOfGames.push(arrOfCards);
  }
  take(card) {
    return this.cards.push(card);
  }
  give() {
    return this.cards;// try to solve late
  }
}
