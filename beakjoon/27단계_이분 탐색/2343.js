const input = require("fs")
  .readFileSync("2343.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const arr = input[1].split(" ").map(Number);

let left = Math.max(...arr);
let right = arr.reduce((acc, cur) => acc + cur);
let ans = Number.MAX_SAFE_INTEGER;

while (left <= right) {
  let mid = Math.floor((left + right) / 2);
  let tmp = 0;
  let cnt = 1;

  for (let i = 0; i < arr.length; i++) {
    if (tmp + arr[i] <= mid) {
      tmp += arr[i];
    } else {
      tmp = 0 + arr[i];
      cnt++;
      if (cnt > M) break;
    }
  }

  if (cnt > M) {
    left = mid + 1;
  }

  if (cnt <= M) {
    if (ans >= mid) ans = mid;
    right = mid - 1;
  }
}
console.log(ans);
