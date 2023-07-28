const [len, ...cases] = require("fs")
  .readFileSync("11066.txt")
  .toString()
  .trim()
  .split("\n");

const dp = Array.from(Array(501), () => Array(501).fill(0));
const sum = new Array(501).fill(0);
let ans = "";

for (let i = 0; i < cases.length - 1; i += 2) {
  let n = Number(cases[i]);
  let nums = cases[i + 1].split(" ").map(Number);

  for (let i = 0; i < n; i++) {
    sum[i + 1] = sum[i] + nums[i];
  }

  let res = com(nums, n);

  ans += res + "\n";
}

console.log(ans.trim());

function com(arr, m) {
  for (let i = 1; i < m; i++) {
    for (let j = 1; i + j <= m; j++) {
      dp[j][i + j] = Number.MAX_SAFE_INTEGER;
      for (let k = j; k < i + j; k++) {
        dp[j][i + j] = Math.min(
          dp[j][i + j],
          dp[j][k] + dp[k + 1][i + j] + sum[i + j] - sum[j - 1]
        );
      }
    }
  }
  return dp[1][m];
}
