const [str1, str2] = require("fs")
  .readFileSync("9251.txt")
  .toString()
  .trim()
  .split("\n");
const dp = Array.from({ length: str1.length + 1 }, () =>
  Array(str2.length + 1).fill(0)
);

for (let i = 1; i <= str1.length; i++) {
  for (let j = 1; j <= str2.length; j++) {
    str1[i - 1] === str2[j - 1]
      ? (dp[i][j] = dp[i - 1][j - 1] + 1)
      : (dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]));
  }
}
console.log(dp[str1.length][str2.length]);
