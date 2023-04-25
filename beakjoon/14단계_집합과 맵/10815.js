const input = require("fs")
  .readFileSync("10815.txt")
  .toString()
  .trim()
  .split("\n");

// 비교대상이 너무 많은 경우, 시간복잡도 O(1)인 Set 사용이 더 유리
const cards = new Set(input[1].split(" "));
const targets = input[3].split(" ");

const result = targets.map((t) => (cards.has(t) ? 1 : 0));
console.log(result.join(" "));
