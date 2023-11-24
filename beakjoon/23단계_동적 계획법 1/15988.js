let input = require("fs")
  .readFileSync("15988.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let T = input.shift();
let max = Math.max(...input);
let dp = new Array(max + 1).fill(0);

dp[1] = 1; // 1
dp[2] = 2; // 1+1, 2
dp[3] = 4; // 1+1+1, 1+2, 2+1, 3

for (let i = 4; i <= max; i++) {
  dp[i] = (dp[i - 3] + dp[i - 2] + dp[i - 1]) % 1000000009;
}

for (let i = 0; i < T; i++) {
  console.log(dp[input[i]]);
}
