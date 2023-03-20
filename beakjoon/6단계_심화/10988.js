let input = require("fs").readFileSync("10988.txt").toString().trim();

// true = 1 , false = 0 출력

// if (input === input.split("").reverse().join("")) {
//   console.log(1);
// } else console.log(0);

const len = input.length / 2;

const left = input.slice(0, parseInt(len));
const right = input.slice(Number.isInteger(len) ? len : parseInt(len) + 1);

if (left === right.split("").reverse().join("")) console.log(1);
else console.log(0);
