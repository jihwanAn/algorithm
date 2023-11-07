const input = require("fs")
  .readFileSync("11052.txt")
  .toString()
  .trim()
  .split("\n");
const N = Number(input[0]);
const cards = input[1].split(" ").map(Number);

const dp = new Array(N + 1).fill(0);

for (let i = 1; i <= N; i++) {
  // 현재 회차의 최댓값
  for (let j = 1; j <= i; j++) {
    dp[i] = Math.max(dp[i], dp[i - j] + cards[j - 1]);
  }
}

console.log(dp[N]);
