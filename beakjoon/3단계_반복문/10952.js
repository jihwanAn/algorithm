let fs = require("fs");
let input = fs.readFileSync("10952.txt").toString().split("\n");

let i = 0;

while (i < input.length) {
  let A = parseInt(input[i].split(" ")[0]);
  let B = parseInt(input[i].split(" ")[1]);
  let result = A + B;

  if (result === 0) {
    break;
  } else {
    console.log(result);
  }
  i++;
}
