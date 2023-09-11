const input = require("fs")
  .readFileSync("2473.txt")
  .toString()
  .trim()
  .split("\n");
const N = +input[0];
const nums = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

const ansArr = Array.from({ length: 3 }, () => 0);
let ans = Infinity; // 세 용액의 합

for (let i = 0; i < N - 2; i++) {
  // i를 고정으로 두고 i+1 ~ N-1 까지 구간에서 투포인터 순회
  let L = i + 1;
  let R = N - 1;

  while (L < R) {
    const sum = nums[i] + nums[L] + nums[R];

    if (Math.abs(sum) < ans) {
      ans = Math.abs(sum);
      ansArr[0] = nums[i];
      ansArr[1] = nums[L];
      ansArr[2] = nums[R];
    }
    sum < 0 ? L++ : R--;
  }
}

console.log(ansArr.join(" "));
