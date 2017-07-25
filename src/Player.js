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
  takeCard(card) {
    return this.cards.push(card);
  }
  giveCards() {
    const cardsOrdinary = this.cards.filter(card => card.type === 'ordinary');
    const cardsTrump = this.cards.filter(card => card.type === 'trump');
    if (cardsOrdinary.length === 0) {
      cardsTrump.sort((a, b) => {
        if (a.seniority > b.seniority) {
          return -1;
        }
        if (a.seniority < b.seniority) {
          return 1;
        }
        return 0;
      });
      const minCard1 = cardsTrump.pop();
      const { name } = minCard1;
      this.cards = this.cards.filter(card => card.name !== name);
      return [minCard1];
    }
    cardsOrdinary.sort((a, b) => {
      if (a.seniority > b.seniority) {
        return -1;
      }
      if (a.seniority < b.seniority) {
        return 1;
      }
      return 0;
    });
    const minCard2 = cardsOrdinary.pop();
    const arrOfCards = cardsOrdinary.reduce((acc, card) => {
      const { name } = acc[0];
      if (card.name === name) {
        return acc.push(card);
      }
      return acc;
    }, [minCard2]).reverse();
    this.cards = this.cards.filter(card => card.name !== minCard2.name);
    return arrOfCards;
  }
}
