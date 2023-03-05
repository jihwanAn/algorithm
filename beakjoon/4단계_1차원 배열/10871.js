let fs = require("fs");
let input = fs.readFileSync("10871.txt").toString().trim().split("\n");

let arr1 = input[0].split(" ").map(Number);
let arr2 = input[1].split(" ").map(Number);

let result = "";
for (let i = 0; i < arr1[0]; i++) {
  if (arr2[i] < arr1[1]) {
    result += ` ${arr2[i]}`;
  }
}
console.log(result.trim());
