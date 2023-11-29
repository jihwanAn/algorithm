const input = require("fs")
  .readFileSync("2631.txt")
  .toString()
  .trim()
  .split("\n");

const N = input.shift();
const arr = input.map(Number);
const longest = new Array(N).fill(1); // 현재 순차적으로 배치되어있는 최대 부분수열의 길이

for (let i = 1; i < N; i++) {
  let cnt = 0;

  for (let j = 0; j < i; j++) {
    if (arr[j] < arr[i]) cnt = Math.max(cnt, longest[j]);
  }
  longest[i] = cnt + 1;
}

// 전체 사람 수 - longest = 최소로 움직여서 배치가능 경우
console.log(N - Math.max(...longest));
