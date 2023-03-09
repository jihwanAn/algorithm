const input = require("fs")
  .readFileSync("5597.txt")
  .toString()
  .split("\n")
  .map(Number);

const numbers = Array(30)
  .fill()
  .map((v, i) => i + 1);

let result = numbers.filter((num) => !input.includes(num));

console.log(`${result[0]}\n${result[1]}`);
