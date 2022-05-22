import { checkIfIsLive } from './check.js';
import { sortGerm } from './sort.js';

let mapGameOfLife = [
  [1, 1, 0, 0, 1],
  [1, 0, 1, 1, 0],
  [0, 0, 0, 0, 1],
  [1, 0, 1, 0, 1],
  [1, 1, 0, 1, 1],
];

// sortGerm(mapGameOfLife);

let mapGameOfLife2 = [...mapGameOfLife].map((row) => [...row]);

function loadArrayAnRepeat() {
  checkIfIsLive(mapGameOfLife, mapGameOfLife2);
}

loadArrayAnRepeat();

console.log(mapGameOfLife);
console.log(mapGameOfLife2);
// mapGameOfLife = mapGameOfLife2;

// setInterval(loadArrayAnRepeat, 2000);

// let square = document.querySelectorAll('.square');
// let div = square[0].children[0];

// div.classList.add('color');
