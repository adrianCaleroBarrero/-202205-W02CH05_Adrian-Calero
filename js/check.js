import { deathOrLive } from './liveOrDeath.js';

export function checkIfIsLive(array, arrayCopy) {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === 1) {
        if (i === 0 && j === array[i].length - 1) {
          if (array[i][j] === array[i][j - 1]) {
            counter++;
          }
          if (array[i][j] === array[i + 1][j - 1]) {
            counter++;
          }
          if (array[i][j] === array[i + 1][j]) {
            counter++;
          }
        }
        if (i === array.length - 1 && j === 0) {
          if (array[i][j] === array[i - 1][j]) {
            counter++;
          }
          if (array[i][j] === array[i][j + 1]) {
            counter++;
          }
          if (array[i][j] === array[i - 1][j + 1]) {
            counter++;
          }
        }
        if (i === array.length - 1 && j === array[i].length - 1) {
          if (array[i][j] === array[i - 1][j]) {
            counter++;
          }
          if (array[i][j] === array[i][j - 1]) {
            counter++;
          }
          if (array[i][j] === array[i - 1][j - 1]) {
            counter++;
          }
        }
        if (
          (j < array.length - 1 && i < array.length - 1) ||
          (i === 0 && j === 0)
        ) {
          if (array[i][j] === array[i][j + 1]) {
            counter++;
          }
          if (array[i][j] === array[i + 1][j]) {
            counter++;
          }
          if (array[i][j] === array[i + 1][j + 1]) {
            counter++;
          }
          if (j > 0 && i > 0) {
            if (array[i][j] === array[i + 1][j - 1]) {
              counter++;
            }
            if (array[i][j] === array[i][j - 1]) {
              counter++;
            }
            if (array[i][j] === array[i - 1][j - 1]) {
              counter++;
            }
            if (array[i][j] === array[i - 1][j]) {
              counter++;
            }
            if (array[i][j] === array[i - 1][j + 1]) {
              counter++;
            }
          }
          if (i === 0 && j > 0) {
            if (array[i][j] === array[i + 1][j - 1]) {
              counter++;
            }
            if (array[i][j] === array[i][j - 1]) {
              counter++;
            }
          }
          if (i > 0 && j === 0) {
            if (array[i][j] === array[i - 1][j]) {
              counter++;
            }
            if (array[i][j] === array[i - 1][j + 1]) {
              counter++;
            }
          }
        }
        if (i === array.length - 1 && j < array.length - 1 && j > 0) {
          if (array[i][j] === array[i - 1][j - 1]) {
            counter++;
          }
          if (array[i][j] === array[i - 1][j]) {
            counter++;
          }
          if (array[i][j] === array[i][j - 1]) {
            counter++;
          }
          if (array[i][j] === array[i - 1][j + 1]) {
            counter++;
          }
          if (array[i][j] === array[i][j + 1]) {
            counter++;
          }
        }
        if (i < array.length - 1 && j === array.length - 1 && i > 0) {
          if (array[i][j] === array[i - 1][j]) {
            counter++;
          }
          if (array[i][j] === array[i][j - 1]) {
            counter++;
          }
          if (array[i][j] === array[i - 1][j - 1]) {
            counter++;
          }
          if (array[i][j] === array[i + 1][j - 1]) {
            counter++;
          }
          if (array[i][j] === array[i + 1][j]) {
            counter++;
          }
        }

        deathOrLive(counter, arrayCopy, [i, j]);
        counter = 0;
      }
      if (array[i][j] === 0) {
        if (i === 0 && j === array[i].length - 1) {
          if (array[i][j] !== array[i][j - 1]) {
            counter++;
          }
          if (array[i][j] !== array[i + 1][j - 1]) {
            counter++;
          }
          if (array[i][j] !== array[i + 1][j]) {
            counter++;
          }
        }
        if (i === array.length - 1 && j === 0) {
          if (array[i][j] !== array[i - 1][j]) {
            counter++;
          }
          if (array[i][j] !== array[i][j + 1]) {
            counter++;
          }
          if (array[i][j] !== array[i - 1][j + 1]) {
            counter++;
          }
        }
        if (i === array.length - 1 && j === array[i].length - 1) {
          if (array[i][j] !== array[i - 1][j]) {
            counter++;
          }
          if (array[i][j] !== array[i][j - 1]) {
            counter++;
          }
          if (array[i][j] !== array[i - 1][j - 1]) {
            counter++;
          }
        }
        if (
          (j < array.length - 1 && i < array.length - 1) ||
          (i === 0 && j === 0)
        ) {
          if (array[i][j] !== array[i][j + 1]) {
            counter++;
          }
          if (array[i][j] !== array[i + 1][j]) {
            counter++;
          }
          if (array[i][j] !== array[i + 1][j + 1]) {
            counter++;
          }
          if (j > 0 && i > 0) {
            if (array[i][j] !== array[i + 1][j - 1]) {
              counter++;
            }
            if (array[i][j] !== array[i][j - 1]) {
              counter++;
            }
            if (array[i][j] !== array[i - 1][j - 1]) {
              counter++;
            }
            if (array[i][j] !== array[i - 1][j]) {
              counter++;
            }
            if (array[i][j] !== array[i - 1][j + 1]) {
              counter++;
            }
          }
          if (i === 0 && j > 0) {
            if (array[i][j] !== array[i + 1][j - 1]) {
              counter++;
            }
            if (array[i][j] !== array[i][j - 1]) {
              counter++;
            }
          }
          if (i > 0 && j === 0) {
            if (array[i][j] !== array[i - 1][j]) {
              counter++;
            }
            if (array[i][j] !== array[i - 1][j + 1]) {
              counter++;
            }
          }
        }
        if (i === array.length - 1 && j < array.length - 1 && j > 0) {
          if (array[i][j] !== array[i - 1][j - 1]) {
            counter++;
          }
          if (array[i][j] !== array[i - 1][j]) {
            counter++;
          }
          if (array[i][j] !== array[i][j - 1]) {
            counter++;
          }
          if (array[i][j] !== array[i - 1][j + 1]) {
            counter++;
          }
          if (array[i][j] !== array[i][j + 1]) {
            counter++;
          }
        }
        if (i < array.length - 1 && j === array.length - 1 && i > 0) {
          if (array[i][j] !== array[i - 1][j]) {
            counter++;
          }
          if (array[i][j] !== array[i][j - 1]) {
            counter++;
          }
          if (array[i][j] !== array[i - 1][j - 1]) {
            counter++;
          }
          if (array[i][j] !== array[i + 1][j - 1]) {
            counter++;
          }
          if (array[i][j] !== array[i + 1][j]) {
            counter++;
          }
        }
        deathOrLive(counter, arrayCopy, [i, j]);
        counter = 0;
      }
    }
  }
}
