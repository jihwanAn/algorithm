let fs = require("fs");
let input = fs.readFileSync("10818.txt").toString().trim().split("\n");

// let arr = input[1]
//   .split(" ")
//   .map((v) => Number(v))
//   .sort((a, b) => a - b);

// console.log(`${arr[0]} ${arr[arr.length - 1]}`);

let count = input[0];
let nums = input[1].split(" ").map(Number);

let max = nums[0];
let min = nums[0];

for (let i = 0; i < count; i++) {
  if (max < nums[i]) {
    max = nums[i];
  }
  if (min > nums[i]) {
    min = nums[i];
  }
}
console.log(min, max);
