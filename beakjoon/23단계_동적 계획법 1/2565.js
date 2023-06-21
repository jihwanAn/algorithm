const input = require("fs")
  .readFileSync("2565.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
let arr = input
  .map((v) => v.split(" ").map(Number))
  .sort((a, b) => a[0] - b[0]);
const dp = Array.from({ length: N }, () => 1);
let ans = 0;

for (let i = 1; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (arr[i][1] > arr[j][1]) {
      dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }
}

ans = N - Math.max(...dp);
console.log(ans);
