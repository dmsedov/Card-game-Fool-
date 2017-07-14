export default class Card {
  constructor(name, seniority, suit, type) {
    this.name = name;
    this.seniority = seniority;
    this.suit = suit;
    this.type = type;
  }
  getName() {
    return this.name;
  }
  getSeniority() {
    return this.seniority;
  }
  getType() {
    return this.type;
  }
}
