const input = require("fs")
  .readFileSync("1449.txt")
  .toString()
  .trim()
  .split("\n");

const [N, L] = input[0].split(" ").map(Number);
const list = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let tape = 0; //구멍난 위치부터 테이프로 고칠수있는 범위
let cnt = 0;

for (let i = 0; i < N; i++) {
  // tape보다 작거나 같은 위치는 하나의 테이프로 해결가능
  // 범위 넘어가면 새 테이프 필요
  if (tape < list[i]) {
    cnt++;
    tape = list[i] + L - 1;
  }
}

console.log(cnt);
