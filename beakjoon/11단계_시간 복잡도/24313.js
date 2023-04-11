let [[a1, a0], [c], [n0]] = require("fs")
  .readFileSync("24313.txt")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.split(" ").map((n) => n * 1));

console.log(Number(a1 <= c && (c - a1) * n0 >= a0));
