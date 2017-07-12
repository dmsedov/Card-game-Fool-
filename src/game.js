import Card from './Card';
import Player from './Player';

export default (nameOfPlayer1, testFunc) => {
  // shuffle of cards
  const consOfPack = () => {
    const pack = [];
    const names = ['Ace', 'King', 'Queen', 'Jack', '10', '9', '8', '7', '6'];
    const ranges = [14, 13, 12, 11, 10, 9, 8, 7, 6];
    const suits = ['heart', 'club', 'spade', 'diamond'];
    const iter = (ArrOfNames, ArrOfRanges, ArrOfSuits, acc) => {
      if (ArrOfNames.length === 0) {
        return acc;
      }
      const itemOfName = ArrOfNames.pop();
      const itemOfRange = ArrOfRanges.pop();
      const heart = new Card(itemOfName, itemOfRange, ArrOfSuits[0], 'ordinary');
      const diamond = new Card(itemOfName, itemOfRange, ArrOfSuits[1], 'ordinary');
      const spade = new Card(itemOfName, itemOfRange, ArrOfSuits[2], 'ordinary');
      const club = new Card(itemOfName, itemOfRange, ArrOfSuits[3], 'ordinary');
      acc.push(heart, diamond, spade, club);
      return iter(ArrOfNames, ArrOfRanges, ArrOfSuits, acc);
    };
    return iter(names, ranges, suits, pack);
  };
  const pack = testFunc ? testFunc(consOfPack()) :
  consOfPack().sort(() => Math.random() > 0.5 ? 1 : -1);
};
