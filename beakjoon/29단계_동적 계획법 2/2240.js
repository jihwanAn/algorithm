const [n, ...arr] = require("fs")
  .readFileSync("2240.txt")
  .toString()
  .trim()
  .split("\n");
const [T, W] = n.split(" ").map(Number);
const plum = arr.map(Number);
const dp = Array.from({ length: T }, () =>
  Array.from({ length: W + 2 }, () => new Array(2).fill(0))
);
console.log(dp);
for (let i = 0; i < T; i++) {
  for (let j = 1; j < W + 2; j++) {
    if (i === 0) {
      if (plum[i] === 1) {
        dp[0][1][0] = 1;
      } else if (plum[i] === 2) {
        dp[0][2][1] = 1;
      }
    } else {
      if (plum[i] === 1) {
        dp[i][j][0] = Math.max(dp[i - 1][j][0] + 1, dp[i - 1][j - 1][1] + 1);
        dp[i][j][1] = dp[i - 1][j][1];
      } else if (plum[i] === 2) {
        dp[i][j][0] = dp[i - 1][j][0];
        dp[i][j][1] = Math.max(dp[i - 1][j - 1][0] + 1, dp[i - 1][j][1] + 1);
      }
    }
  }
  console.log(dp);
}

console.log(Math.max(...dp[T - 1].flat()));
