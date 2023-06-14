const input = require("fs")
  .readFileSync("1149.txt")
  .toString()
  .trim()
  .split("\n");

const n = +input.shift();
const RGB = input.map((v) => v.split(" ").map(Number));

for (let i = 1; i < n; i++) {
  RGB[i][0] += Math.min(RGB[i - 1][1], RGB[i - 1][2]);
  RGB[i][1] += Math.min(RGB[i - 1][0], RGB[i - 1][2]);
  RGB[i][2] += Math.min(RGB[i - 1][0], RGB[i - 1][1]);
}

console.log(Math.min(...RGB[n - 1]));
