const input = require("fs")
  .readFileSync("24444.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M, R] = input.shift().split(" ").map(Number);
const arr = input.map((v) => v.split(" ").map(Number));
const nodes = Array.from(Array(N + 1), () => []);
const visited = Array(N).fill(0);
let cnt = 1;

for (let [u, v] of arr) {
  nodes[u].push(v);
  nodes[v].push(u);
}

for (let n of nodes) {
  n.sort((a, b) => a - b);
}

const bfs = (start) => {
  const queue = [start];
  let startIdx = 0;

  visited[start - 1] = cnt++;

  while (startIdx < queue.length) {
    const cur = queue[startIdx++];

    for (let next of nodes[cur]) {
      if (visited[next - 1] > 0) continue;

      visited[next - 1] = cnt++;
      queue.push(next);
    }
  }
};

bfs(R);
const ans = visited.join("\n");

console.log(ans);
