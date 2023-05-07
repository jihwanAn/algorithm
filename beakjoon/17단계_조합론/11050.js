const [N, K] = require("fs")
  .readFileSync("11050.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

// nCk = n! / (k! * (n - k)!)
// 5 2

let n = 1;
let k = 1;

for (let i = N - K + 1; i <= N; i++) {
  n *= i;
}
for (let i = 1; i <= K; i++) {
  k *= i;
}
console.log(n / k);
