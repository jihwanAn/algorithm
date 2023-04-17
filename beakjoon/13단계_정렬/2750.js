const input = require("fs")
  .readFileSync("2750.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

function sortNumber(input) {
  input.shift();
  let sortArr = input.sort((a, b) => a - b);
  console.log(sortArr.join("\n"));
}

sortNumber(input);
