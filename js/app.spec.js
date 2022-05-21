import { checkIfIsLive } from './check.js';
import { deathOrLive } from './liveOrDeath.js';
import { sortGerm } from './sort.js';

describe('Given the function sortGerm', () => {
  describe('When receive array bidimensional', () => {
    test('Then should be diferent array', () => {
      let array = [
        [0, 1, 1, 0, 0],
        [0, 1, 0, 1, 0],
        [1, 1, 1, 0, 0],
        [0, 0, 1, 0, 1],
        [0, 1, 1, 0, 0],
      ];

      let sortArray = sortGerm(array);

      expect(sortArray).not.toBe(array);
    });
  });
  describe('When receive return normal array', () => {
    test('Then should be undefined', () => {
      let array = [0, 0, 0, 0, 0];

      expect(sortGerm(array)).toBe(undefined);
    });
  });

  describe('When receive string or number', () => {
    test('Then should be undefined', () => {
      let string = '';
      let number = 15;

      expect(sortGerm(string)).toBe(undefined);
      expect(sortGerm(number)).toBe(undefined);
    });
  });
});

describe('Given the function checkIfIsLive', () => {
  describe('When receive one array/ number/ string', () => {
    test('Then should be undefined', () => {
      let array = [0, 0, 0, 0, 0];
      let number = 5;
      let string = '';

      expect(checkIfIsLive(array)).toBe(undefined);
      expect(checkIfIsLive(number)).toBe(undefined);
      expect(checkIfIsLive(string)).toBe(undefined);
    });
  });

  describe('When receive one array & number/ array & string', () => {
    test('Then should be undefined', () => {
      let array = [0, 0, 0, 0, 0];
      let number = 5;
      let string = '';

      expect(checkIfIsLive(array, number)).toBe(undefined);
      expect(checkIfIsLive(array, string)).toBe(undefined);
    });
  });

  describe('When receive one array & array', () => {
    test('Then should be undefined', () => {
      let array = [0, 1, 1, 0, 0];
      let array2 = [0, 0, 0, 0, 0];

      expect(checkIfIsLive(array, array2)).toBe(undefined);
    });
  });

  describe('When receive array & array bidimensional', () => {
    test('Then should be diferent array', () => {
      let array = [
        [0, 1, 1, 0, 0],
        [0, 1, 0, 1, 0],
        [1, 1, 1, 0, 0],
        [0, 0, 1, 0, 1],
        [0, 1, 1, 0, 0],
      ];

      let arrayCopy = [...array].map((row) => [...row]);

      expect(checkIfIsLive(array, arrayCopy)).not.toBe(arrayCopy);
      array[0][4] = 1;
      array[0][3] = 1;
      array[1][4] = 1;
      expect(checkIfIsLive(array, arrayCopy)).not.toBe(arrayCopy);
      array[4][0] = 1;
      array[3][0] = 1;
      array[3][1] = 1;
      expect(checkIfIsLive(array, arrayCopy)).not.toBe(arrayCopy);
      array[4][4] = 1;
      array[4][3] = 1;
      array[3][3] = 1;
      expect(checkIfIsLive(array, arrayCopy)).not.toBe(arrayCopy);
      array[0][4] = 0;
      array[0][3] = 1;
      expect(checkIfIsLive(array, arrayCopy)).not.toBe(arrayCopy);
      array[4][4] = 0;
      array[3][4] = 1;
      expect(checkIfIsLive(array, arrayCopy)).not.toBe(arrayCopy);
      array[4][0] = 0;
      array[3][0] = 1;
      expect(checkIfIsLive(array, arrayCopy)).not.toBe(arrayCopy);
    });
  });
});

describe('Given the function deathOrLive', () => {
  describe('When receive 0 parameter', () => {
    test('Then should be correct way', () => {
      let arrayCopy = [
        [0, 1, 1, 0, 0],
        [0, 1, 0, 1, 0],
        [1, 1, 1, 0, 0],
        [0, 0, 1, 0, 1],
        [0, 1, 1, 0, 0],
      ];
      let counter = 6;
      deathOrLive(counter, arrayCopy, [1, 2]);

      expect(arrayCopy[1][2]).toBe(0);
    });
  });
  describe('When receive 1 parameter', () => {
    test('Then should be correct way', () => {
      let arrayCopy = [
        [0, 1, 1, 0, 0],
        [0, 1, 0, 1, 0],
        [1, 1, 1, 0, 0],
        [0, 0, 1, 0, 1],
        [0, 1, 1, 0, 0],
      ];
      let counter = 2;
      deathOrLive(counter, arrayCopy, [4, 2]);

      expect(arrayCopy[4][2]).toBe(1);
    });
  });
});
