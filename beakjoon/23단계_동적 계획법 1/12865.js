const input = require("fs")
  .readFileSync("12865.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));
const [N, k] = input[0];
const dp = Array.from({ length: N + 1 }, () => Array(k + 1).fill(0));

for (let i = 1; i < N + 1; i++) {
  const [W, V] = input[i];

  for (let j = 1; j <= k; j++) {
    j - W >= 0
      ? (dp[i][j] = Math.max(dp[i - 1][j - W] + V, dp[i - 1][j]))
      : (dp[i][j] = dp[i - 1][j]);
  }
}

console.log(dp[N][k]);
