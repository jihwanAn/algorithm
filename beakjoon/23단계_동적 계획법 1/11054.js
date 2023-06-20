const input = require("fs")
  .readFileSync("11054.txt")
  .toString()
  .trim()
  .split("\n");
const N = +input.shift();
const num = input[0].split(" ").map((v) => +v);

const forwardDP = new Array(N).fill(1);
const reverseDP = new Array(N).fill(1);

for (let i = 1; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (num[i] > num[j]) {
      forwardDP[i] = Math.max(forwardDP[i], forwardDP[j] + 1);
    }
  }
}

for (let i = N - 2; i >= 0; i--) {
  for (let j = i + 1; j < N; j++) {
    if (num[i] > num[j]) {
      reverseDP[i] = Math.max(reverseDP[i], reverseDP[j] + 1);
    }
  }
}

const result = forwardDP.map((v, i) => v + reverseDP[i]);
console.log(Math.max(...result) - 1);
