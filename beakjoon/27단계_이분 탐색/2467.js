const input = require("fs")
  .readFileSync("2467.txt")
  .toString()
  .trim()
  .split("\n");
const N = Number(input[0]);
const nums = input[1].split(" ").map(Number);
let [L, R, min, ans] = [0, N - 1, Infinity, ""];

// 이분 탐색
while (L < R) {
  const mix = nums[L] + nums[R];

  if (Math.abs(mix) < min) {
    min = Math.abs(mix);
    ans = `${nums[L]} ${nums[R]}`;
  }
  mix < 0 ? L++ : R--;
}
console.log(ans);
