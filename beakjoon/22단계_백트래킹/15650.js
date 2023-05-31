const [N, M] = require("fs")
  .readFileSync("15650.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const array = new Array(M).fill(0);
let ans = "";

function dfs(depth, start) {
  if (depth === M) {
    ans += array.join(" ") + "\n";
    return;
  }
  for (let i = start; i <= N; i++) {
    array[depth] = i;
    dfs(depth + 1, i + 1);
  }
}
dfs(0, 1);

console.log(ans);
