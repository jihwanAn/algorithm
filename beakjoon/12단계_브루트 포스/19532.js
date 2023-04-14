let [a, b, c, d, e, f] = require("fs")
  .readFileSync("19532.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const x = (c * e - b * f) / (a * e - b * d);
const y = (c * d - a * f) / (b * d - a * e);

console.log(`${x} ${y}`);
