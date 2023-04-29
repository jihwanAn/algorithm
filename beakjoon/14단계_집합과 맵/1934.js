const input = require("fs")
  .readFileSync("1934.txt")
  .toString()
  .trim()
  .split("\n");

const iter = input.shift();

let ans = [];
for (let i = 0; i < iter; i++) {
  let [a, b] = input[i].split(" ").map(Number);
  const numA = a,
    numB = b;

  // 유클리드 호세법
  while (a % b !== 0) {
    let r = a % b;
    if (r !== 0) {
      a = b;
      b = r;
    }
  }
  // 1 % 45000 = 1
  // 45000 % 1 = 0 → 최소공약수 1

  // 6 % 10 = 6
  // 10 % 6 = 4
  // 6 % 4 = 2
  // 4 % 2 = 0 → 최소공약수 2

  // 13 % 17 = 13
  // 17 % 13 = 4
  // 13 % 4 = 1
  // 4 % 1 = 0 → 최소공약수 1

  // 최소공배수 = num1 * num2 / 최소공약수
  ans.push((numA * numB) / b);
}
console.log(ans.join("\n"));
