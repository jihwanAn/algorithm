const input = require("fs")
  .readFileSync("2805.txt")
  .toString()
  .trim()
  .split("\n");
const [N, M] = input.shift().split(" ");
const trees = input[0]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

function solve(arr, t) {
  let start = 0;
  let end = arr[arr.length - 1];
  let ans = Number.MIN_SAFE_INTEGER;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let sum = 0;
    for (let x of arr) {
      if (x > mid) sum += x - mid;
    }

    if (sum >= t) {
      if (mid > ans) ans = mid;
      // 최댓값 계속 구해주기
      // 이 부분을 제외하고는 일반적인 이분탐색 코드와 똑같다
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return ans;
}

console.log(solve(trees, M));
