import makeGame from '../src/game';
import { getTestPack1, getTestPack2, getTestPack3 } from '../src/testFunctions';
import Card from '../src/Card';
import Player from '..src/Player';


describe('test', () => {
  test('#1 Player "Jack" have to win', () => {
    const game = makeGame('Jack', getTestPack1);

    expect(game.numberOfrounds).toBe(10);
//  check of 1st step
    const Pl1Step1 = [new Card('6', 6, 'heart', 'trump'),
      new Card('Jack', 11, 'heart', 'trump'), new Card('Queen', 12, 'spade', 'ordinary'),
      new Card('Ace', 14, 'heart', 'trump'), new Card('8', 8, 'spade', 'ordinary')];

    const Pl2Step1 = [new Card('6', 6, 'club', 'ordinary'), new Card('7', 7, 'diamond', 'ordinary'),
      new Card('Jack', 11, 'club', 'ordinary'), new Card('Queen', 12, 'diamond', 'ordinary'),
      new Card('Ace', 14, 'club', 'ordinary'), new Card('8', 8, 'diamond', 'ordinary'),
      new Card('7', 7, 'spade', 'ordinary')];

    expect(game.getCardsOfPlayer(0, 'Jack')).toEqual(Pl1Step1);
    expect(game.getCardsOfPlayer(0)).toEqual(Pl2Step1);
//  check of 2nd step
    const Pl1Step2 = [new Card('6', 6, 'heart', 'trump'),
      new Card('Jack', 11, 'heart', 'trump'), new Card('Queen', 12, 'spade', 'ordinary'),
      new Card('Ace', 14, 'heart', 'trump'), new Card('9', 9, 'club', 'ordinary')];

    const Pl2Step2 = [new Card('6', 6, 'club', 'ordinary'), new Card('7', 7, 'diamond', 'ordinary'),
      new Card('Jack', 11, 'club', 'ordinary'), new Card('Queen', 12, 'diamond', 'ordinary'),
      new Card('Ace', 14, 'club', 'ordinary'), new Card('8', 8, 'diamond', 'ordinary'),
      new Card('7', 7, 'spade', 'ordinary'), new Card('8', 8, 'spade', 'ordinary')];

    expect(game.getCardsOfPlayer(1, 'Jack')).toEqual(Pl1Step2);
    expect(game.getCardsOfPlayer(1)).toEqual(Pl2Step2);
//  check of 3rd step
    const Pl1Step3 = [new Card('6', 6, 'heart', 'trump'),
      new Card('Jack', 11, 'heart', 'trump'), new Card('Queen', 12, 'spade', 'ordinary'),
      new Card('Ace', 14, 'heart', 'trump'),  new Card('10', 10, 'spade', 'ordinary')];

    const Pl2Step3 = [new Card('6', 6, 'club', 'ordinary'), new Card('7', 7, 'diamond', 'ordinary'),
      new Card('Queen', 12, 'diamond', 'ordinary'), new Card('Ace', 14, 'club', 'ordinary'),
      new Card('8', 8, 'diamond', 'ordinary'), new Card('7', 7, 'spade', 'ordinary'),
      new Card('8', 8, 'spade', 'ordinary')];

    expect(game.getCardsOfPlayer(2, 'Jack')).toEqual(Pl1Step3);
    expect(game.getCardsOfPlayer(2)).toEqual(Pl2Step3);
//  check of 4th step
    const Pl1Step4 = [new Card('Jack', 11, 'heart', 'trump'), new Card('Queen', 12, 'spade', 'ordinary'),
      new Card('Ace', 14, 'heart', 'trump'),  new Card('10', 10, 'spade', 'ordinary'),
      new Card('10', 10, 'diamond', 'ordinary')];

    const Pl2Step4 = [new Card('7', 7, 'diamond', 'ordinary'),
      new Card('Queen', 12, 'diamond', 'ordinary'), new Card('Ace', 14, 'club', 'ordinary'),
      new Card('8', 8, 'diamond', 'ordinary'), new Card('7', 7, 'spade', 'ordinary'),
      new Card('8', 8, 'spade', 'ordinary')];

    expect(game.getCardsOfPlayer(3, 'Jack')).toEqual(Pl1Step4);
    expect(game.getCardsOfPlayer(3)).toEqual(Pl2Step4);
//  check of 5th step
    const Pl1Step5 = [new Card('Jack', 11, 'heart', 'trump'), new Card('Queen', 12, 'spade', 'ordinary'),
      new Card('Ace', 14, 'heart', 'trump'), new Card('King', 13, 'heart', 'trump')];

    const Pl2Step5 = [new Card('7', 7, 'diamond', 'ordinary'),
      new Card('Queen', 12, 'diamond', 'ordinary'), new Card('Ace', 14, 'club', 'ordinary'),
      new Card('8', 8, 'diamond', 'ordinary'), new Card('7', 7, 'spade', 'ordinary'),
      new Card('8', 8, 'spade', 'ordinary'), new Card('10', 10, 'spade', 'ordinary'),
      new Card('10', 10, 'diamond', 'ordinary')];

    expect(game.getCardsOfPlayer(4, 'Jack')).toEqual(Pl1Step5);
    expect(game.getCardsOfPlayer(4)).toEqual(Pl2Step5);
//  check of 6th step
    const Pl1Step6 = [new Card('Jack', 11, 'heart', 'trump'), new Card('Ace', 14, 'heart', 'trump'),
      new Card('King', 13, 'heart', 'trump'), new Card('King', 13, 'club', 'ordinary'),
      new Card('9', 9, 'heart', 'trump')];

    const Pl2Step6 = [new Card('7', 7, 'diamond', 'ordinary'),
      new Card('Queen', 12, 'diamond', 'ordinary'), new Card('Ace', 14, 'club', 'ordinary'),
      new Card('8', 8, 'diamond', 'ordinary'), new Card('7', 7, 'spade', 'ordinary'),
      new Card('8', 8, 'spade', 'ordinary'), new Card('10', 10, 'spade', 'ordinary'),
      new Card('10', 10, 'diamond', 'ordinary'), new Card('Queen', 12, 'spade', 'ordinary')];

    expect(game.getCardsOfPlayer(5, 'Jack')).toEqual(Pl1Step6);
    expect(game.getCardsOfPlayer(5)).toEqual(Pl2Step6);
//  check of 7th step
    const Pl1Step7 = [new Card('Jack', 11, 'heart', 'trump'), new Card('Ace', 14, 'heart', 'trump'),
      new Card('King', 13, 'heart', 'trump'), new Card('King', 13, 'club', 'ordinary')];

    const Pl2Step7 = [new Card('7', 7, 'diamond', 'ordinary'),
      new Card('Queen', 12, 'diamond', 'ordinary'), new Card('Ace', 14, 'club', 'ordinary'),
      new Card('8', 8, 'diamond', 'ordinary'), new Card('7', 7, 'spade', 'ordinary'),
      new Card('8', 8, 'spade', 'ordinary'), new Card('10', 10, 'spade', 'ordinary'),
      new Card('10', 10, 'diamond', 'ordinary'), new Card('Queen', 12, 'spade', 'ordinary'),
      new Card('9', 9, 'heart', 'trump')];

    expect(game.getCardsOfPlayer(6, 'Jack')).toEqual(Pl1Step7);
    expect(game.getCardsOfPlayer(6)).toEqual(Pl2Step7);
//  check of 8th step
    const Pl1Step8 = [new Card('Ace', 14, 'heart', 'trump'),
      new Card('King', 13, 'heart', 'trump'), new Card('King', 13, 'club', 'ordinary')];

    const Pl2Step8 = [new Card('7', 7, 'diamond', 'ordinary'),
      new Card('Queen', 12, 'diamond', 'ordinary'), new Card('Ace', 14, 'club', 'ordinary'),
      new Card('8', 8, 'diamond', 'ordinary'), new Card('7', 7, 'spade', 'ordinary'),
      new Card('8', 8, 'spade', 'ordinary'), new Card('10', 10, 'spade', 'ordinary'),
      new Card('10', 10, 'diamond', 'ordinary'), new Card('Queen', 12, 'spade', 'ordinary'),
      new Card('9', 9, 'heart', 'trump'), new Card('Jack', 11, 'heart', 'trump')];

    expect(game.getCardsOfPlayer(7, 'Jack')).toEqual(Pl1Step8);
    expect(game.getCardsOfPlayer(7)).toEqual(Pl2Step8);
//  check of 9th step
    const Pl1Step9 = [new Card('Ace', 14, 'heart', 'trump')];

    const Pl2Step9 = [new Card('7', 7, 'diamond', 'ordinary'),
      new Card('Queen', 12, 'diamond', 'ordinary'), new Card('Ace', 14, 'club', 'ordinary'),
      new Card('8', 8, 'diamond', 'ordinary'), new Card('7', 7, 'spade', 'ordinary'),
      new Card('8', 8, 'spade', 'ordinary'), new Card('10', 10, 'spade', 'ordinary'),
      new Card('10', 10, 'diamond', 'ordinary'), new Card('Queen', 12, 'spade', 'ordinary'),
      new Card('9', 9, 'heart', 'trump'), new Card('Jack', 11, 'heart', 'trump'),
      new Card('King', 13, 'club', 'ordinary'), new Card('King', 13, 'heart', 'trump')];

    expect(game.getCardsOfPlayer(8, 'Jack')).toEqual(Pl1Step9);
    expect(game.getCardsOfPlayer(8)).toEqual(Pl2Step9);
//  check of 10th step
    const Pl1Step10 = [];

    const Pl2Step10 = [new Card('7', 7, 'diamond', 'ordinary'),
      new Card('Queen', 12, 'diamond', 'ordinary'), new Card('Ace', 14, 'club', 'ordinary'),
      new Card('8', 8, 'diamond', 'ordinary'), new Card('7', 7, 'spade', 'ordinary'),
      new Card('8', 8, 'spade', 'ordinary'), new Card('10', 10, 'spade', 'ordinary'),
      new Card('10', 10, 'diamond', 'ordinary'), new Card('Queen', 12, 'spade', 'ordinary'),
      new Card('9', 9, 'heart', 'trump'), new Card('Jack', 11, 'heart', 'trump'),
      new Card('King', 13, 'club', 'ordinary'), new Card('King', 13, 'heart', 'trump'),
      new Card('Ace', 14, 'heart', 'trump')];

    expect(game.getCardsOfPlayer(9, 'Jack')).toEqual(Pl1Step10);
    expect(game.getCardsOfPlayer(9)).toEqual(Pl2Step10);
  });

  test('#2 Player "Jack" have to go the first', () => {
    const game = makeGame('Jack', getTestPack3, getTestPack2, getTestPack1);

    const cardsOfPlayer = [new Card('6', 6, 'diamond', 'ordinary'), new Card('7', 7, 'spade', 'ordinary'),
      new Card('9', 9, 'diamond', 'ordinary'), new Card('Queen', 12, 'spade', 'ordinary'),
      new Card('Ace', 14, 'diamond', 'ordinary'), new Card('8', 8, 'spade', 'ordinary')];
      const player = new Player('Jack', cardsOfPlayer);

    expect(game.getPlayerWhoGoesFirst().toEqual(player));
  });
});
