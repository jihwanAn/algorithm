let input = require("fs")
  .readFileSync("9465.txt")
  .toString()
  .trim()
  .split("\n");

let testNum = parseInt(input[0]);

for (let i = 0; i < testNum; i++) {
  let n = parseInt(input[1 + i * 3]);
  let sticker1 = input[2 + i * 3].split(" ").map(Number);
  let sticker2 = input[3 + i * 3].split(" ").map(Number);

  let dp = new Array(3).fill(0); // 0: 안 고름, 1: 첫째줄 사용, 2: 둘째줄 사용

  dp[1] = sticker1[0];
  dp[2] = sticker2[0];

  for (let j = 1; j < n; j++) {
    let v1 = Math.max(dp[0], dp[1], dp[2]);
    let v2 = Math.max(dp[0] + sticker1[j], dp[2] + sticker1[j]);
    let v3 = Math.max(dp[0] + sticker2[j], dp[1] + sticker2[j]);

    dp[0] = v1;
    dp[1] = v2;
    dp[2] = v3;
  }

  console.log(Math.max(...dp));
}
