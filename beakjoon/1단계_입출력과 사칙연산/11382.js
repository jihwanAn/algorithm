let fs = require("fs");
let input = fs.readFileSync("11382.txt").toString().split(" ").map(Number);

const a = input[0];
const b = input[1];
const c = input[2];

console.log(a + b + c);
