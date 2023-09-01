const input = require("fs")
  .readFileSync("2143.txt")
  .toString()
  .trim()
  .split("\n");
const T = Number(input[0]);
const a = input[2].split(" ").map(Number); // 1 3 1 2
const b = input[4].split(" ").map(Number); // 1 3 2

let cnt = 0;

let A = new Map(); // 부분합 값 저장

// 첫 번째 부분합 계산
for (let i = 0; i < a.length; i++) {
  let sum = 0;

  for (let j = i; j < a.length; j++) {
    sum += a[j]; // sum에 현재 범위 부분합을 계산
    A.set(sum, (A.get(sum) ?? 0) + 1); // sum이 Map에 이미 존재하면 값을 가져와서 +1, 없으면 0 + 1
  }
}

// 두 번째 부분합 계산, 경우의 수 세기
for (let i = 0; i < b.length; i++) {
  let sum = 0;

  for (let j = i; j < b.length; j++) {
    sum += b[j];
    cnt += A.get(T - sum) ?? 0; // T와 어울리는 부분합이 A Map에 있으면, cnt에 더함
  }
}

console.log(cnt);
