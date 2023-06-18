const N = +require("fs").readFileSync("1463.txt").toString().trim();
let ans = new Array(N + 1).fill(0);
ans[2] = 1;
ans[3] = 1;

for (let i = 4; i <= N; i++) {
  // 점화식
  ans[i] = ans[i - 1] + 1;

  if (i % 3 === 0) ans[i] = Math.min(ans[i], ans[i / 3] + 1);
  if (i % 2 === 0) ans[i] = Math.min(ans[i], ans[i / 2] + 1);
}
console.log(ans[N]);
