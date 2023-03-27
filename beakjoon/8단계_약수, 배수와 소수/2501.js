// N 까지 수 중에서
// N / i 중 나머지 0인것 반환 => 배열에 추가
// K 번째 수 출력 (배열에 담긴 약수의 개수보다 K가 크면 = 0)

let [N, K] = require("fs")
  .readFileSync("2501.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

let num = [];

for (let i = 1; i <= N; i++) {
  if (N % i === 0) num.push(i);
}
console.log(K <= num.length ? num[K - 1] : 0);
