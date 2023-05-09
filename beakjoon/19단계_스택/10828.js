const input = require("fs")
  .readFileSync("10828.txt")
  .toString()
  .trim()
  .split("\n");

const stack = [];
const result = [];

for (let e of input) {
  if (e.includes("push")) {
    stack.push(Number(e.split(" ")[1]));
  } else if (e === "top") {
    stack.length !== 0 ? result.push(stack[stack.length - 1]) : result.push(-1);
  } else if (e === "size") {
    result.push(stack.length);
  } else if (e === "empty") {
    stack.length !== 0 ? result.push(0) : result.push(1);
  } else if (e === "pop") {
    stack.length !== 0 ? result.push(stack.pop()) : result.push(-1);
  }
}

console.log(result.join("\n"));
