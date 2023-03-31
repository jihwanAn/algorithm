let input = require("fs")
  .readFileSync("3009.txt")
  .toString()
  .trim()
  .split("\n");

let arrX = [];
let arrY = [];

for (let i = 0; i < 3; i++) {
  arrX.push(Number(input[i].split(" ")[0]));
  arrY.push(Number(input[i].split(" ")[1]));
}
arrX = arrX.sort();
arrY = arrY.sort();

x = arrX[0] === arrX[1] ? arrX[2] : arrX[0];
y = arrY[0] === arrY[1] ? arrY[2] : arrY[0];

console.log(`${x} ${y}`);
