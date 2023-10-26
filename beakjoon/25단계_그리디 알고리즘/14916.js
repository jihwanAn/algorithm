let N = require("fs").readFileSync("14916.txt").toString();
let cnt = 0;

// 2와 5로 거슬러 주어야 함

if (N === 1 || N === 3) console.log(-1);

while (N > 0) {
  if (N % 2 === 1 || N % 5 === 0) {
    cnt++;
    N -= 5;
  } else if (N % 2 === 0) {
    cnt++;
    N -= 2;
  }
}
console.log(cnt);
