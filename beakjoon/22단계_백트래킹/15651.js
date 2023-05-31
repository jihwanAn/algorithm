const [N, M] = require("fs")
  .readFileSync("15651.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);
const ans = [];

function dfs(k, str) {
  if (k === M) {
    ans.push(str.trim());
  } else {
    for (let num = 1; num <= N; num++) {
      dfs(k + 1, str + num + " ");
    }
  }
}
dfs(0, "");
console.log(ans.join("\n"));
