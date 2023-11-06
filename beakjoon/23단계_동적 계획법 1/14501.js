const input = require("fs")
  .readFileSync("14501.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const list = input.map((v) => v.split(" ").map(Number));
const dp = new Array(N).fill(0);

for (let i = 0; i < N; i++) {
  const [t, p] = list[i];

  // 현재 날짜 + 기간 > n 이면 불가
  if (i + t > N) continue;
  dp[i] += p;

  for (let j = i + t; j < N; j++) {
    // 현재 금액, i일 뒤에 받게 될 금액 비교
    dp[j] = Math.max(dp[j], dp[i]);
  }
}
console.log(Math.max(...dp));
