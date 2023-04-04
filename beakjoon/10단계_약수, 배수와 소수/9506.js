// 약수 구하여 배열에 담는다.
// 배열을 모두 합하여 자신과 같으면 완전수
// ex. 6 = 1 + 2 + 3 와 같이 출력
// 완전수가 아니면
// ex. 12 is NOT perfect. 와 같이 출력

let input = require("fs")
  .readFileSync("9506.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

input.pop();
const result = input.map((n) => {
  let divisors = new Set([1]);

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (!(n % i)) {
      divisors.add(i);
      divisors.add(n / i);
    }
  }
  divisors = [...divisors].sort((a, b) => a - b);
  return n === divisors.reduce((a, c) => a + c, 0)
    ? `${n} = ${divisors.join(" + ")}`
    : `${n} is NOT perfect.`;
});

console.log(result.join("\n"));
