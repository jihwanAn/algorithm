const input = require("fs")
  .readFileSync("1946.txt")
  .toString()
  .trim()
  .split("\n");

const T = Number(input[0]);
let line = 1;

for (let i = 1; i <= T; i++) {
  let n = Number(input[line]);
  let arr = [];

  for (let j = line + 1; j <= line + n; j++) {
    arr.push(input[j].split(" ").map(Number));
  }

  arr.sort((a, b) => a[0] - b[0]);

  let minVal = arr[0][1];
  let ans = 1;

  for (let k = 1; k < arr.length; k++) {
    if (arr[k][1] <= minVal) {
      minVal = arr[k][1];
      ans++;
    }
  }

  console.log(ans);
  line += n + 1;
}
