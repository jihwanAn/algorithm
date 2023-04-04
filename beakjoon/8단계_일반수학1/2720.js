let [_, ...C] = require("fs")
  .readFileSync("2720.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

// 쿼터 $0.25, 다임 $0.10, 니켈 $0.05, 페니 $0.01

// input 을 쿼터 ~ 페니 순서대로 나눈다

// for (let i = 0; i < N; i++) {
//   const Qua = Math.floor(C[i] / 25);
//   const Dim = Math.floor((C[i] - Qua * 25) / 10);
//   const Nic = Math.floor((C[i] - Qua * 25 - Dim * 10) / 5);
//   const Pen = C[i] % 5;

//   console.log(Qua, Dim, Nic, Pen);
// }

const answer = C.map((P) => {
  const Q = parseInt(P / 25);
  P %= 25;
  const D = parseInt(P / 10);
  P %= 10;
  const N = parseInt(P / 5);
  P %= 5;

  return `${Q} ${D} ${N} ${P}`;
});
console.log(answer.join("\n"));
