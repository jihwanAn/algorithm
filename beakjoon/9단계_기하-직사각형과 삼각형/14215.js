let [a, b, c] = require("fs")
  .readFileSync("14215.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

console.log(a + b > c ? a + b + c : (a + b) * 2 - 1);
