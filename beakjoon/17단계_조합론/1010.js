const [N, ...input] = require("fs")
  .readFileSync("1010.txt")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < N; i++) {
  let [n, m] = input[i].split(" ").map(Number);
  // 2 2
  // 1 5
  // 13 29
  let result = 1;

  for (let i = 0; i < n; i++) {
    result *= m - i;
    result /= i + 1;
  }

  console.log(result);
}
