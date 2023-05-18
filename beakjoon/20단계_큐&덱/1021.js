const input = require("fs")
  .readFileSync("1021.txt")
  .toString()
  .trim()
  .split("\n");

const [N, M] = input[0].split(" ").map(Number);
const target = input[1].split(" ").map(Number);
let queue = Array(N)
  .fill()
  .map((v, i) => i + 1);
let ans = 0;

for (t of target) {
  while (true) {
    if (queue.indexOf(t) === 0) {
      queue.shift();
      break;
    }
    queue.indexOf(t) < queue.length - queue.indexOf(t)
      ? queue.push(queue.shift())
      : queue.unshift(queue.pop());

    ans += 1;
  }
}

console.log(ans);
