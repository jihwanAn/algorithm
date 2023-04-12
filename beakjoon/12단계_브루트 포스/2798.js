// M 넘지 않는 한도 내에서, 3장의 합 가장 크게

let [[N, M], [...num]] = require("fs")
  .readFileSync("2798.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

let max = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    for (let k = 0; k < N; k++) {
      if (i == j || i == k || j == k) {
        continue;
      }
      const sum = num[i] + num[j] + num[k];
      if (sum > max && sum <= M) {
        max = sum;
      }
      if (max == M) {
        break;
      }
    }
  }
}

console.log(max);
