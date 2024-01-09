const input = require("fs").readFileSync("1697.txt").toString().split("\n");
const N = Number(input[0].split(" ")[0]);
const K = Number(input[0].split(" ")[1]);

// BFS
let visited = new Array(100001).fill(0);
let queue = [N];
let ans = 0;

if (N === K) return console.log(0);

while (queue.length) {
  let len = queue.length;

  for (let i = 0; i < len; i++) {
    let X = queue.shift();

    // X-1, X+1, 2*X 세가지 경로
    for (let t of [X - 1, X + 1, X * 2]) {
      if (t >= 0 && visited[t] === 0) {
        if (t === K) return console.log(ans + 1);
        queue.push(t);
        visited[t] = 1;
      }
    }
  }
  ans++;
}

console.log(-1);
