const [N, K] = require("fs")
  .readFileSync("11866.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const queue = Array(N)
  .fill(0)
  .map((v, i) => i + 1);
let idx = K - 1;
const log = [];

while (queue.length) {
  while (!queue[idx]) idx -= queue.length;
  console.log("d", idx);
  log.push(queue.splice(idx, 1));
  idx += K - 1;
}
console.log(`<${log.join(", ")}>`);
