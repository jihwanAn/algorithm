const input = require("fs")
  .readFileSync("2630.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
const paper = input.map((e) => e.split(" ").map(Number));

let blue = 0;
let white = 0;

// if 색종이를 만들 수 있으면 count++
// else 구역별로 1~4분면을 나누어 검사
// 정방형 모양만 존재하므로 size N / 2를 같이 전달

const quadrant = (r, c, n) => {
  // 해당 base 좌표부터 N 사이즈까지 같은 색인지 확인
  if (isFilledSameColor(r, c, n)) {
    if (paper[r][c] === 1) blue++;
    else white++;
    return;
  }

  let half = n / 2;
  // 1분면 (좌상)
  quadrant(r, c, half);
  // 2분면 (우상)
  quadrant(r, c + half, half);
  // 3분면 (좌하)
  quadrant(r + half, c, half);
  // 4분면 (우하)
  quadrant(r + half, c + half, half);
};

const isFilledSameColor = (r, c, n) => {
  const base = paper[r][c];
  for (let i = r; i < r + n; i++) {
    for (let j = c; j < c + n; j++) {
      console.log(`${i} ${j}`);
      if (base !== paper[i][j]) return false;
    }
  }
  return true;
};

quadrant(0, 0, +N);

console.log(`${white}\n${blue}`);
