const input = require("fs")
  .readFileSync("11660.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const board = input.slice(1, N + 1).map((v) => v.split(" ").map(Number));
let arr = Array.from(Array(N + 1), () => new Array(N + 1).fill(0));
let ans = "";

// 누적합 배열
for (let i = 1; i < N + 1; i++) {
  for (let j = 1; j < N + 1; j++) {
    arr[i][j] =
      board[i - 1][j - 1] + arr[i][j - 1] + arr[i - 1][j] - arr[i - 1][j - 1];
  }
}

for (let i = N + 1; i < input.length; i++) {
  const [x1, y1, x2, y2] = input[i].split(" ").map(Number);
  // [x2][y2] 값 → -(x의 끝 값 + y의 끝 값) + xy의 끝 값
  ans +=
    String(
      dp[x2][y2] - (dp[x1 - 1][y2] + dp[x2][y1 - 1]) + dp[x1 - 1][y1 - 1]
    ) + "\n";
}
console.log(ans);
