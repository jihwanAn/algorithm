const n = +require("fs").readFileSync("9657.txt").toString();

// 1개, 3개, 4개
// 마지막 가져가는 사람 승
// 상근 먼저

const memo = [0, 1, 0, 1, 1];

for (let i = 5; i <= n; i++) {
  // 하나라도 0이면 다음에 상근 승, 1
  if (memo[i - 1] + memo[i - 3] + memo[i - 4] < 3) memo[i] = 1;
  // 전부 1이면 무조건 횟수 2번이므로 창영 승, 0
  else memo[i] = 0;
}

console.log(memo[n] === 1 ? "SK" : "CY");
