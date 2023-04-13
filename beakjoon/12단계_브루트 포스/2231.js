// 216
// 198
// 198 + 1 + 9 + 8 = 216

let N = require("fs").readFileSync("2231.txt").toString().trim();

let len = N.length;

let target = Number(N);

for (let i = target - 9 * len; i < target + 9 * len; i++) {
  let result = i;

  let arr = String(i).split("");

  arr.forEach((el) => (result += +el));
  if (result === target) {
    console.log(i);
    return;
  }
}
console.log(0);

// let answer = 0;

// for (let i = 0; i < N; i++) {
//   let sum = 0;

//   const v = i;

//   const strV = String(v);

//   for (let j = 0; j < strV.length; j++) {
//     sum += Number(strV[j]);
//   }

//   sum += v;

//   if (sum === N) {
//     answer = v;
//     break;
//   }
// }

// console.log(answer);
