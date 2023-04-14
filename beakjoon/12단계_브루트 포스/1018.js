let [NM, ...color] = require("fs")
  .readFileSync("1018.txt")
  .toString()
  .trim()
  .split("\n");

let N = +NM.split(" ")[0];
let M = +NM.split(" ")[1];

let white = [
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
];
let black = [
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
];

let board = [];

for (let i = 0; i < N; i++) {
  board[i] = color.shift().split("");
}

// 전부 고쳐야할 경우 64
let answer = 64;

for (let i = 0; i <= N - 8; i++) {
  for (let j = 0; j <= M - 8; j++) {
    check(j, i);
  }
}

function check(x, y) {
  let checkWhite = 0;
  let checkBlack = 0;

  for (let i = y; i < y + 8; i++) {
    for (let j = x; j < x + 8; j++) {
      if (board[i][j] !== white[i - y][j - x]) checkWhite++;
      if (board[i][j] !== black[i - y][j - x]) checkBlack++;
    }
  }

  let min = checkBlack < checkWhite ? checkBlack : checkWhite;

  // 더 작은 min이 되도록 계속해서 업데이트
  if (min < answer) answer = min;
}

console.log(answer);
