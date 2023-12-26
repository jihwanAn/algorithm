const input = require("fs")
  .readFileSync("2606.txt")
  .toString()
  .trim()
  .split("\n");
const N = Number(input[0]); // 총 
const edge = Number(input[1]); // 연결된 수
const graph = [...new Array(N + 1)].map(() => []);
const visited = [...new Array(N + 1)].fill(0);
let ans = 0;

// DFS
// 간선 정보를 입력받아서 그래프를 생성
for (let i = 0; i < edge; i++) {
  let start = Number(input[i + 2].split(" ")[0]);
  let end = Number(input[i + 2].split(" ")[1]);

  graph[start].push(end);
  graph[end].push(start);
}

// 1번 노드부터 바이러스 걸리므로(시작점), 1번노드 방문처리해주고 dfs 시작
visited[1] = 1;

const dfs = (start) => {
  for (let end of graph[start]) {
    // 방문하지 않은 노드가 있으면 방문처리 후 ans++
    if (!visited[end]) {
      visited[end] = 1;
      ans++;
      dfs(end);
    }
  }
}

dfs(1);
console.log(ans);