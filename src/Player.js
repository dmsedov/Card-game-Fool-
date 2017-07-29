import sortFunction from './sortFunction';

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
  getCountOfCards() {
    return this.cards.length;
  }
  getCardsOfRounds() {
    if (!this.cardsOfRounds) {
      this.cardsOfRounds = [];
    }
    return this.cardsOfRounds;
  }
  addCardFromPack(pack, count) {
    if (count === 1) {
      this.cards.push(pack.pop());
      return;
    }
    this.cards.push(...(pack.slice(-count)));
    const startPoint = (pack.length - 1) - count;
    pack.splice(startPoint, count);
  }
  takeCards(arrOfCards) {
    const iter = ([head, ...rest], acc) => {
      if (rest.length === 0) {
        return acc;
      }
      const desiredCard = this.cards.find((card) => {
        const checkingSeniority = card.seniority > head.seniority;
        const checkingSuit = card.suit === head.suit;
        if (card.type === head.type) {
          return checkingSeniority && checkingSuit;
        }
        return card.type === 'trump' ? 1 : 0;
      });
      if (desiredCard) {
        acc.push(desiredCard);
        return iter(rest, acc);
      }
      return acc;
    };
    const satisfactoryCards = iter(arrOfCards, []);
    if (satisfactoryCards.length === arrOfCards.length) {
      const setOfcards = new Set(satisfactoryCards);
      this.cards = this.cards.filter(cards => !setOfcards.has(cards));
      this.status = 'beat';
      return;
    }
    this.status = 'take';
    this.cardsOfRounds.push(arrOfCards);
  }
  giveCards() {
    const cardsOrdinary = this.cards.filter(card => card.type === 'ordinary');
    const cardsTrump = this.cards.filter(card => card.type === 'trump');
    this.status = 'go';
    if (cardsOrdinary.length === 0) {
      cardsTrump.sort(sortFunction);
      const minCard1 = cardsTrump.pop();
      const { name } = minCard1;
      this.cards = this.cards.filter(card => card.name !== name);
      return [minCard1];
    }
    cardsOrdinary.sort(sortFunction);
    const minCard2 = cardsOrdinary.pop();
    const arrOfCards = cardsOrdinary.reduce((acc, card) => {
      const { name } = acc[0];
      if (card.name === name) {
        acc.push(card);
        return acc;
      }
      return acc;
    }, [minCard2]).reverse();
    this.cards = this.cards.filter(card => card.name !== minCard2.name);
    return arrOfCards;
  }
}
