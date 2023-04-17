let n = require("fs")
  .readFileSync("2587.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let sum = n.reduce((a, b) => a + b, 0);
let avg = sum / 5;
let sort = n.sort((a, b) => a - b)[2];

console.log(avg + "\n" + sort);
