let input = require("fs")
  .readFileSync("1300.txt")
  .toString()
  .trim()
  .split("\n");
const [n, k] = input.map(Number);

let min = 1,
  max = k;
let ans = 0;

while (min <= max) {
  let mid = Math.floor((min + max) / 2);
  let cnt = 0;

  for (let i = 1; i <= n; i++) {
    cnt += Math.min(Math.floor(mid / i), n);
  }

  if (cnt >= k) {
    ans = mid;
    max = mid - 1;
  } else min = mid + 1;
}

console.log(ans);
