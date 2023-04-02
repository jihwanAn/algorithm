// Equilateral :  세 변의 길이가 모두 같은 경우
// Isosceles : 두 변의 길이만 같은 경우
// Scalene : 세 변의 길이가 모두 다른 경우

// 두변의 길이합 < 가장 긴 변 => "Invalid"

let input = require("fs")
  .readFileSync("5073.txt")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < input.length - 1; i++) {
  const [fir, sec, thi] = input[i]
    .split(" ")
    .sort((a, b) => a - b)
    .map(Number);

  if (fir + sec <= thi) console.log("Invalid");
  else if (fir === thi) console.log("Equilateral");
  else if (fir === sec || sec === thi) console.log("Isosceles");
  else console.log("Scalene");
}
