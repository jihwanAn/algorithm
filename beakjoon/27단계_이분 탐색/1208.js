const input = require("fs")
  .readFileSync("1208.txt")
  .toString()
  .trim()
  .split("\n");
const [N, S] = input[0].split(" ").map(Number);
const nums = input[1].split(" ").map(Number);
let memo = new Map();
let ans = 0;
const L = Math.floor(N / 2);
const len = nums.splice(L);

for (let i = 1; i < 1 << nums.length; i++) {
  const sum = nums
    .filter((_, idx) => i & (1 << idx))
    .reduce((r, v) => {
      return r + v;
    }, 0);

  if (sum == S) ans++;
  memo.set(sum, (memo.get(sum) ?? 0) + 1);
  console.log(memo);
}

for (let i = 1; i < 1 << len.length; i++) {
  const sum = len
    .filter((_, idx) => i & (1 << idx))
    .reduce((r, v) => {
      return r + v;
    }, 0);

  if (sum == S) ans++;
  ans += memo.get(S - sum) ?? 0;
}

console.log(ans);
