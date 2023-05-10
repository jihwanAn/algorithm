const input = require("fs")
  .readFileSync("10773.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const n = input.shift();

let num = [];
for (let i = 0; i < n; i++) {
  input[i] !== 0 ? num.push(input[i]) : num.pop();
}
console.log(num.length < 1 ? 0 : num.reduce((a, b) => a + b));
