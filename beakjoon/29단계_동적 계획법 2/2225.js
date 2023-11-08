const [N, K] = require("fs")
  .readFileSync("2225.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const dp = [];

for (let i = 1; i <= K; i++) {
  dp[i] = new Array(N + 1).fill(i === 1 ? 1 : 0);

  dp[i][0] = 1;
}

// 점화식 : DP[K][N] = DP[K-1][0] + DP[K-1][1] + ... + DP[K-1][N]
for (let i = 2; i <= K; i++) {
  for (let j = 1; j <= N; j++) {
    dp[i][j] =
      dp[i - 1].slice(0, j + 1).reduce((acc, cur) => acc + cur, 0) % 1000000000;
  }
}
console.log(dp[K][N]);
