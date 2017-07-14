import Card from './Card';
import Player from './Player';

export default (nameOfPlayer1, testFunc) => {
  // shuffle of cards
  const consOfPack = () => {
    const pack = [];
    const names = ['Ace', 'King', 'Queen', 'Jack', '10', '9', '8', '7', '6'];
    const seniority = [14, 13, 12, 11, 10, 9, 8, 7, 6];
    const suits = ['heart', 'club', 'spade', 'diamond'];
    const iter = (ArrOfNames, ArrOfSeniority, ArrOfSuits, acc) => {
      if (ArrOfNames.length === 0) {
        return acc;
      }
      const itemOfName = ArrOfNames.pop();
      const itemOfSeniority = ArrOfSeniority.pop();
      const heart = new Card(itemOfName, itemOfSeniority, ArrOfSuits[0], 'ordinary');
      const diamond = new Card(itemOfName, itemOfSeniority, ArrOfSuits[1], 'ordinary');
      const spade = new Card(itemOfName, itemOfSeniority, ArrOfSuits[2], 'ordinary');
      const club = new Card(itemOfName, itemOfSeniority, ArrOfSuits[3], 'ordinary');
      acc.push(heart, diamond, spade, club);
      return iter(ArrOfNames, ArrOfSeniority, ArrOfSuits, acc);
    };
    return iter(names, seniority, suits, pack);
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
    const playersWithSortedCards = players.map((player) => {
      player.cards.sort((a, b) => {
        if (a.seniority > b.seniority) {
          return -1;
        }
        if (a.seniority < b.seniority) {
          return 1;
        }
        return 0;
      });
      return player;
    });
    const prepareCardsForCompare = ([pl1, pl2]) => {
      if (pl1.cards.find(card => card.type === 'trump') || pl2.cards.find(card => card.type === 'trump')) {
        const g = [pl1, pl2].map((player) => {
          // const filteredCards = ;
          // console.log(player.cards.filter(card => card.type === 'trump'));
          player.cards = player.cards.filter(card => card.type === 'trump');
          return player;
        });
        console.log(g);
        return g;
      }
      return [pl1, pl2];
    };
    const preparedCards = prepareCardsForCompare(playersWithSortedCards);
    const compareCards = ([pl1, pl2]) => {
      const leastCardOfPlayer1 = pl1.cards.pop();
      const leastCardOfPlayer2 = pl2.cards.pop();
      if (!leastCardOfPlayer1 && !leastCardOfPlayer2) {
        /* Here is required  the specific desicion */
      }
      if (!leastCardOfPlayer1) {
        return players[1];
      }
      if (!leastCardOfPlayer2) {
        return players[0];
      }
      if (leastCardOfPlayer1.seniority !== leastCardOfPlayer2.seniority) {
        return leastCardOfPlayer1.seniority < leastCardOfPlayer2.seniority ?
         players[0] : players[1];
      }
      return compareCards([pl1, pl2]);
    };
    return compareCards(preparedCards);
  };
  const runGame = () => {
    // definition who go first
  };
  return defineWhoStart(playersWithCards);
};
