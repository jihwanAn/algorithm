const input = require("fs")
  .readFileSync("10866.txt")
  .toString()
  .trim()
  .split("\n");

input.shift();
const Deque = [];
const ans = [];

for (i of input) {
  let [cmd, n] = i.split(" ");

  if (cmd === "push_front") Deque.unshift(n);
  else if (cmd === "push_back") Deque.push(n);
  else if (cmd === "pop_front") ans.push(Deque.shift() || -1);
  else if (cmd === "pop_back") ans.push(Deque.pop() || -1);
  else if (cmd === "size") ans.push(Deque.length);
  else if (cmd === "empty") ans.push(Deque.length === 0 ? 1 : 0);
  else if (cmd === "front") ans.push(Deque[0] || -1);
  else if (cmd === "back") ans.push(Deque[Deque.length - 1] || -1);
}
console.log(ans.join("\n"));
