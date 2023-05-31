const [N, M] = require("fs")
  .readFileSync("15652.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let ans = "";
let combination = [];

const dfs = (idx, start) => {
  if (idx === M) return (ans += `${combination.join(" ")}\n`);

  for (let i = start; i <= N; i++) {
    combination[idx] = i;
    dfs(idx + 1, i);
  }
};

dfs(0, 1);
console.log(ans);
