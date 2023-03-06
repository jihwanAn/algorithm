// 1 ~ N 까지 번호가 매겨진 N개의 바구니가 있다.
// 또, 1 ~ 까지 번호가 적힌 매우 많은 공을 가지고 있다.
// M개의 줄에 거쳐서
// i번 부터, j번 바구니까지, k번 번호가 적힌 공을 넣는다.
// 공이 이미 있다면 있는 공을 빼고, 새로 공을 넣는다.

let fs = require("fs");
let input = fs.readFileSync("10810.txt").toString().trim().split("\n");

let line = input[0].split(" ");
let N = +line[0];
let M = +line[1];

let I,
  J,
  K = 0;
const result = Array.from({ length: N }, () => 0);

for (let i = 1; i <= M; i++) {
  const arr = input[i].split(" ");
  I = parseInt(arr[0]);
  J = parseInt(arr[1]);
  K = parseInt(arr[2]);

  for (let i = I; i <= J; i++) {
    result[i - 1] = K;
  }
}
result.forEach((i) => process.stdout.write(i + " "));
