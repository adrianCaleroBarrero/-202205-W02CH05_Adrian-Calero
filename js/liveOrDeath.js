export function deathOrLive(counter, array, coord) {
  array[coord[0]][coord[1]];
  if (array[coord[0]][coord[1]] === 1) {
    if (counter < 2 || counter > 3) {
      array[coord[0]][coord[1]] = 0;
    } else {
      array[coord[0]][coord[1]] = 1;
    }
  } else if (array[coord[0]][coord[1]] === 0) {
    if (counter === 3) {
      array[coord[0]][coord[1]] = 1;
    }
  }
}
