let fs = require("fs");
let n = +fs.readFileSync("8393.txt").toString().split(" ");

let sum = 0;
for (let i = 1; i <= n; i++) {
  sum += i;
}
console.log(sum);
