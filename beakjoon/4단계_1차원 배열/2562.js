let fs = require("fs");
let input = fs
  .readFileSync("2562.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => Number(v));

// let max = input[0];
// let maxIdx = 0;

// for (let i = 0; i < input.length; i++) {
//   if (max < input[i]) {
//     max = input[i];
//     maxIdx = i;
//   }
// }

let max = Math.max(...input);

console.log(max);
console.log(input.indexOf(max) + 1);
