export function checkIfIsLive(array) {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] === 1) {
        if (j < 9 && i < 4) {
          if (array[i][j] === array[i][j + 1]) {
            counter++;
          }
          if (array[i][j] === array[i + 1][j]) {
            counter++;
          }
          if (array[i][j] === array[i + 1][j + 1]) {
            counter++;
          }
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
      }
      return console.log(`Hay ${counter} virus al arrededor`);
    }
  }
}
