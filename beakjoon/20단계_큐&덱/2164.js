const N = +require("fs").readFileSync("2164.txt").toString().trim();

const queue = Array(N)
  .fill(0)
  .map((v, i) => i + 1);

let startIndex = 0;

while (startIndex < queue.length) {
  startIndex += 2;
  if (startIndex >= queue.length) {
    break;
  }
  queue.push(queue[startIndex - 1]);
}

console.log(queue[queue.length - 1]);
