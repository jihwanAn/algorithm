const input = require("fs").readFileSync("11057.txt").toString().trim();
const N = Number(input);
const dp = new Array(10).fill(0);

dp[9] = 1;

for (let i = 1; i <= N; i++) {
  for (let j = 8; j >= 0; j--) {
    dp[j] = (dp[j] + dp[j + 1]) % 10007;
  }
}

const sum = dp.reduce((a, c) => a + c, 0) % 10007;

console.log(sum);
