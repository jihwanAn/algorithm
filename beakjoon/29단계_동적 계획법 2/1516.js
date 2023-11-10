const input = require("fs").readFileSync("1516.txt").toString().trim();
const [N, ...data] = input.split("\n");
console.log(
  sol(
    +N,
    data.map((e) => e.split(" ").map(Number))
  )
);

function sol(N, data) {
  const dp = Array(N + 1).fill(0);
  const graph = Array.from({ length: N + 1 }, () => []);
  const indegree = Array(N + 1).fill(0);

  for (let i = 0; i < data.length; i++) {
    dp[i + 1] = data[i][0];
    for (let j = 1; j < data[i].length - 1; j++) {
      indegree[i + 1]++;
      graph[data[i][j]].push(i + 1);
    }
  }

  const topologySort = () => {
    let queue = [];

    for (let i = 1; i <= N; i++) {
      if (indegree[i] === 0) {
        queue.push(i);
      }
    }

    while (queue.length > 0) {
      const nextQueue = [];
      const size = queue.length;

      for (let i = 0; i < size; i++) {
        const node = queue[i];

        for (const next of graph[node]) {
          indegree[next]--;
          dp[next] = Math.max(dp[next], dp[node] + data[next - 1][0]);
          if (indegree[next] === 0) nextQueue.push(next);
        }
      }
      queue = nextQueue;
    }
  };

  topologySort();

  let result = "";

  for (let i = 1; i <= N; i++) {
    result += `${dp[i]}\n`;
  }

  return result.trim();
}
