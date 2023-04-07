let N = require("fs").readFileSync("1193.txt").toString().trim();

// 1/1
// 1/2 2/1
// 3/1 2/2 1/3
// 1/4 2/3 3/2 4/1
// 5/1 4/2 3/3 2/4 1/5

// 분모 = 짝수일 때 오름차순
// 분자 = 짝수일 때 내림차 순
// 홀수는 그 반대

let groupCounter = 0; // 해당 그룹 분수 개수
let ascendingNumArr = [];
let descendingNumArr = [];

while (N > 0) {
  groupCounter++;
  N = N - groupCounter;
}

for (let i = 0; i < groupCounter; i++) {
  ascendingNumArr.push(i + 1);
  descendingNumArr.push(groupCounter - i);
}

groupCounter % 2 === 0
  ? console.log(
      `${ascendingNumArr[groupCounter - 1 + N]}/${
        descendingNumArr[groupCounter - 1 + N]
      }`
    )
  : console.log(
      `${descendingNumArr[groupCounter - 1 + N]}/${
        ascendingNumArr[groupCounter - 1 + N]
      }`
    );

// const n = require("fs").readFileSync("1193.txt").toString().trim() * 1;

// let current = 0;
// let delta = 1;

// while (current + delta < n) {
//   current += delta++;
//   console.log(current, delta);
// }

// delta % 2 == 0
//   ? console.log(`${n - current}/${delta - (n - current) + 1}`)
//   : console.log(`${delta - (n - current) + 1}/${n - current}`);
