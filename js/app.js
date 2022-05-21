import { checkIfIsLive } from './check.js';
import { sortGerm } from './sort.js';

let mapGameOfLife = [
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];

sortGerm(mapGameOfLife);

let mapGameOfLife2 = [...mapGameOfLife].map((row) => [...row]);

function loadArrayAnRepeat() {
  checkIfIsLive(mapGameOfLife, mapGameOfLife2);
}
mapGameOfLife = mapGameOfLife2;

setInterval(loadArrayAnRepeat, 2000);
