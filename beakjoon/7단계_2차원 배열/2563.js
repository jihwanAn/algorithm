// 100 x 100 크기 배열을 만든다 (fill 0)
// 10 x 10 정사각형 들어온 부분 +1
// 1인 부분만 모두 더한다.

let input = require("fs")
  .readFileSync("2563.txt")
  .toString()
  .trim()
  .split("\n");

const num = input.shift();

let arr = Array.from(new Array(100), () => Array(100).fill(0));

let result = 0;

for (let i = 0; i < num; i++) {
  let x = +input[i].split(" ")[0];
  let y = +input[i].split(" ")[1];

  for (let j = x; j < x + 10; j++) {
    for (let k = y; k < y + 10; k++) {
      // arr[j][k]가 0이면 => 1, result ++ (겹치는 부분을 제외 시킴)

      if (arr[j][k] === 0) {
        arr[j][k] = 1;
        result++;
      }
      console.log(arr);
    }
  }
}
console.log(result);
