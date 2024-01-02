const input = require("fs")
  .readFileSync("1260.txt")
  .toString()
  .trim()
  .split("\n");
const [N, M, V] = input[0].split(" ").map(Number);
const graph = [...new Array(N + 1)].map(() => []);

for (let i = 0; i < M; i++) {
  let [from, to] = input[i + 1].split(" ").map(Number);
  graph[from].push(to);
  graph[to].push(from);
}
graph.forEach((e) => {
  e.sort((a, b) => a - b);
});

// DFS
let ans_dfs = [];
const visited = new Array(N + 1).fill(0);

const DFS = (v) => {
  if (visited[v]) return;
  visited[v] = 1;
  ans_dfs.push(v);

  for (let i = 0; i < graph[v].length; i++) {
    let next = graph[v][i];

    if (visited[next] === 0) {
      DFS(next);
    }
  }
};

DFS(V);
console.log(ans_dfs.join(" "));

// BFS
let ans_bfs = [];
visited.fill(0);

const BFS = (v) => {
  let queue = [v];

  while (queue.length) {
    let x = queue.shift();

    if (visited[x] === 1) {
      continue;
    }
    visited[x] = 1;
    ans_bfs.push(x);

    for (let i = 0; i < graph[x].length; i++) {
      let next = graph[x][i];

      if (visited[next] === 0) {
        queue.push(next);
      }
    }
  }
};

BFS(V);
console.log(ans_bfs.join(" "));
