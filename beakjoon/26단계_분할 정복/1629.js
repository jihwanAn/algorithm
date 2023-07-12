const [A, B, C] = require("fs")
  .readFileSync("1629.txt")
  .toString()
  .trim()
  .split(" ")
  .map(BigInt);

// (A * B) mod C = (A mod C * B mod C) mod C
// => A * B % C = ((A % C) * (B % C)) % C

const sol = (pow) => {
  // B가 1이면 바로 A%C 출력
  if (pow === 1n) return A % C;

  // B를 2로 나눈 값을 입력하여 함수를 재귀적으로 호출
  const half = sol(pow / 2n) % C;

  // B를 2로 나눈 나머지가 1(홀수)면 ((A^(B / 2) % C) * (A^(B / 2) % C) * (A % C)) % C
  if (pow % 2n) return (half * half * (A % C)) % C;

  // B가 짝수면 ((A^(B / 2) % C) * (A^(B / 2) % C)) % C
  return (half * half) % C;
};

console.log(sol(B).toString());
