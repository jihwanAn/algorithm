let input = require("fs")
  .readFileSync("10798.txt")
  .toString()
  .trim()
  .split("\n");

const turnCnt = Math.max(...input.map((v) => v.length));

let result = "";

for (let i = 0; i < turnCnt; i++) {
  for (let j = 0; j < input.length; j++) {
    result += input[j][i] || "";
  }
}

console.log(result);
