let fs = require("fs");
let input = fs.readFileSync("1000.txt").toString().split(" ");

const a = parseInt(input[0]);
const b = parseInt(input[1]);
console.log(a + b);
