const input = require("fs").readFileSync("14889.txt").toString().split("\n");
const map = [];
const N = Number(input.shift());
const visited = new Array(N).fill(false);
for (let i = 0; i < N; i++) {
  map.push(input.shift().split(" ").map(Number));
}
let ans = Infinity;

const dfs = (cnt, start) => {
  if (cnt === N / 2) {
    let teamA = [];
    let teamB = [];
    for (let i = 0; i < N; i++) {
      if (visited[i]) teamA.push(i);
      else teamB.push(i);
    }
    let teamA_score = 0;
    let teamB_score = 0;
    for (let i = 0; i < N / 2; i++) {
      for (let j = 0; j < N / 2; j++) {
        teamA_score += map[teamA[i]][teamA[j]];
        teamB_score += map[teamB[i]][teamB[j]];
      }
    }
    ans = Math.min(ans, Math.abs(teamA_score - teamB_score));
    return;
  }

  for (let i = start; i < N - 1; i++) {
    visited[i] = true;
    dfs(cnt + 1, i + 1);
    visited[i] = false;
  }
};
dfs(0, 0);
console.log(ans);
