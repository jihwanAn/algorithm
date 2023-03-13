// 최댓값 M , 모든 점수를 점수/M*100
// M = 70 이면, 50/70*100 => 71.43
//  절대오차 또는 상대오차가 10-2 이하

let input = require("fs")
  .readFileSync("1546.txt")
  .toString()
  .trim()
  .split("\n");

// const score = input.split(" ").map(Number);
// score.sort((a, b) => b - a); // 최댓값 찾기
// const max = score[0];
// const sumScore = score.map((v) => (v / max) * 100);

// let sum = 0;
// for (let i = 0; i < n; i++) {
//   sum += sumScore[i];
// }
// console.log(sum / n);

const n = +input[0];
const score = input[1].split(" ");
const max = Math.max(...score);
let sum = 0;

for (let i = 0; i < n; i++) {
  sum += (score[i] / max) * 100;
}
console.log(sum / n);
