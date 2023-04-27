const input = require("fs")
  .readFileSync("1764.txt")
  .toString()
  .trim()
  .split("\n");

const [N] = input.shift().split(" ").map(Number);

const n = new Set();
const m = new Set();
for (let i = 0; i < input.length; i++) {
  i < N ? n.add(input[i]) : m.add(input[i]);
}

let ans = [];

m.forEach((i) => {
  n.has(i) ? ans.push(i) : 0;
});

ans.sort();
console.log(ans.length + "\n" + ans.join("\n"));
