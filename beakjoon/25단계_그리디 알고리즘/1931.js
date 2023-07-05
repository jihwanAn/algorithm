const input = require("fs")
  .readFileSync("1931.txt")
  .toString()
  .trim()
  .split("\n");

const N = +input.shift();
let ans = 0;
const times = input
  .map((n) => n.split(" ").map(Number))
  .sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0];
    } else {
      return a[1] - b[1];
    }
  });

let end = 0;
times.forEach((t) => {
  if (t[0] >= end) {
    ans++;
    end = t[1];
  }
});
console.log(ans);
