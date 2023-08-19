const input = require("fs")
  .readFileSync("2812.txt")
  .toString()
  .trim()
  .split("\n");
let [N, K] = input[0].split(" ");
const num = input[1].split("").map(Number);
const stack = [];

for (let i = 0; i < N; i++) {
  const curr = num[i];

  // stack이 채워져 있고, stack의 Top이 현재 값보다 작고, K 값이 있을때
  while (stack.length && stack[stack.length - 1] < curr && K) {
    stack.pop();
    K--;
  }
  stack.push(curr);
}

for (let i = 0; i < K; i++) {
  stack.pop();
}

console.log(stack.join(""));
