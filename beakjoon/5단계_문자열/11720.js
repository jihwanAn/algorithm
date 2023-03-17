let input = require("fs").readFileSync("11720.txt").toString().split("\n");

let num = input[1].split("");
// let sum = 0;

// for (let i = 0; i < input[0]; i++) {
//   sum += +num[i];
// }
// console.log(sum);

let sum = num.reduce((acc, v) => {
  return acc + v * 1;
}, 0);
console.log(sum);
