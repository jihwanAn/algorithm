const input = require("fs")
  .readFileSync("2559.txt")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input[0].split(" ").map(Number);
const data = input[1].split(" ").map(Number);
const prefixSum = [0];

for (let i = 1; i <= N; i++) {
  prefixSum[i] = prefixSum[i - 1] + data[i - 1];
}

let max = Number.MIN_SAFE_INTEGER;
for (let i = K; i <= N; i++) {
  max = Math.max(max, prefixSum[i] - prefixSum[i - K]);
}
console.log(max);
