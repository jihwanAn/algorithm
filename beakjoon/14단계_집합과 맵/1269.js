const input = require("fs")
  .readFileSync("1269.txt")
  .toString()
  .trim()
  .split("\n");

const A = new Set(input[1].split(" ").map(Number));
const B = new Set(input[2].split(" ").map(Number));

const symmetricDifference = new Set(
  [...A].filter((x) => !B.has(x)).concat([...B].filter((x) => !A.has(x)))
);

console.log(symmetricDifference.size);
