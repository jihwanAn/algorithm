const input = require("fs")
  .readFileSync("2740.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const A = [];
const B = [];
const C = [];

const [N, M] = input.shift();
for (let i = 0; i < N; i++) {
  A.push(input.shift());
}

const [K, L] = input.shift();
for (let i = 0; i < K; i++) {
  B.push(input.shift());
}

while (B[0].length > 0) {
  const temp = [];

  for (let i = 0; i < K; i++) {
    temp.push(B[i].shift());
  }
  C.push(temp);
}

// 행렬의 곱셈
const ans = [];
for (let i = 0; i < N; i++) {
  ans.push([]);
  const X = A[i];
  for (let j = 0; j < L; j++) {
    let sum = 0;
    const Y = C[j];
    for (let k = 0; k < K; k++) {
      sum += X[k] * Y[k];
    }
    ans[ans.length - 1].push(sum);
  }
}

const result = ans.map((v) => v.join(" ")).join("\n");
console.log(result);
