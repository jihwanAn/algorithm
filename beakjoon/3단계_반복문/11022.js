let fs = require("fs");
let input = fs.readFileSync("11021.txt").toString().split("\n");

for (let i = 1; i <= input[0]; i++) {
  let numbers = input[i].split(" ");
  // Case #1: 1 + 1 = 2
  console.log(
    `Case #${i}: ${Number(numbers[0])} + ${Number(numbers[1])} = ${
      Number(numbers[0]) + Number(numbers[1])
    }`
  );
}
