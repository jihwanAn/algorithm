let fs = require("fs");
let input = +fs.readFileSync("2753.txt").toString().split(" ");

if ((input % 4 === 0 && input % 100 !== 0) || input % 400 === 0) {
  console.log("1");
} else {
  console.log("0");
}
