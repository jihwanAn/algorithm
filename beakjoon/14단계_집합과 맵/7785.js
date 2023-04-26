const input = require("fs")
  .readFileSync("7785.txt")
  .toString()
  .trim()
  .split("\n");

const n = input.shift();
let set = new Set();

for (let i = 0; i < n; i++) {
  const [name, state] = input[i].split(" ");
  state === "enter" ? set.add(name) : set.delete(name);
}

let ans = [...set].sort().reverse();
console.log(ans.join("\n"));
