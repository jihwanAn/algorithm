let [n, boxs] = require("fs")
  .readFileSync("1965.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));
let dp = Array.from({ length: n }, () => 1);

for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    if (boxs[j] < boxs[i]) {
      dp[i] = Math.max(dp[j] + 1, dp[i]);
    }
  }
}

console.log(Math.max(...dp));
