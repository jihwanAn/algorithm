const [_, ...input] = require("fs")
  .readFileSync("5430.txt")
  .toString()
  .trim()
  .split("\n");

const ans = [];

for (let i = 0; i < input.length; i += 3) {
  const p = input[i];
  const n = +input[i + 1];
  const arr = JSON.parse(input[i + 2]);
  let isReverse = false;
  let isError = false;
  let start = 0;
  let end = n - 1;

  for (const cmd of p) {
    if (cmd === "R") {
      isReverse = !isReverse;
    } else {
      if (start > end) {
        isError = true;
        break;
      }
      isReverse ? end-- : start++;
    }
  }
  const outputArr = arr.slice(start, end + 1);
  ans.push(
    isError
      ? "error"
      : JSON.stringify(isReverse ? outputArr.reverse() : outputArr)
  );
}

console.log(ans.join("\n"));
