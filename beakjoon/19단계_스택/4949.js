const input = require("fs")
  .readFileSync("4949.txt")
  .toString()
  .trim()
  .split("\n");

const ans = [];

for (let i = 0; i < input.length - 1; i++) {
  const stack = [];
  for (let j = 0; j < input[i].length; j++) {
    const char = input[i][j];
    if (char === "(" || char === "[") {
      stack.push(char);
    } else if (
      (char === ")" && stack[stack.length - 1] === "(") ||
      (char === "]" && stack[stack.length - 1] === "[")
    ) {
      stack.pop();
    } else if (char === ")" || char === "]") {
      stack.push(char);
    }
  }
  ans.push(stack.length ? "no" : "yes");
}

console.log(ans.join("\n"));
