const input = require("fs")
  .readFileSync("24480.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M, R] = input.shift().split(" ").map(Number);
const arr = input.map((v) => v.split(" ").map(Number));
const graph = Array.from(Array(N + 1), () => []);
const visited = Array(N + 1).fill(0);
let cnt = 1;

arr.map(([u, v]) => {
  graph[u].push(v);
  graph[v].push(u);
});

graph.map((v) => v.sort((a, b) => b - a));

const dfs = (start) => {
  if (visited[start]) return;

  visited[start] = cnt++;

  for (const x of graph[start]) dfs(x);
};

dfs(R);
visited.shift();
console.log(visited.join("\n"));
