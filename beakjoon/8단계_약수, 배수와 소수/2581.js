const fs = require("fs");
const input = fs
  .readFileSync("2581.js")
  .toString()
  .trim()
  .split("\n")
  .map((num) => Number(num));

const startNum = input[0];
const endNum = input[1];

let checkedArr = [];

// 소수 판별 실행
outer: for (let i = startNum; i <= endNum; i++) {
  if (i === 1) {
    continue;
  }
  // i를 2 ~ i까지 숫자로 나눠보고, 나눠지면 소수 아님
  inner: for (let j = 2; j * j <= i; j++) {
    if (i % j === 0) {
      continue outer;
    }
  }
  // 모두 통과하면 push
  checkedArr.push(i);
}

if (checkedArr.length === 0) {
  console.log(-1);
} else {
  // sum 초기값 0, 배열의 현재 값 curr과 sum 누적합 = 배열 원소의 합
  const arrSum = checkedArr.reduce((sum, curr) => {
    return sum + curr;
  }, 0);

  console.log(arrSum);

  // Math.min() 메서드에 배열을 넣을 때는 ...(spread 연산자)
  console.log(Math.min(...checkedArr));
}
