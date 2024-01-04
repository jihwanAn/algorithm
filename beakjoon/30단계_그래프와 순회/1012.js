let input = require("fs").readFileSync("1012.txt").toString().split("\n");

function dfs(graph, width, height, x, y) {
  if (x <= -1 || x >= width || y <= -1 || y >= height) {
    return false;
  }

  // 인접 셀 방문
  if (graph[x][y] === 1) {
    graph[x][y] = -1;
    dfs(graph, width, height, x - 1, y);
    dfs(graph, width, height, x, y - 1);
    dfs(graph, width, height, x + 1, y);
    dfs(graph, width, height, x, y + 1);
    return true;
  }
  return false;
}

let TC = Number(input[0]);
let line = 1;

while (TC--) {
  let [m, n, k] = input[line].split(" ").map(Number);
  let graph = [];

  // 그래프 생성
  for (let i = 0; i < n; i++) {
    graph[i] = new Array(m);
  }
  for (let i = 1; i <= k; i++) {
    let [y, x] = input[line + i].split(" ").map(Number);
    graph[x][y] = 1;
  }

  console.log(graph);

  let ans = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (dfs(graph, n, m, i, j)) ans++;
    }
  }

  line += k + 1;
  console.log(ans);
}
