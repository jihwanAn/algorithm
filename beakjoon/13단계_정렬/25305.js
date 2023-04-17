const n = require("fs").readFileSync("25305.txt").toString().trim().split("\n");
const [_, k] = n[0].split(" ").map(Number);
const score = n[1].split(" ").sort((a, b) => b - a);

console.log(score[k - 1]);
