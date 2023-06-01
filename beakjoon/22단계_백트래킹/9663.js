const N = +require("fs").readFileSync("9663.txt").toString().trim();
let ans = 0;

const isValid = (queens, row, col) => {
  // 이전 행들과 비교하면서 겹치는 열 또는 대각선에 위치하는지 확인
  for (let i = 0; i < row; i++) {
    if (
      queens[i] === col || // 같은 열에 위치하는 경우
      queens[i] - i === col - row || // 왼쪽 대각선에 위치하는 경우
      queens[i] + i === col + row // 오른쪽 대각선에 위치하는 경우
    ) {
      return false; // 겹치는 경우
    }
  }
  return true; // 유효한 배치인 경우
};

// 퀸을 배치하는 재귀 함수
const placeQueens = (queens, row) => {
  if (row === N) {
    ans++; // N개의 퀸을 모두 배치한 경우, 경우의 수 증가
    return;
  }

  for (let col = 0; col < N; col++) {
    if (isValid(queens, row, col)) {
      queens[row] = col; // 현재 행에 퀸 배치
      placeQueens(queens, row + 1); // 다음 행에 퀸 배치하기 위해 재귀 호출
    }
  }
};

placeQueens([], 0);
console.log(ans);
