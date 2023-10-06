const input = require("fs")
  .readFileSync("7795.txt")
  .toString()
  .trim()
  .split("\n");
const tc = input.shift();

for (let i = 0; i < tc; i++) {
  const [sizeA, sizeB] = input.shift().split(" ").map(Number);
  const arrA = input
    .shift()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  const arrB = input
    .shift()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  let result = 0;
  let indexB = 0;

  for (const A of arrA) {
    // 배열 A의 현재 요소가 배열 B의 요소보다 크고, indexB가 배열 B의 길이보다 작은 동안 반복
    while (A > arrB[indexB] && indexB < sizeB) {
      indexB++;
    }
    result += indexB;
  }
  console.log(result);
}
