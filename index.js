/**
 * First Task
 */
const arr = [1, 3, 5, 4, 5, 7];

const result = [];

const { length } = arr;

function nums(arr) {
  for (let i = 0; i < length - 2; i++) {
    const a = arr[i];
    const b = arr[i + 1];
    const c = arr[i + 2];

    if ((a > b && c > b) || (a < b && c < b)) {
      result.push(1);
    } else {
      result.push(0);
    }
  }

  return result;
}
console.log(nums(arr));

/**
 * Second Task
 */
const inputArrayData = [
  [1, 2, 3, 2, 7],
  [4, 5, 6, 8, 1],
  [7, 8, 9, 4, 5],
];
const allNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let resultNumbers = [];

function matrixAllNumbers(inputArrayData) {
  for (let i = 0; i < inputArrayData[0].length - 2; i++) {
    const subarr = inputArrayData.map((row) => row.slice(i, i + 3)).flat();
    const res = allNumbers.some((digit) => !subarr.includes(digit));
    resultNumbers.push(!res);
  }
  return resultNumbers;
}

console.log(matrixAllNumbers(inputArrayData));
