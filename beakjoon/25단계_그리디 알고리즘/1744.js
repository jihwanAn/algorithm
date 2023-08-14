const [N, ...num] = require("fs")
  .readFileSync("1744.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);
const posNum = num.filter((v) => v > 0).sort((a, b) => b - a);
const negNum = num.filter((v) => v <= 0).sort((a, b) => a - b);
let ans = 0;

for (let i = 0; i < posNum.length; i += 2) {
  if (i === posNum.length - 1) ans += posNum[i];
  else if (posNum[i] * posNum[i + 1] > posNum[i] + posNum[i + 1]) {
    ans += posNum[i] * posNum[i + 1];
  } else {
    ans += posNum[i] + posNum[i + 1];
  }
}

for (let i = 0; i < negNum.length; i += 2) {
  if (i === negNum.length - 1) ans += negNum[i];
  else ans += negNum[i] * negNum[i + 1];
}

console.log(ans);
