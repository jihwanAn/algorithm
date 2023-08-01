let [MN, ...board] = require("fs")
  .readFileSync("1520.txt")
  .toString()
  .trim()
  .split("\n");

const [M, N] = MN.split(" ").map(Number);
board = board.map((_) => _.split(" ").map(Number));

const dp = Array.from({ length: M }, () => Array(N).fill(-1));
dp[M - 1][N - 1] = 1;

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

const dfs = (x, y) => {
  if (dp[x][y] > -1) return dp[x][y];

  let cnt = 0;

  for (let i = 0; i < 4; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (nx < 0 || nx >= M || ny < 0 || ny >= N) continue;
    if (board[nx][ny] >= board[x][y]) continue;

    cnt += dfs(nx, ny);
  }

  dp[x][y] = cnt;
  return cnt;
};

console.log(dfs(0, 0));
