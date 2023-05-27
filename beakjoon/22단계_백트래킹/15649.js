const [N, M] = require("fs")
  .readFileSync("15649.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const num = Array(N + 1).fill(0);
const arr = Array(M).fill(0);
let ans = "";

const dfs = (k) => {
  if (k === M) {
    ans += arr.join(" ") + "\n";
    return;
  }
  for (let i = 1; i <= N; i++) {
    if (num[i]) continue;
    num[i] = 1;
    arr[k] = i;
    dfs(k + 1);
    num[i] = 0;
  }
};

dfs(0);
console.log(ans);
