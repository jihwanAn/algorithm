const input = require("fs").readFileSync("2512.txt").toString().split("\n");
const N = Number(input[0]);
const M = Number(input[2]);
const request = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let low = 1;
let high = request[N - 1];

// 120 110 140 150
while (low <= high) {
  const mid = Math.floor((low + high) / 2);
  const sum = request.reduce((acc, v) => acc + (v <= mid ? v : mid), 0);

  if (sum <= M) {
    low = mid + 1;
  } else {
    high = mid - 1;
  }
}

console.log(high);
