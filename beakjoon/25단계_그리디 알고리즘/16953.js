const [A, B] = require("fs")
  .readFileSync("16953.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);
let ans = -1;

const DFS = (start, goal, cnt) => {
  if (start === goal) ans = cnt + 1;
  else {
    if (start * 2 <= goal) {
      DFS(start * 2, goal, cnt + 1);
    }
    if (Number(start + "1") <= goal) {
      DFS(Number(start + "1"), goal, cnt + 1);
    }
  }
};

DFS(A, B, 0);
console.log(ans);
