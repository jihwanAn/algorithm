let fs = require("fs");
let input = fs.readFileSync("10807.txt").toString().trim().split("\n");

// let result = 0;
// for (let i = 0; i < input[0]; i++) {
//   let numbers = +input[1].split(" ")[i];
//   if (numbers === +input[2]) {
//     result++;
//   }
// }
// console.log(result);

let arr = [];
input[1].split(" ").map((data) => arr.push(Number(data)));

let v = Number(input[2]);

const result = arr.filter((item) => {
  return item === v;
});

console.log(result.length);
