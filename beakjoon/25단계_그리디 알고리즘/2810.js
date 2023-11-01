const [N, seat] = require("fs")
  .readFileSync("2810.txt")
  .toString()
  .trim()
  .split("\n");

// S 또는 LL인 경우 분할하고 length를 구하면 컵 홀더의 개수
const num = seat.split(/S|LL/g).length;

// 홀더 수와 좌석 수 중 작은 것이 홀더에 놓을 수 있는 최대 사람의 수
console.log(Math.min(N, num));
