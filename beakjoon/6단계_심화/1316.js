let input = require("fs")
  .readFileSync("1316.txt")
  .toString()
  .trim()
  .split("\n");

let result = 0;

for (let i = 1; i <= input[0]; i++) {
  let obj = {};
  let isGroupWord = true;

  for (let j = 0; j < input[i].length; j++) {
    if (!(input[i][j] in obj)) {
      obj[input[i][j]] = 1;
    } else {
      if (input[i][j] !== input[i][j - 1]) isGroupWord = false;
    }
  }
  if (isGroupWord) result++;
}
console.log(result);
