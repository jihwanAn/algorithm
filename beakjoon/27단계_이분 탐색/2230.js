const [NM, ...arr] = require("fs")
  .readFileSync("2230.txt")
  .toString()
  .trim()
  .split("\n");
const [N, M] = NM.split(" ").map(Number);
const num = arr.map(Number).sort((a, b) => a - b);

let ans = Number.MAX_SAFE_INTEGER;
let start = 0;
let end = 0;

// 투포인터
while (start <= end && end < N) {
  let diff = Math.abs(num[start] - num[end]);

  if (diff < M) end++;
  else {
    ans = Math.min(ans, diff);
    start++;
  }
  if (diff === M) break;
}
console.log(ans);
