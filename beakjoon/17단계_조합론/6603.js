const input = require("fs")
  .readFileSync("6603.txt")
  .toString()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

input.pop();

let K;
let S;
let ans = "";

input.forEach((x) => {
  [K, ...S] = x;
  DFS(0, []);
  ans += "\n";
});

function DFS(L, pick) {
  if (pick.length === 6) {
    ans += `${pick.join(" ")}\n`;
    return;
  }
  for (let i = L; i < K; i++) {
    DFS(i + 1, [...pick, S[i]]);
  }
}

console.log(ans);
