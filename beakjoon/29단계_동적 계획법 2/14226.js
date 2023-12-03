const fs = require("fs");
let input = Number(fs.readFileSync("14226.txt").toString());

const solution = () => {
  // dp 초기값은 이모티콘을 하나씩 증가시켜 넣을 경우의 수를 기준으로
  const dp = Array.from({ length: 1000 + 3 }, (_, i) => i);
  dp[1] = 0;

  for (let i = 2; i < input + 1; i++) {
    let j = 2;

    while (i * j <= 1002) {
      dp[i * j] = Math.min(dp[i * j], dp[i] + j);
      dp[i * j - 1] = Math.min(dp[i * j - 1], dp[i * j] + 1);
      j++;
    }
  }
  return dp[input];
};

console.log(solution());
