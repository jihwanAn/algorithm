const input = require("fs")
  .readFileSync("1026.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input[0];
const A = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
const B = input[2]
  .split(" ")
  .map(Number)
  .sort((a, b) => b - a);

let ans = 0;
A.forEach((a, i) => (ans += a * B[i]));
console.log(ans);
