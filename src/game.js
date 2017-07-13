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
  const makeTrumps = () => {
    const defTrump = pack.pop();
    const trumpSuit = defTrump.suit;
    playersWithCards.map(player => player.cards.map((card) => {
      const trump = card.suit === trumpSuit ? card.type = 'trump' : card;
      return trump;
    }));
    const topOfPack = [defTrump];
    topOfPack.push(...pack);
    const newPack = topOfPack.map((card) => {
      card.suit === trumpSuit ? card.type = 'trump' : card;
      return card;
    });
    return newPack;
  };
  const newPack = makeTrumps();
  const defineWhoStart = (players) => {
    const playersWithTrumps = players.map(player => player.cards.filter(card => card.type === 'trump'));
    const pl1 = playersWithTrumps[0];
    const pl2 = playersWithTrumps[1];
    const compareCards = ([player1, player2]) => {
      const cardOfPlayer1 = player1.cards.pop(); // the least card of player 1
      const cardOfPlayer2 = player2.cards.pop(); // the least card of player 2
      // if (player1.cards === undefined || ){
        if (cardOfPlayer1.range !== cardOfPlayer2.range) {
          return cardOfPlayer1.range < cardOfPlayer2.range ? player1 : player2;
        }
      }
      return compareCards([player1, player2]);
    };
    if (pl1.cards.length === 0 && pl2.cards.length === 0) {
      /* define the least card range of given cards;
      case when players don't have trumps*/
      const playersWithSortCards = players.map(player => player.cards.sort((a, b) => {
        if (a.range > b.range) {
          return -1;
        }
        if (a.range < b.range) {
          return 1;
        }
        return 0;
      }));
      return compareCards(players.slice());
    }
    return compareCards(playersWithTrumps);
  };
  const runGame = () => {
    // definition who go first
  };
  return defineWhoStart(playersWithCards);
};
