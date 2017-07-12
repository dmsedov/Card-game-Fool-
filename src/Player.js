export default class Player {
  constructor(name, cards) {
    this.name = name;
    this.cards = cards;
  }
  take(card) {
    return this.cards.push(card);
  }
  give() {
    return this.cards;// try to solve late
  }
}
