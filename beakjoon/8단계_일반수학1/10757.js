let [a, b] = require("fs")
  .readFileSync("10757.txt")
  .toString()
  .trim()
  .split(" ");

console.log((BigInt(a) + BigInt(b)).toString());
