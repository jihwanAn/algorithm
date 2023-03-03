let fs = require("fs");
let input = fs.readFileSync("2439.txt").toString();

let result = "";

// for (let i = 0; i < input; i++) {
//   let blank = "";
//   result += "*";
//   for (let j = input - i; j > 1; j--) {
//     blank += " ";
//   }
//   console.log(blank + result);
// }

//* repeat 메서드 사용하여
for (let i = 1; i <= input; i++) {
  console.log(" ".repeat(input - i) + "*".repeat(i));
}
