let input = require("fs")
  .readFileSync("2908.txt")
  .toString()
  .trim()
  .split(" ")
  .map((n) => n.split("").reverse().join(""));

console.log(Math.max(...input));
