const input = require("fs")
  .readFileSync("2217.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const n = input.shift();
const ropes = input.sort((a, b) => a - b);
const arr = [];

for (let i = 0; i < n; i += 1) {
  arr.push(ropes[i] * (n - i));
}

console.log(Math.max(...arr));
