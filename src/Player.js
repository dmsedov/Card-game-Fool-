import { sortByDecrease, sortByIncrease } from './sortFunctions';

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
  addCardsOfRounds(cardsOfRounds) {
    const cards = !this.cardsOfRounds ? this.cardsOfRounds = [] : this.cardsOfRounds;
    const newArrayOfcards = [];
    newArrayOfcards.push(...cardsOfRounds);
    cards.push(newArrayOfcards);
    console.log(this.cardsOfRounds);
    return this.cardsOfRounds;
  }
  getCardsOfRound(round) {
    return this.cardsOfRounds[round];
  }
  addCardFromPack(pack, count) {
    const iter = (arrOfCards, num) => {
      if (num === 0) {
        return;
      }
      const topCard = arrOfCards.pop();
      this.cards.push(topCard);
      iter(arrOfCards, num - 1);
    };
    iter(pack, count);
  }
  takeCards(arrOfCards) {
    const sortedCardsOfPlayer = this.cards.slice().sort(sortByIncrease);
    const iter = ([head, ...rest], cardsOfPlayer, acc) => {
      const desiredCard1 = cardsOfPlayer.find((card, index, array) => {
        const checkingSeniority = card.seniority > head.seniority;
        const checkingSuit = card.suit === head.suit;
        const checkingType = card.type === head.type;
        if (checkingSeniority && checkingSuit && checkingType) {
          array.splice(index, 1);
          return 1;
        }
        return 0;
      });
      const desiredCard2 = cardsOfPlayer.find((card, index, array) => {
        if (card.type === 'trump' && head.type === 'ordinary') {
          array.splice(index, 1);
          return 1;
        }
        return 0;
      });
      if (desiredCard1) {
        acc.push(desiredCard1);
      } else if (desiredCard2) {
        acc.push(desiredCard2);
      }
      if (rest.length === 0) {
        return acc;
      }
      return iter(rest, cardsOfPlayer, acc);
    };
    const satisfactoryCards = iter(arrOfCards, sortedCardsOfPlayer, []);
    if (satisfactoryCards.length === arrOfCards.length) {
      const setOfcards = new Set(satisfactoryCards);
      this.cards = this.cards.filter(cards => !setOfcards.has(cards));
      this.status = 'beat';
      return;
    }
    this.status = 'take';
    this.cards.push(...arrOfCards);
  }
  giveCards(pack) {
    this.status = 'lead';
    const cardsOrdinary = this.cards.filter(card => card.getType() === 'ordinary');
    const cardsTrump = this.cards.filter(card => card.getType() === 'trump');
    const countTrumpCards = this.cards.reduce((acc, card) => {
      if (card.type === 'trump') {
        return acc + 1;
      }
      return acc;
    }, 0);
    const countOrdinaryCards = this.cards.reduce((acc, card) => {
      if (card.type === 'ordinary') {
        return acc + 1;
      }
      return acc;
    }, 0);
    const defineWhichCardsGive = (trumpCards, ordinaryCards) => {
      if (trumpCards.length === 0 && ordinaryCards.length === 0) {
        return [];
      }
      if (ordinaryCards.length === 0) {
        trumpCards.sort(sortByDecrease);
        const leadCard1 = trumpCards.pop();
        const { name } = leadCard1;
        this.cards = this.cards.filter(card => card.name !== name);
        return [leadCard1];
      }
      ordinaryCards.sort(sortByDecrease);
      const leadCard2 = ordinaryCards.pop();
      const arrOfCards = ordinaryCards.reduce((acc, card) => {
        const { name } = acc[0];
        if (card.name === name) {
          acc.push(card);
          return acc;
        }
        return acc;
      }, [leadCard2]).reverse();
      this.cards = this.cards.filter((card) => {
        if (card.name === leadCard2.name && card.type !== leadCard2.type) {
          return 1;
        } else if (card.name !== leadCard2.name) {
          return 1;
        }
        return 0;
      });
      return arrOfCards;
    };
    const hasSameSenTrumpCard = (trumpCards, ordinaryCards) => {
      if (trumpCards.length !== 0 && ordinaryCards.length !== 0) {
        const leastCard = ordinaryCards.slice().sort(sortByDecrease).pop();
        const desiredCard = trumpCards.find(card => card.name === leastCard.name);
        const assertion = desiredCard ? 1 : 0;
        return assertion;
      }
      return 0;
    };
    const delta = countTrumpCards - countOrdinaryCards;
    if (pack.length === 0 && (delta >= countOrdinaryCards || delta === 0)
       && hasSameSenTrumpCard(cardsTrump, cardsOrdinary)) {
      const topCard = cardsOrdinary.sort(sortByDecrease).pop();
      const cardsWithSameName = this.cards.slice().sort(sortByDecrease)
      .filter(card => card.name === topCard.name);
      const setOfSameCards = new Set(cardsWithSameName);
      this.cards = this.cards.filter(cards => !setOfSameCards.has(cards));
      const cardsOrdinary1 = this.cards.filter(card => card.getType() === 'ordinary');
      const cardsTrump1 = this.cards.filter(card => card.getType() === 'trump');
      const leadCards = defineWhichCardsGive(cardsTrump1, cardsOrdinary1);
      this.cards.push(...cardsWithSameName);
      if (leadCards.length === 0) {
        const lastLeadCards = new Set(cardsWithSameName);
        this.cards = this.cards.filter(cards => !lastLeadCards.has(cards));
        return cardsWithSameName;
      }
      return leadCards;
    }
    return defineWhichCardsGive(cardsTrump, cardsOrdinary);
  }
}
