const input = require("fs")
  .readFileSync("18870.txt")
  .toString()
  .trim()
  .split("\n");

input.shift();
let inputArr = input[0].split(" ").map(Number);

// 중복 제거
let arr = [...new Set(inputArr)].sort((a, b) => a - b);

let dic = new Map();
for (let i = 0; i < arr.length; i++) {
  dic.set(arr[i], i);
}

let answer = "";
for (x of inputArr) answer += dic.get(x) + " ";

console.log(answer.trim());
