let fs = require("fs");
let N = fs.readFileSync("25314.txt").toString().split(" ");

let arr = [];

let count = N / 4;

for (let i = 1; i <= count; i++) {
  arr += "long ";
}

console.log(`${arr}int`);
