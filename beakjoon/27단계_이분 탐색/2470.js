const input = require("fs")
  .readFileSync("2470.txt")
  .toString()
  .trim()
  .split("\n");
const N = Number(input[0]);
const solution = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);

let L = 0;
let R = N - 1;
let ansL = 0;
let ansR = N - 1;
let mix = Math.abs(solution[L] + solution[R]);

// -2 4 -99 -1 98
while (L < R) {
  let mixTemp = solution[L] + solution[R];

  if (Math.abs(mixTemp) < mix) {
    mix = Math.abs(mixTemp);
    ansL = L;
    ansR = R;

    if (mix === 0) break;
  }

  if (mixTemp < 0) L++;
  else R--;
}

console.log(solution[ansL], solution[ansR]);
