import Card from './Card';
import Player from './Player';
import Result from './Result';
import sortFunction from './sortFunction';

export default (nameOfPlayer1, testFunc1, testFunc2, testFunc3) => {
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
  const pack = testFunc1 ? testFunc1(consOfPack(), testFunc2, testFunc3) :
  consOfPack().sort(() => {
    const resultOfsort = Math.random() > 0.5 ? 1 : -1;
    return resultOfsort;
  });
  // making players
  const player1 = new Player(nameOfPlayer1, []);
  const player2 = new Player('Player2', []);
  const addTrumpsToPack = (stackOfCards) => {
    const trumpCard = stackOfCards.slice().reverse()[12];
    const trumpSuit = trumpCard.suit;
    const newPack = stackOfCards.map((card) => {
      const { name, seniority, suit } = card;
      const modifiedCard = card.suit === trumpSuit ? new Card(name, seniority, suit, 'trump') : card;
      return modifiedCard;
    });
    return newPack;
  };
  const packWithTrumps = addTrumpsToPack(pack);
  // distribute cards between of players
  const startDistribute = (gambler1, gambler2, shuffledCards) => {
    if (gambler1.cards.length === 6 && gambler2.cards.length === 6) {
      return [gambler1, gambler2];
    }
    gambler1.addCardFromPack(shuffledCards, 1);
    gambler2.addCardFromPack(shuffledCards, 1);
    return startDistribute(gambler1, gambler2, shuffledCards);
  };
  const playersWithCards = startDistribute(player1, player2, packWithTrumps);
  const preparePackForGame = (arrOfcards) => {
    const trumpCard = arrOfcards.pop();
    arrOfcards.unshift(trumpCard);
    console.log(arrOfcards);
    return arrOfcards;
  };
  const packForGame = preparePackForGame(packWithTrumps);
  const defineWhoStarts = (players) => {
    const playersWithUniqCards = players.map((player) => {
      player.cards.slice().filter((card, index, arr) => arr.indexOf(card) === index);
      return player;
    });
    const playersWithSortedCards = playersWithUniqCards.map((player) => {
      player.cards.slice().sort(sortFunction);
      return player;
    });
    const preparePlayersCardsForCompare = ([pl1, pl2]) => {
      if (pl1.cards.find(card => card.type === 'trump') || pl2.cards.find(card => card.type === 'trump')) {
        const playersWithTrumps = [pl1, pl2].map((player) => {
          const { name, cards } = player;
          const trumpCards = cards.filter(card => card.type === 'trump');
          return new Player(name, trumpCards);
        });
        return playersWithTrumps;
      }
      return [pl1, pl2];
    };
    const playersWithPreparedCards = preparePlayersCardsForCompare(playersWithSortedCards);
    const compareCards = ([pl1, pl2], gamblers) => {
      const leastCardOfPlayer1 = pl1.cards.pop();
      const leastCardOfPlayer2 = pl2.cards.pop();
      if (!leastCardOfPlayer1 && !leastCardOfPlayer2) {
        /* Here is required  the specific desicion */
        return 'required reset';
      }
      if (!leastCardOfPlayer1) {
        return gamblers[1];
      }
      if (!leastCardOfPlayer2) {
        return gamblers[0];
      }
      if (leastCardOfPlayer1.seniority !== leastCardOfPlayer2.seniority) {
        return leastCardOfPlayer1.seniority < leastCardOfPlayer2.seniority ?
         players[0] : players[1];
      }
      return compareCards([pl1, pl2], gamblers);
    };
    return compareCards(playersWithPreparedCards, players);
  };
  const startPlayer = defineWhoStarts(playersWithCards);
  console.log(packForGame, 'packForGame!');
  const runGame = (playerWhoGoesFirst, players, packOfCards) => {
    const gameStats = new Result(startPlayer, players, 0);
    const playerWhoHasToRepulse = playersWithCards.find(player => player !== startPlayer);
    const game = (attackerPlayer, defenderPlayer, resultsOfGame) => {
      if (attackerPlayer.getCountOfCards() === 0) {
        const message = `${attackerPlayer.getName()} win!`;
        resultsOfGame.addToLog(message);
        return resultsOfGame;
      } else if (defenderPlayer.getCountOfCards() === 0) {
        const message = `${defenderPlayer.getName()} win!`;
        resultsOfGame.addToLog(message);
        return resultsOfGame;
      }
      const beatCards = attackerPlayer.giveCards();
      // console.log(beatCards);
      defenderPlayer.takeCards(beatCards);
      const takeCardsFromPack = (firstPlayer, secondPlayer, stackOfCards) => {
        const countOfCardsPl1 = firstPlayer.cards.length;
        const countOfCardsPl2 = secondPlayer.cards.length;
        if (countOfCardsPl2 < 6) {
          secondPlayer.addCardFromPack(stackOfCards, 6 - countOfCardsPl1);
        }
        firstPlayer.addCardFromPack(stackOfCards, 6 - countOfCardsPl1);
      };
      takeCardsFromPack(attackerPlayer, defenderPlayer, packOfCards);
      // console.log(attackerPlayer.getCards(), 'attacked pl');
      // console.log(defenderPlayer.getCards(), 'defender pl');
      const message = `1) Player ${attackerPlayer.getName()} attackerPlayer.status}s the ${beatCards}
      2) Player ${defenderPlayer.getName()} ${defenderPlayer.status}s the ${beatCards}`;
      resultsOfGame.addToLog(message);
      resultsOfGame.increaseRounds();
      if (defenderPlayer.status === 'beat') {
        return game(defenderPlayer, attackerPlayer, resultsOfGame);
      }
      return game(attackerPlayer, defenderPlayer, resultsOfGame);
    };
    return game(playerWhoGoesFirst, playerWhoHasToRepulse, gameStats);
  };
  return runGame(startPlayer, playersWithCards, packForGame);
};
