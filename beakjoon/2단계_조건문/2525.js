let fs = require("fs");
let input = fs.readFileSync("2525.txt").toString().split("\n");

const h = parseInt(input[0].split(" ")[0]);
const m = parseInt(input[0].split(" ")[1]);
const t = parseInt(input[1]);

hour = Math.floor((h * 60 + m + t) / 60);
min = (h * 60 + m + t) % 60;
if (hour >= 24) {
  hour -= 24;
}

console.log(hour, min);
