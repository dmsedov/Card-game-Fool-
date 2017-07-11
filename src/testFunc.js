const testPack = (pack) => {
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

export  { testPack };
