//두 수 비교
let fs = require("fs");
let input = fs.readFileSync("1330.txt").toString().split(" ");

const a = parseInt(input[0]);
const b = parseInt(input[1]);

if (a === b) {
  console.log("==");
} else if (a > b) {
  console.log(">");
} else {
  console.log("<");
}
