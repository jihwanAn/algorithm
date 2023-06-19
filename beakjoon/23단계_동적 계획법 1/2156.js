const wines = require("fs")
  .readFileSync("2156.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const N = wines.shift();
const dp = new Array(N).fill(0);
dp[1] = wines[0];
dp[2] = wines[0] + wines[1];

// wines 6, 10, 13, 9, 8, 1
// dp 0, 6, 16, 0, 0, 0
// 0, 6, 16, 23, 28, 33

for (let i = 3; i <= N; i++) {
  dp[i] = Math.max(
    dp[i - 3] + wines[i - 2] + wines[i - 1],
    dp[i - 2] + wines[i - 1],
    dp[i - 1]
  );
}
console.log(dp[N]);
