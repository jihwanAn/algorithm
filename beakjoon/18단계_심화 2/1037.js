const [N, ...input] = require("fs")
  .readFileSync("1037.txt")
  .toString()
  .trim()
  .split("\n");

const arr = input[0].split(" ").sort((a, b) => a - b);
const min = Number(arr[0]);
const max = Number(arr[N - 1]);

console.log(min * max);
