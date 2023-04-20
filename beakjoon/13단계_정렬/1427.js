let n = require("fs")
  .readFileSync("1427.txt")
  .toString()
  .trim()
  .split("")
  .map(Number);

console.log(n.sort((a, b) => b - a).join(""));
