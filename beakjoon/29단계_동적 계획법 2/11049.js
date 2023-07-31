const input = require("fs")
  .readFileSync("11049.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input[0]);
const matrix = [];

for (let i = 1; i <= N; i++) {
  matrix.push(input[i].split(" ").map(Number));
}

const DP = [];

for (let i = 0; i < N; i++) {
  DP.push([]);
  for (let j = 0; j < N; j++) {
    DP[i].push(0);
  }
}

for (let i = 1; i < N; i++) {
  for (let j = 0; j < N - i; j++) {
    const end = j + i;
    let result = Infinity;

    for (let k = j; k < end; k++) {
      result = Math.min(
        result,
        DP[j][k] + DP[k + 1][end] + matrix[j][0] * matrix[k][1] * matrix[end][1]
      );
    }
    DP[j][end] = result;
  }
}

console.log(DP[0][N - 1]);
