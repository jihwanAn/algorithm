const input = require("fs")
  .readFileSync("./dev/stdin")
  .toString()
  .trim()
  .split("\n");
const T = +input.shift();

for (let i = 0; i < T; i++) {
  input.shift();
  const A = input
    .shift()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  input.shift();
  const B = input.shift().split(" ").map(Number);
  let ans = [];

  B.forEach((target) => {
    let min = 0;
    let max = A.length - 1;
    let mid;
    let success = false;

    while (min <= max) {
      mid = Math.floor((min + max) / 2);

      if (A[mid] == target) {
        success = true;
        break;
      } else if (A[mid] < target) {
        min = mid + 1;
      } else {
        max = mid - 1;
      }
    }

    const res = success ? 1 : 0;
    ans.push(res);
  });

  console.log(ans.join("\n"));
}
