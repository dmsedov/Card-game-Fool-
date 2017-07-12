export default class Card {
  constructor(name, range, suit, type) {
    this.name = name;
    this.range = range;
    this.suit = suit;
    this.type = type;
  }
  getName() {
    return this.name;
  }
  getRange() {
    return this.range;
  }
  getType() {
    return this.type;
  }
}
