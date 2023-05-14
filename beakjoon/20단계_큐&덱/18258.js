const input = require("fs")
  .readFileSync("18258.txt")
  .toString()
  .trim()
  .split("\n");

const N = Number(input.shift());
const queue = [];
const ans = [];
let idx = 0;

for (let i = 0; i < N; i++) {
  let [cmd, n] = input[i].split(" ");

  if (cmd == "push") {
    queue.push(n);
  } else if (cmd == "pop") {
    ans.push(queue[idx] || -1);
    if (queue[idx]) idx++;
  } else if (cmd == "size") {
    ans.push(queue.length - idx);
  } else if (cmd == "empty") {
    ans.push(queue.length - idx > 0 ? 0 : 1);
  } else if (cmd == "front") {
    ans.push(queue[idx] || -1);
  } else if (cmd == "back") {
    ans.push(idx == queue.length ? -1 : queue[queue.length - 1] || -1);
  }
}

console.log(ans.join("\n"));
