// let inputs = require("fs").readFileSync("11005.txt").toString().split(" ");

// let number = Number(inputs[0]);
// let base = Number(inputs[1]);

// let answer = [];

// let tmp = number;

// while (tmp !== 0) {
//   answer.push(tmp % base);
//   tmp = Math.floor(tmp / base);
// }
// answer = answer.reverse();

// for (var i = 0; i < answer.length; i++) {
//   if (answer[i] >= 10 && answer[i] <= 35) {
//     answer[i] = String.fromCharCode(answer[i] + 55);
//   }
// }
// console.log(answer.join("").trim());

const [n, b] = require("fs")
  .readFileSync("11005.txt")
  .toString()
  .trim()
  .split(" ")
  .map((v) => parseInt(v));
console.log(n.toString(b).toUpperCase());
