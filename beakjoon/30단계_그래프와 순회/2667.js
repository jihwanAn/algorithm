const input = require("fs")
  .readFileSync("2667.txt")
  .toString()
  .trim()
  .split("\n");
const N = Number(input.shift());
const map = input.map((row) => row.split("").map(Number));
let ans = []; // 단지의 "집의 수" 넣을 배열

for (let x = 0; x < N; x++) {
  for (let y = 0; y < N; y++) {
    let current = dfs(x, y);

    if (current > 0) ans.push(current);
  }
}
ans.sort((a, b) => a - b);
console.log(ans.length + "\n" + ans.join("\n"));

function dfs(x, y) {
  if (x < 0 || x >= N || y < 0 || y >= N) return 0;
  if (map[x][y] === 1) {
    map[x][y] = -1; // 방문 처리

    let result = 1;
    result += dfs(x - 1, y);
    result += dfs(x + 1, y);
    result += dfs(x, y - 1);
    result += dfs(x, y + 1);
    return result;
  }
  return 0;
}
