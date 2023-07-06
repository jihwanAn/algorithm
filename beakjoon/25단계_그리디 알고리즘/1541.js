let input = require("fs").readFileSync("1541.txt").toString().split("\n");
const arr = input[0].split("-");
let ans = 0;

for (let i = 0; i < arr.length; i++) {
  let cur = arr[i]
    .split("+")
    .map(Number)
    .reduce((a, b) => a + b);

  if (i === 0) ans += cur;
  else ans -= cur;
}

console.log(ans);
