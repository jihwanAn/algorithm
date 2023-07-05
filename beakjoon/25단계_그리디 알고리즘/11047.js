let [N, ...nums] = require("fs")
  .readFileSync("11047.txt")
  .toString()
  .trim()
  .split(/\s+/)
  .map(Number);

let price = nums.shift();
nums.sort((a, b) => b - a);
let cnt = 0;

for (let i = 0; i < nums.length; i++) {
  if (price < nums[i]) {
    continue;
  } else {
    const val = Math.floor(price / nums[i]);
    price -= val * nums[i];
    cnt += val;

    if (price === 0) break;
  }
}

console.log(cnt);
