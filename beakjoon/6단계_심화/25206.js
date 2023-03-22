let input = require("fs")
  .readFileSync("25206.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" "));

const table = {
  "A+": 4.5,
  A0: 4.0,
  "B+": 3.5,
  B0: 3.0,
  "C+": 2.5,
  C0: 2.0,
  "D+": 1.5,
  D0: 1.0,
  F: 0.0,
};

let sum = 0;
let total = 0;

for (let [a, b, c] of input) {
  if (c == "P") continue;
  sum += +b;
  total += b * table[c];
}
console.log(total / sum);
