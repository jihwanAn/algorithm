// 세 각의 크기가 모두 60이면 = Equilateral
// 세 각의 합이 180이고, 두 각이 같으면 = Isosceles
// 세 각의 합이 180이고, 같은 각이 없으면 = Scalene
// 세 각의 합이 180이 아니면 = Error

let [A, B, C] = require("fs")
  .readFileSync("10101.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let sum = A + B + C;

if (sum === 180) {
  if (A === 60 && B === 60 && C === 60) console.log("Equilateral");
  else if (A === B || B === C || A === C) console.log("Isosceles");
  else console.log("Scalene");
} else console.log("Error");
