const [N, r, c] = require("fs")
  .readFileSync("1074.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const sol = (N, r, c) => {
  if (N === 0) return 0;

  // 현재 단계에서 나누는 크기의 반
  const half = 1 << (N - 1); // 비트 연산

  if (r < half && c < half) return sol(N - 1, r, c); // 왼쪽 위 영역
  if (r < half && c >= half) return half * half + sol(N - 1, r, c - half); // 오른쪽 위 영역
  if (r >= half && c < half) return 2 * half * half + sol(N - 1, r - half, c); // 왼쪽 아래 영역
  return 3 * half * half + sol(N - 1, r - half, c - half); // 오른쪽 아래 영역
};

console.log(sol(N, r, c));
