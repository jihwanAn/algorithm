let [A, B] = require("fs")
  .readFileSync("27323.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

console.log(A * B);
