const input = require("fs")
  .readFileSync("2629.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const [N] = input[0];
const list = input[1];
const tar = input[3];

const DP = Array(N + 1)
  .fill()
  .map(() => Array(40001).fill(false));

const DFS = (num, w) => {
  if (num > N || DP[num][w]) return;

  DP[num][w] = true;
  DFS(num + 1, w + list[num]);
  DFS(num + 1, w);
  DFS(num + 1, Math.abs(w - list[num]));
};

DFS(0, 0);
let ans = "";

for (let x of tar) {
  DP[N][x] ? (ans += "Y ") : (ans += "N ");
}

console.log(ans.trim());
