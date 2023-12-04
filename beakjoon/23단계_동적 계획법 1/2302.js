const input = require("fs")
  .readFileSync("2302.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

// 자신의 양옆으로 한칸 자리 옮길 수 있음, 단 “VIP 회원"은 고정!
const n = Number(input[0]); // 좌석
const m = Number(input[1]); // 고정석 갯수
let fixed = []; // vip
let dp = [];

for (let i = 0; i < m; i++) {
  fixed.push(Number(input[2 + i]));
}

dp[0] = 1;
dp[1] = 2;

for (let i = 2; i < 40; i++) {
  dp[i] = dp[i - 2] + dp[i - 1];
}

let ans = 1;
let prev = 0;

for (vip of fixed) {
  let temp = vip - prev - 1;

  if (temp !== 0) {
    ans *= dp[temp - 1];
  }
  prev = vip;
}

if (prev !== n) {
  ans *= dp[n - prev - 1];
}

console.log(ans);
