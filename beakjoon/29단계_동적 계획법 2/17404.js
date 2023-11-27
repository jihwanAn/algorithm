const input = require("fs")
  .readFileSync("17404.txt")
  .toString()
  .trim()
  .split("\n");

const n = Number(input.shift());
const rgb = input.map((v) => v.split(" ").map(Number));

let ans = Infinity;
const I = Infinity;

for (let i = 0; i < 3; i++) {
  const dp = Array.from({ length: n }, () => [I, I, I]);
  dp[0][i] = rgb[0][i];

  for (let j = 1; j < n; j++) {
    dp[j][0] = rgb[j][0] + Math.min(dp[j - 1][1], dp[j - 1][2]);
    dp[j][1] = rgb[j][1] + Math.min(dp[j - 1][0], dp[j - 1][2]);
    dp[j][2] = rgb[j][2] + Math.min(dp[j - 1][0], dp[j - 1][1]);
  }

  for (let k = 0; k < 3; k++) {
    if (i !== k) {
      ans = Math.min(ans, dp[n - 1][k]);
    }
  }
}

console.log(ans);
