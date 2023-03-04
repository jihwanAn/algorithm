let fs = require("fs");
let input = fs.readFileSync("10951.txt").toString().trim().split("\n");

for (let i = 0; i < input.length; i++) {
  let number = input[i].split(" ").map(Number);
  console.log(number[0] + number[1]);
}
