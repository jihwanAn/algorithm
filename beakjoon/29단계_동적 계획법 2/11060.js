const input = require("fs")
  .readFileSync("11060.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]); // 1×N 크기의 미로
const list = input[1].split(" ").map(Number);
let dp = Array.from({ length: N }).fill(Infinity);
dp[0] = 0;

for (let i = 0; i < N; i++) {
  for (let j = 1; j <= list[i]; j++) {
    if (i + j >= N) continue;

    dp[i + j] = Math.min(dp[i + j], dp[i] + 1);
  }
}
console.log(dp[N - 1] === Infinity ? -1 : dp[N - 1]);
