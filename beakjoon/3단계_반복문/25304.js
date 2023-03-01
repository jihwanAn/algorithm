let fs = require("fs");
let input = fs.readFileSync("25304.txt").toString().split("\n");

let totalPrice = +input[0]; // 총 가격
let count = +input[1]; // 총 상품 종류 갯수
let sum = 0;

for (let i = 2; i <= count + 1; i++) {
  let Arr = input[i].split(" ").map((item) => Number(item));
  sum += Arr[0] * Arr[1];
}
// console.log(`총 : ${totalPrice}, 결제 ${sum}`);
console.log(totalPrice === sum ? "Yes" : "No");
