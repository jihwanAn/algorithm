const input = require("fs")
  .readFileSync("2110.txt")
  .toString()
  .trim()
  .split("\n");

const [N, C] = input[0].split(" ").map(Number);
const arr = input
  .slice(1)
  .map(Number)
  .sort((a, b) => a - b);

let end = arr[arr.length - 1] - arr[0];
let start = 1;
let result = 0;

while (start <= end) {
  const mid = Math.floor((start + end) / 2);
  let val = arr[0];
  let cnt = 1;

  for (let i = 1; i < N; i++) {
    if (arr[i] >= val + mid) {
      val = arr[i];
      cnt++;
    }
  }
  if (C > cnt) {
    end = mid - 1;
  } else {
    result = mid;
    start = mid + 1;
  }
}

console.log(result);
