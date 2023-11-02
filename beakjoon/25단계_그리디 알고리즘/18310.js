const [N, list] = require("fs")
  .readFileSync("18310.txt")
  .toString()
  .trim()
  .split("\n");

const h = list
  .split(" ")
  .map((v) => parseInt(v))
  .sort((a, b) => a - b);

console.log(h[Math.floor((N - 1) / 2)]);
