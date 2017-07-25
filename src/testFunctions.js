import Card from './Card';

const getTestPack1 = (pack) => {
  const part1 = pack.filter((card) => {
    const heartOrclub = card.suit === 'heart' || card.suit === 'club';
    const spadeOrdiamond = card.suit === 'spade' || card.suit === 'diamond';
    if (card.name === '6' && heartOrclub) {
      return true;
    }
    if (card.name === '7' && spadeOrdiamond) {
      return true;
    }
    if (card.name === 'Jack' && heartOrclub) {
      return true;
    }
    if (card.name === 'Queen' && spadeOrdiamond) {
      return true;
    }
    if (card.name === 'Ace' && heartOrclub) {
      return true;
    }
    return false;
  });
  const part2 = pack.filter((card) => {
    const heartOrclub = card.suit === 'heart' || card.suit === 'club';
    const spadeOrdiamond = card.suit === 'spade' || card.suit === 'diamond';
    if (card.name === '8' && spadeOrdiamond) {
      return true;
    }
    if (card.name === '9' && heartOrclub) {
      return true;
    }
    if (card.name === '10' && spadeOrdiamond) {
      return true;
    }
    if (card.name === 'King' && heartOrclub) {
      return true;
    }
    return false;
  });
  part2.forEach(element => part1.push(element));
  return part1.reverse();
};

const getTestPack2 = (pack, testFunc) => {
  const cards = testFunc(pack).map((card) => {
    const { name, seniority, suit, type } = card;
    if (name === '6' && suit === 'heart') {
      return new Card(name, seniority, 'diamond', type);
    }
    if (name === 'Jack' && suit === 'heart') {
      return new Card(name, seniority, 'diamond', type);
    }
    if (name === 'Ace' && suit === 'heart') {
      return new Card(name, seniority, 'diamond', type);
    }
    return card;
  });
  return cards;
};

const getTestPack3 = (pack, testFunc1, testFunc2) => {
  const cards = testFunc1(pack, testFunc2);
  const newCards = cards.map((card) => {
    const { name, suit, type } = card;
    if (name === 'Jack' && suit === 'diamond') {
      return new Card('9', 9, 'diamond', type);
    }
    return card;
  });
  return newCards;
};

export { getTestPack1, getTestPack2, getTestPack3 };
