const input = require("fs").readFileSync("11501.txt").toString().split("\n");
const T = input.shift();

for (let i = 0; i < T * 2; i += 2) {
  const N = input[i];
  const value = input[i + 1].split(" ").map(Number); // 날 별 주가

  let maxValue = 0; // 현재까지 주가 중 최댓값
  let ans = 0;

  // 뒤에서부터 최댓값 갱신
  for (let i = N - 1; i > -1; i--) {
    value[i] > maxValue ? (maxValue = value[i]) : (ans += maxValue - value[i]);
    console.log(ans);
  }

  console.log(ans);
}
