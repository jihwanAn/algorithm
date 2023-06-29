const input = require("fs").readFileSync("10986.txt").toString().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const num = input[1].split(" ").map(Number);
const remainderCnt = new Array(M).fill(0);
let prefixSum = 0;
let countOfRemainderZero = 0;
let totalCnt = 0;

for (let i = 0; i < N; i++) {
  prefixSum = (prefixSum + num[i]) % M;

  // 현재 부분합의 나머지가 0인 경우를 카운트
  if (prefixSum === 0) countOfRemainderZero++;

  // 이전에 나온 같은 나머지의 개수를 카운트
  totalCnt += remainderCnt[prefixSum];
  // 현재 나머지의 개수를 증가시킴
  remainderCnt[prefixSum]++;
}

console.log(totalCnt + countOfRemainderZero);
