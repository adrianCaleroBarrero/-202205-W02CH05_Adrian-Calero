export function sortGerm(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      array[i][j] = Math.round(Math.random());
    }
  }
  console.log(array);
}
