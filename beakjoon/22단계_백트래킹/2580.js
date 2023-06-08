let input = require("fs")
  .readFileSync("2580.txt")
  .toString()
  .trim()
  .split("\n");

input = input.map((row) => row.split(" ").map(Number));

const zero = getZero();
const N = zero.length;
let ans = "";
DFS(0);

function DFS(L) {
  if (L === N) {
    for (let x of input) {
      ans += `${x.join(" ")}\n`;
    }
    console.log(ans);
    process.exit(0);
  } else {
    let [row, col] = zero[L];

    for (let i = 1; i <= input.length; i++) {
      if (check(row, col, i)) {
        input[row][col] = i;
        DFS(L + 1);
        input[row][col] = 0;
      }
    }
  }
}

function check(row, col, val) {
  const threeRow = Math.floor(row / 3) * 3;
  const threeCol = Math.floor(col / 3) * 3;

  for (let i = 0; i < input.length; i++) {
    if (input[row][i] === val || input[i][col] === val) return false;
  }

  for (let i = threeRow; i < threeRow + 3; i++) {
    for (let j = threeCol; j < threeCol + 3; j++) {
      if (input[i][j] === val) return false;
    }
  }

  return true;
}

function getZero() {
  const arr = [];
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      if (input[i][j] === 0) arr.push([i, j]);
    }
  }
  return arr;
}
