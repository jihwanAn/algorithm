const [N, ...arr] = require("fs")
  .readFileSync("11399.txt")
  .toString()
  .trim()
  .split(/\s/)
  .map(Number);

arr.sort((a, b) => a - b);
let ans = 0;
let sum = 0;

for (let i = 0; i < N; i++) {
  sum += arr[i];
  ans += sum;
}
console.log(ans);
