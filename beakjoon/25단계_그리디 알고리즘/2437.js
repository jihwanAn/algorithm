const input = require("fs")
  .readFileSync("2437.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input[0];
const arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let ans = 0; // 현재 측정 가능 무게의 최댓값

for (let i = 0; i < N; i++) {
  // 현재 측정 가능 무게보다 다음 추가 크면 → 다음 무게 측정 불가
  if (arr[i] > ans + 1) {
    break;
  }
  ans += arr[i];
}

console.log(ans + 1);
