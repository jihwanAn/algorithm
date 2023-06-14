const [n, input] = require("fs")
  .readFileSync("1912.txt")
  .toString()
  .trim()
  .split("\n");
const arr = input.split(" ").map(Number);
const table = [arr[0]];

for (let i = 1; i < n; i++) {
  table[i] = Math.max(table[i - 1] + arr[i], arr[i]);
}

console.log(Math.max(...table));
