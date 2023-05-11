const input = require("fs")
  .readFileSync("1874.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const N = input.shift();

let ans = [];
let stack = [];
let stackNum = 1; // 1부터 차례로

for (let i = 0; i < N; i++) {
  let num = input[i];

  while (stackNum <= num) {
    stack.push(stackNum);
    stackNum++;
    ans.push("+");
  }

  let stackPop = stack.pop();
  ans.push("-");

  if (stackPop !== num) {
    ans = ["NO"];
    break;
  }
}

console.log(ans.join("\n"));
