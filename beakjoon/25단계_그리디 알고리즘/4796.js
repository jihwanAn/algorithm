const input = require("fs")
  .readFileSync("4796.txt")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < input.length - 1; i++) {
  // 연속 이용 가능일(L), 영업일(P), 휴가 기간(V)
  const [L, P, V] = input[i].split(" ").map(Number);

  const rest = V % P > L ? L : V % P;

  const ans = Math.floor(V / P) * L + rest;

  console.log(`Case ${i + 1}: ${ans}`);
}
