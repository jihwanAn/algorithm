let [x, y, w, h] = require("fs")
  .readFileSync("1085.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

console.log(Math.min(x, y, Math.abs(x - w), Math.abs(y - h)));
