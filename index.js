import makeGame from './src/game';
import { getTestPack1, getTestPack2, getTestPack3 } from './src/testFunctions';

const game = makeGame('Jack', getTestPack1);
console.log(game);
