let input = require("fs")
  .readFileSync("14425.txt")
  .toString()
  .trim()
  .split("\n");

let [N, M] = input[0].split(" ").map(Number);

let arrN = new Set(input.slice(1, N + 1));
let arrM = input.slice(N + 1);
let cnt = 0;

for (let i = 0; i < M; i++) {
  if (arrN.has(arrM[i])) cnt++;
}
console.log(cnt);
