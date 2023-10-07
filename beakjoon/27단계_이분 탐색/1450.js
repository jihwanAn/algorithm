const input = require("fs")
  .readFileSync("1450.txt")
  .toString()
  .trim()
  .split("\n");
const [N, C] = input[0].split(" ").map(Number);
const B = input[1].split(" ").map(Number);
const A = [];

for (let i = 0; i < Math.ceil(N / 2); i++) {
  A.push(B.shift());
}
const sumA = subsetSum(A).sort((a, b) => a - b);
const sumB = subsetSum(B);

function subsetSum(arr) {
  let result = [];
  let len = arr.length;

  for (let i = 0; i < 1 << len; i++) {
    let sum = 0;

    for (let j = 0; j < len; j++) {
      if (i & (1 << j)) {
        sum += arr[j];
      }
    }
    result.push(sum);
  }
  return result;
}

let ans = 0;

for (let i = 0; i < sumB.length; i++) {
  if (sumB[i] > C) continue;
  let min = 0;
  let max = sumA.length;

  while (min < max) {
    let mid = Math.floor((min + max) / 2);

    sumA[mid] + sumB[i] <= C ? (min = mid + 1) : (max = mid);
  }

  ans += max;
}

console.log(ans);
