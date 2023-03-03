let fs = require("fs");
let input = fs.readFileSync("2438.txt").toString();

let result = "";

for (let i = 1; i <= input; i++) {
  result += "*";
  console.log(result);
}
