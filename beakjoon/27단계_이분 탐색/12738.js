const input = require("fs").readFileSync("12738.txt").toString().split("\n");
const N = Number(input[0]);
const nums = input[1].split(" ").map(Number);
const lis = [nums[0]];

for (let i = 1; i < N; i++) {
  const curr = nums[i]; // 현재요소
  let L = 0;
  let R = lis.length;

  while (L < R) {
    let mid = Math.floor((L + R) / 2);

    curr <= lis[mid] ? (R = mid) : (L = mid + 1);
  }

  // R === lis의 배열 길이 → curr을 lis 배열에 추가, 아니면 lis 배열 해당 위치에 curr 값 삽입
  R === lis.length ? lis.push(curr) : (lis[R] = curr);
}

console.log(lis.length);
