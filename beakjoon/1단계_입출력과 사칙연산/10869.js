let fs = require("fs");
let input = fs.readFileSync("10869.txt").toString().split(" ").map(Number);

const a = input[0];
const b = input[1];

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(parseInt(a / b));
console.log(a % b);
