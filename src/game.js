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
  consOfPack().sort(() => Math.random() > 0.5 ? 1 : -1);/* potential Error;
  if testFunc be entered by user may be it'll require try...catch block*/
  // making players
  const player1 = new Player(nameOfPlayer1, []);
  const player2 = new Player('Player2', []);
  // distribute cards between of players
  const startDistribute = (gambler1, gambler2, cards) => {
    if (gambler1.cards.length === 6 && gambler2.cards.length === 6) {
      return [gambler1, gambler2];
    }
    let topCard;
    topCard = cards.pop();
    gambler1.take(topCard);
    topCard = cards.pop();
    gambler2.take(topCard);
    return startDistribute(gambler1, gambler2, cards);
  };
  const playersWithCards = startDistribute(player1, player2, pack);
  // definition of trump
  const defineTrump = () => {
    const defTrump = pack.pop();
    const trumpSuit = defTrump.suit;
    playersWithCards.map(player => player.cards.map((card) => {
      const trump = card.suit === trumpSuit ? card.type = 'trump' : card;
      return trump;
    }));
    const topOfPack = [defTrump];
    // newPack.
    topOfPack.push(...pack);
    const newPack = topOfPack.map((card) => {
      card.suit === trumpSuit ? card.type = 'trump' : card;
      return card;
    });
    return newPack;
  };
  return defineTrump();
};
