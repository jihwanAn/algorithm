// let input = require("fs").readFileSync("2745.txt").toString().trim().split(" ");

// let N = input[0].split("").reverse();
// let B = input[1];
// let result = 0;

// for (let i = 0; i < N.length; i++) {
//   result += B ** i * getNumber(N[i]);
// }
// console.log(result);

// function getNumber(code) {
//   if (isNaN(parseInt(code))) {
//     return code.charCodeAt(0) - 55;
//   } else {
//     return parseInt(code);
//   }
// }

const [n, b] = require("fs")
  .readFileSync("2745.txt")
  .toString()
  .trim()
  .split(" ");

console.log(parseInt(n, +b));
