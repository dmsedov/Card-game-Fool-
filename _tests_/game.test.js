import makeGame from '../src/game';
import { testPack } from '../src/testFunc';
import Card from '../src/Card';

describe('my beverage', () => {
  test('#1 Should works with defined pack', () => {
    const game = makeGame('Jack', testPack);

    expect(game.numberOfrounds).toBe(10);
//  check of 1st step
    const Pl1Step1 = [new Card('6', 6, 'heart', 'trump'),
      new Card('Jack', 11, 'heart', 'trump'), new Card('Queen', 12, 'spade', 'ordinary'),
      new Card('Ace', 14, 'heart', 'trump'), new Card('8', 8, 'spade', 'ordinary')];

    const Pl2Step1 = [new Card('6', 6, 'club', 'ordinary'), new Card('7', 7, 'diamond', 'ordinary'),
      new Card('Jack', 11, 'club', 'ordinary'), new Card('Queen', 12, 'diamond', 'ordinary'),
      new Card('Ace', 14, 'club', 'ordinary'), new Card('8', 8, 'diamond', 'ordinary'),
      new Card('7', 7, 'spade', 'ordinary')];

    expect(game.getCardofPlayer(1, 'Jack')).toEqual(Pl1Step1);
    expect(game.getCardofPlayer(1)).toEqual(Pl2Step1);
//  check of 2nd step
    const Pl1Step2 = [new Card('6', 6, 'heart', 'trump'),
      new Card('Jack', 11, 'heart', 'trump'), new Card('Queen', 12, 'spade', 'ordinary'),
      new Card('Ace', 14, 'heart', 'trump'), new Card('9', 9, 'club', 'ordinary')];

    const Pl2Step2 = [new Card('6', 6, 'club', 'ordinary'), new Card('7', 7, 'diamond', 'ordinary'),
      new Card('Jack', 11, 'club', 'ordinary'), new Card('Queen', 12, 'diamond', 'ordinary'),
      new Card('Ace', 14, 'club', 'ordinary'), new Card('8', 8, 'diamond', 'ordinary'),
      new Card('7', 7, 'spade', 'ordinary'), new Card('8', 8, 'spade', 'ordinary')];

    expect(game.getCardofPlayer(2, 'Jack')).toEqual(Pl1Step2);
    expect(game.getCardofPlayer(2)).toEqual(Pl2Step2);
//  check of 3rd step
    const Pl1Step3 = [new Card('6', 6, 'heart', 'trump'),
      new Card('Jack', 11, 'heart', 'trump'), new Card('Queen', 12, 'spade', 'ordinary'),
      new Card('Ace', 14, 'heart', 'trump'),  new Card('10', 10, 'spade', 'ordinary')];

    const Pl2Step3 = [new Card('6', 6, 'club', 'ordinary'), new Card('7', 7, 'diamond', 'ordinary'),
      new Card('Queen', 12, 'diamond', 'ordinary'), new Card('Ace', 14, 'club', 'ordinary'),
      new Card('8', 8, 'diamond', 'ordinary'), new Card('7', 7, 'spade', 'ordinary'),
      new Card('8', 8, 'spade', 'ordinary')];

    expect(game.getCardofPlayer(3, 'Jack')).toEqual(Pl1Step3);
    expect(game.getCardofPlayer(3)).toEqual(Pl2Step3);
//  check of 4th step
    const Pl1Step4 = [new Card('Jack', 11, 'heart', 'trump'), new Card('Queen', 12, 'spade', 'ordinary'),
      new Card('Ace', 14, 'heart', 'trump'),  new Card('10', 10, 'spade', 'ordinary'),
      new Card('10', 10, 'diamond', 'ordinary')];

    const Pl2Step4 = [new Card('7', 7, 'diamond', 'ordinary'),
      new Card('Queen', 12, 'diamond', 'ordinary'), new Card('Ace', 14, 'club', 'ordinary'),
      new Card('8', 8, 'diamond', 'ordinary'), new Card('7', 7, 'spade', 'ordinary'),
      new Card('8', 8, 'spade', 'ordinary')];

    expect(game.getCardofPlayer(4, 'Jack')).toEqual(Pl1Step4);
    expect(game.getCardofPlayer(4)).toEqual(Pl2Step4);
//  check of 5th step
    const Pl1Step5 = [new Card('Jack', 11, 'heart', 'trump'), new Card('Queen', 12, 'spade', 'ordinary'),
      new Card('Ace', 14, 'heart', 'trump'), new Card('King', 13, 'heart', 'trump')];

    const Pl2Step5 = [new Card('7', 7, 'diamond', 'ordinary'),
      new Card('Queen', 12, 'diamond', 'ordinary'), new Card('Ace', 14, 'club', 'ordinary'),
      new Card('8', 8, 'diamond', 'ordinary'), new Card('7', 7, 'spade', 'ordinary'),
      new Card('8', 8, 'spade', 'ordinary'), new Card('10', 10, 'spade', 'ordinary'),
      new Card('10', 10, 'diamond', 'ordinary')];

    expect(game.getCardofPlayer(5, 'Jack')).toEqual(Pl1Step5);
    expect(game.getCardofPlayer(5)).toEqual(Pl2Step5);
//  check of 6th step
    const Pl1Step6 = [new Card('Jack', 11, 'heart', 'trump'), new Card('Ace', 14, 'heart', 'trump'),
      new Card('King', 13, 'heart', 'trump'), new Card('King', 13, 'club', 'ordinary'),
      new Card('9', 9, 'heart', 'trump')];

    const Pl2Step6 = [new Card('7', 7, 'diamond', 'ordinary'),
      new Card('Queen', 12, 'diamond', 'ordinary'), new Card('Ace', 14, 'club', 'ordinary'),
      new Card('8', 8, 'diamond', 'ordinary'), new Card('7', 7, 'spade', 'ordinary'),
      new Card('8', 8, 'spade', 'ordinary'), new Card('10', 10, 'spade', 'ordinary'),
      new Card('10', 10, 'diamond', 'ordinary'), new Card('Queen', 12, 'spade', 'ordinary')];

    expect(game.getCardofPlayer(6, 'Jack')).toEqual(Pl1Step6);
    expect(game.getCardofPlayer(6)).toEqual(Pl2Step6);
//  check of 7th step
    const Pl1Step7 = [new Card('Jack', 11, 'heart', 'trump'), new Card('Ace', 14, 'heart', 'trump'),
      new Card('King', 13, 'heart', 'trump'), new Card('King', 13, 'club', 'ordinary')];

    const Pl2Step7 = [new Card('7', 7, 'diamond', 'ordinary'),
      new Card('Queen', 12, 'diamond', 'ordinary'), new Card('Ace', 14, 'club', 'ordinary'),
      new Card('8', 8, 'diamond', 'ordinary'), new Card('7', 7, 'spade', 'ordinary'),
      new Card('8', 8, 'spade', 'ordinary'), new Card('10', 10, 'spade', 'ordinary'),
      new Card('10', 10, 'diamond', 'ordinary'), new Card('Queen', 12, 'spade', 'ordinary'),
      new Card('9', 9, 'heart', 'trump')];

    expect(game.getCardofPlayer(7, 'Jack')).toEqual(Pl1Step7);
    expect(game.getCardofPlayer(7)).toEqual(Pl2Step7);
//  check of 8th step
    const Pl1Step8 = [new Card('Ace', 14, 'heart', 'trump'),
      new Card('King', 13, 'heart', 'trump'), new Card('King', 13, 'club', 'ordinary')];

    const Pl2Step8 = [new Card('7', 7, 'diamond', 'ordinary'),
      new Card('Queen', 12, 'diamond', 'ordinary'), new Card('Ace', 14, 'club', 'ordinary'),
      new Card('8', 8, 'diamond', 'ordinary'), new Card('7', 7, 'spade', 'ordinary'),
      new Card('8', 8, 'spade', 'ordinary'), new Card('10', 10, 'spade', 'ordinary'),
      new Card('10', 10, 'diamond', 'ordinary'), new Card('Queen', 12, 'spade', 'ordinary'),
      new Card('9', 9, 'heart', 'trump'), new Card('Jack', 11, 'heart', 'trump')];

    expect(game.getCardofPlayer(8, 'Jack')).toEqual(Pl1Step8);
    expect(game.getCardofPlayer(8)).toEqual(Pl2Step8);
//  check of 9th step
    const Pl1Step9 = [new Card('Ace', 14, 'heart', 'trump')];

    const Pl2Step9 = [new Card('7', 7, 'diamond', 'ordinary'),
      new Card('Queen', 12, 'diamond', 'ordinary'), new Card('Ace', 14, 'club', 'ordinary'),
      new Card('8', 8, 'diamond', 'ordinary'), new Card('7', 7, 'spade', 'ordinary'),
      new Card('8', 8, 'spade', 'ordinary'), new Card('10', 10, 'spade', 'ordinary'),
      new Card('10', 10, 'diamond', 'ordinary'), new Card('Queen', 12, 'spade', 'ordinary'),
      new Card('9', 9, 'heart', 'trump'), new Card('Jack', 11, 'heart', 'trump'),
      new Card('King', 13, 'club', 'ordinary'), new Card('King', 13, 'heart', 'trump')];

    expect(game.getCardofPlayer(9, 'Jack')).toEqual(Pl1Step9);
    expect(game.getCardofPlayer(9)).toEqual(Pl2Step9);
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

    expect(game.getCardofPlayer(10, 'Jack')).toEqual(Pl1Step10);
    expect(game.getCardofPlayer(10)).toEqual(Pl2Step10);
  });
});
