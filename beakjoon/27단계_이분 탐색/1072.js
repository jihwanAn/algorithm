const [X, Y] = require("fs")
  .readFileSync("1072.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

// 게임 횟수 X
// 이긴 게임 Y (Z%)

if (X == Y) {
  console.log(-1);
} else {
  const C = Math.floor((Y * 100) / X) + 1;

  if (C == 100) {
    console.log(-1);
  } else {
    const Z = Math.ceil((C * X - 100 * Y) / (100 - C));
    console.log(Z);
  }
}
