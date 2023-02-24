let fs = require("fs");
let input = fs.readFileSync("14681.txt").toString().trim().split("\n");

const a = +input[0];
const b = +input[1];

// 삼항연산
// if (a > 0) {
//   console.log(b > 0 ? 1 : 4);
// } else {
//   console.log(b > 0 ? 2 : 3);
// }

if (a > 0 && b > 0) {
  console.log("1");
} else if (a < 0 && b > 0) {
  console.log("2");
} else if (a < 0 && b < 0) {
  console.log("3");
} else {
  console.log("4");
}
