let fs = require("fs");
let input = fs.readFileSync("11021.txt").toString().split("\n");

let result = "";

for (let i = 1; i <= input[0]; i++) {
  let numbers = input[i].split(" ");
  result += `Case #${i}: ${Number(numbers[0]) + Number(numbers[1])}` + "\n";
}
console.log(result);
