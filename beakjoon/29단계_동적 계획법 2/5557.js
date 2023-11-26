const input = require("fs")
  .readFileSync("5557.txt")
  .toString()
  .trim()
  .split("\n");
const N = Number(input[0]);
const nums = input[1].split(" ").map(Number);

const sol = (N, nums) => {
  const dp = Array.from({ length: N - 1 }, () => new Array(21).fill(BigInt(0)));

  dp[0][nums[0]] += BigInt(1);

  for (let i = 1; i < N - 1; i++) {
    for (let j = 0; j <= 20; j++) {
      if (dp[i - 1][j]) {
        if (j + nums[i] <= 20) dp[i][j + nums[i]] += dp[i - 1][j];
        if (j - nums[i] >= 0) dp[i][j - nums[i]] += dp[i - 1][j];
      }
    }
    console.log(dp);
  }

  return dp[N - 2][nums[N - 1]].toString();
};

console.log(sol(N, nums));
