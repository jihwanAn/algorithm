const [S, T] = require("fs")
  .readFileSync("12904.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(""));

// 문자열 뒤에 A를 추가
// 문자열 뒤집고 뒤에 B를 추가

// S, T 배열이 같지 않다면 계속해서
while (S.length !== T.length) {
  // T 배열의 마지막 요소 제거
  const str = T.pop();

  // str이'B'와 같으면 T 배열 뒤집기 → "B" 문자를 만날 때마다 T배열 뒤집는 작업
  if (str === "B") {
    T.reverse();
  }
}

console.log(S == T.join("") ? 1 : 0);
