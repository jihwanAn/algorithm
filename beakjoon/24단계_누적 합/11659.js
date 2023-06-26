const input = require("fs")
  .readFileSync("11659.txt")
  .toString()
  .trim()
  .split("\n");
const arr = input[1].split(" ").map(Number);
const cumsum = new Array(arr.length + 1).fill(0);
const output = [];

// 누적합 저장
arr.forEach((v, i) => {
  cumsum[i + 1] = cumsum[i] + v;
});

input.slice(2).forEach((ij) => {
  const [i, j] = ij.split(" ").map(Number);
  output.push(cumsum[j] - cumsum[i - 1]);
  // cumsum[j] - cumsum[i-1] → arr의 i~j까지의 합과 같다.
});

console.log(output.join("\n"));
