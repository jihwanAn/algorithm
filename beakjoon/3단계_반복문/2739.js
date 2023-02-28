let fs = require("fs");
let input = fs.readFileSync("2739.txt").toString().split(" ");

const N = +input;
for (let i = 1; i < 10; i++) {
  console.log(`${N} * ${i} = ${N * i}`);
}
