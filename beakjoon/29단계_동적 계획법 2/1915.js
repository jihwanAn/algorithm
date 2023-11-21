const input = require("fs")
  .readFileSync("1915.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);
const square = input.slice(1).map((v) => v.split("").map(Number));

const dp = Array.from(Array(n), () => new Array(m).fill(0));
let ans = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    if (square[i][j] === 0) continue;

    if (i !== 0 && j !== 0)
      // (i,j) 기준으로 왼쪽, 왼쪽 대각선 위, 위 비교하면서 가장 작은 값에 +1
      // → 현재 (i,j) 좌표가 우측 하단에 위치하면서 만들 수 있는 가장 큰 정사각형의 길이
      dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
    else dp[i][j] = 1;

    ans = Math.max(ans, dp[i][j]);
  }
}

console.log(ans ** 2);
