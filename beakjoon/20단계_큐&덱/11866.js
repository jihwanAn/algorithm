const [N, K] = require("fs")
  .readFileSync("11866.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

// 1 2 3 4 5 6 7
// 1 2 4 5 6 7 [3]
// 1 2 4 5 7 [6]
// 1 4 5 7 [2]
// 1 4 5 [7]
// 1 4 [5]
// 4 [1]
// [4]

const log = [];
const queue = Array(N)
  .fill(0)
  .map((v, i) => i + 1);
let idx = K - 1;

while (queue.length) {
  for (let i = 0; i < K - 1; i++) {
    const num = queue.shift();
    queue.push(num);
  }
  const num = queue.shift();
  log.push(num);
}
console.log(`<${log.join(", ")}>`);
