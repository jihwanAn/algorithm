const input = require("fs")
  .readFileSync("1890.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const map = [];

for (const arr of input) {
  map.push(arr.split(" ").map(Number));
}

const dp = Array.from({ length: N }, () =>
  Array.from({ length: N }, () => BigInt(0))
);

dp[0][0] = BigInt(1);

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (map[i][j] === 0) continue;

    if (i + map[i][j] < N) {
      dp[i + map[i][j]][j] += dp[i][j];
    }

    if (j + map[i][j] < N) {
      dp[i][j + map[i][j]] += dp[i][j];
    }
  }
}

console.log(dp[N - 1][N - 1].toString());
