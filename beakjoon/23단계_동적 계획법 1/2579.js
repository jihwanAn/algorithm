const input = require("fs")
  .readFileSync("2579.txt")
  .toString()
  .split("\n")
  .map(Number);
const N = input.shift();
const dp = [];
dp[0] = input[0];
dp[1] = input[0] + input[1];
dp[2] = Math.max(input[0], input[1]) + input[2];

for (let i = 3; i < N; i++) {
  dp[i] = Math.max(dp[i - 2] + input[i], dp[i - 3] + input[i - 1] + input[i]);
}
console.log(dp[N - 1]);
