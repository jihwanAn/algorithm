let remain = require("fs")
  .readFileSync("3052.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number)
  .map((v) => v % 42);

let result = [...new Set(remain)]; // Set : 유일한 값을 저장 == 중복제거
console.log(parseInt(result.length));

// const rest = [];

// input.forEach((v) => {
//   const num = v % 42;

//   if (rest.indexOf(num) === -1) {
//     rest.push(num);
//   }
// });
