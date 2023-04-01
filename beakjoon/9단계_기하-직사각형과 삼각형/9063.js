// 평행한 직사각형
// x축, y축에서 각각 가장큰값 & 작은 값 구하기
// 가장큰값 - 작은 값

let [N, ...input] = require("fs")
  .readFileSync("9063.txt")
  .toString()
  .trim()
  .split("\n");

const arrX = [];
const arrY = [];

input.forEach((v) => {
  const [x, y] = v.split(" ");
  arrX.push(Number(x));
  arrY.push(Number(y));
});

arrX.sort((a, b) => a - b);
arrY.sort((a, b) => a - b);

console.log(
  (arrX[arrX.length - 1] - arrX[0]) * (arrY[arrY.length - 1] - arrY[0])
);
