const input = require("fs")
  .readFileSync("2212.txt")
  .toString()
  .trim()
  .split("\n");
const N = Number(input[0]); // 센서 개수
const K = Number(input[1]); // 집중국의 개수
const sensor = input[2].split(" ").map(Number); // 센서 좌표

// 각 센서들의 거리의 차를 계산 → K - 1 부터 N - 1 까지의 거리의 합

const sol = (N, K, sensor) => {
  if (N <= K) return 0; // 센서 개수가 집중국 개수보다 작으면, 수신 가능 영역 0

  const diff = []; // 거리차
  let ans = 0;

  sensor.sort((a, b) => a - b); // 오름차순 정렬, [1, 3, 6, 6, 7, 9]

  for (let i = 0; i < N - 1; i++) {
    diff.push(sensor[i + 1] - sensor[i]); // 집중국의 거리 차
  }

  diff.sort((a, b) => b - a); // 거리 차를 내림차순으로 정렬

  // diff 배열의 K - 1 까지는 거리에 포함 X, 거리의 차는 N개가 아닌 N - 1개
  for (let i = K - 1; i < N - 1; i++) {
    ans += diff[i];
  }
  return ans;
};

console.log(sol(N, K, sensor));
