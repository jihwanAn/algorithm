/*
3개의 주사위를 던져서 

같은 눈 3개 === 10,000원+(같은 눈)×1,000원
같은 눈이 2개 === 1,000원+(같은 눈)×100원
모두 다른 눈 === (그 중 가장 큰 눈)x100원

*/

let fs = require("fs");
let numbers = fs.readFileSync("2480.txt").toString().split(" ");

const a = +numbers[0];
const b = +numbers[1];
const c = +numbers[2];

let money = 0;
let maxNum = 0;

if (a === b && a === c) {
  money = 10000 + a * 1000;
} else if (a === b || a === c || b === c) {
  if (a === b || a === c) {
    money = 1000 + a * 100;
  } else {
    money = 1000 + b * 100;
  }
} else {
  maxNum = Math.max(...numbers);
  money = maxNum * 100;
}

console.log(money);
