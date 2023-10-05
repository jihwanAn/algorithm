const input = require("fs")
  .readFileSync("3079.txt")
  .toString()
  .trim()
  .split("\n");
const [N, M] = input.shift().split(" ").map(BigInt); // 총 N 개의 심사대, 총 M 명
const time = input.map(BigInt);

let [L, R] = [1n, 10n ** 9n * M];

while (L < R) {
  const C = BigInt((L + R) / 2n);
  const S = time.reduce((a, b) => a + BigInt(C / b), 0n);
  S < M ? (L = C + 1n) : (R = C);
}

console.log(R.toString());
