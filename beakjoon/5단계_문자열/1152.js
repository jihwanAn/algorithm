let num = require("fs").readFileSync("1152.txt").toString().trim().split(" ");

// let num = 0;

// for (let i = 0; i < input.length; i++) {
//   // 공백 [""] => 1 출력,
//   // 입력값이 "" 인 경우 제외
//   if (input[i] !== "") {
//     num++;
//   }
// }

// console.log(num);

console.log(num[num.length - 1] === "" ? 0 : num.length);
