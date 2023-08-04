const input = require("fs")
  .readFileSync("7579.txt")
  .toString()
  .trim()
  .split("\n");
const [N, M] = input[0].split(" ").map(Number);
const resource = [0].concat(input[1].split(" ").map(Number));
const cost = [0].concat(input[2].split(" ").map(Number));
const DP = [];

// 냅색 알고리즘
for (let i = 0; i <= N; i++) {
  DP.push(Array.from({ length: M + 1 }, (v, i) => 0));
}

for (let i = 1; i <= M; i++) {
  DP[0][i] = -1;
}

for (let row = 1; row <= N; row++) {
  for (let col = 1; col <= M; col++) {
    // 현재 행(현재 앱 메모리) < 현재 열(확보하려는 메모리)
    if (resource[row] < col) {
      if (DP[row - 1][col] != -1) {
        // 확보 메모리를 현재 앱 안 지우고, 그 이전의 앱들 지워서 채우는 경우가 존재할 때
        DP[row][col] = Math.min(
          DP[row - 1][col],
          cost[row] + DP[row - 1][col - resource[row]]
        );
      } else {
        // 확보 메모리를 현재 앱 안 지우고, 그 이전의 앱들만으로 지워서 채우는 경우가 존재하지 않을 때
        if (DP[row - 1][col - resource[row]] != -1) {
          // 현재 앱을 지우고, 나머지를 그 이전의 앱들을 지워서 채울 수 있을 때
          DP[row][col] = cost[row] + DP[row - 1][col - resource[row]];
        } else {
          // 현재 앱을 지우고, 나머지를 그 이전의 앱들을 지워 채울 수도 없을 때
          DP[row][col] = -1;
        }
      }
    } else {
      // 현재 행(현재 앱 메모리) > 현재 열(확보하려는 메모리)
      if (DP[row - 1][col] != -1) {
        DP[row][col] = Math.min(DP[row - 1][col], cost[row]);
      } else {
        // 현재 앱 안 지우고는 확보 메모리 못 채우는 경우
        DP[row][col] = cost[row];
      }
    }
  }
}

for (let i = 0; i < DP.length; i++) {
  console.log(DP[i].join(" "));
}

console.log(DP[N][M]);
