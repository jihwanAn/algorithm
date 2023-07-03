const input = require("fs")
  .readFileSync("16139.txt")
  .toString()
  .trim()
  .split("\n");

const [S, q] = [input[0], +input[1]];
const l = S.length;
const A = Array(26)
  .fill()
  .map((_) => Array(l).fill(0));
const ans = [];

for (let i = 0; i < 26; i++)
  for (let j = 0; j < l; j++)
    A[i][j] = (A[i][j - 1] ?? 0) + +(i == S[j].charCodeAt() - 97);

// A에 a-z의 누적 합 저장
for (let i = 2; i < q + 2; i++) {
  const [a, l, r] = input[i].split(" ");
  const j = a.charCodeAt() - 97;
  ans.push(A[j][r] - (A[j][l - 1] ?? 0));
  console.log(ans);
}
console.log(ans.join("\n"));
