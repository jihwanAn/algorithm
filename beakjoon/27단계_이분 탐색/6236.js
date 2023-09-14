const input = require("fs").readFileSync("6236.txt").toString().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const money = input.slice(1).map(Number);

let min = Math.max(...money); // 인출 최소값 → 하루 사용 금액 중 최댓값
let max = money.reduce((a, v) => a + v);

while (min <= max) {
  let mid = Math.floor((min + max) / 2);
  let sum = 0;
  let cnt = 0; // 인출 횟수 초기화

  for (let i = 0; i < N; i++) {
    if (sum + money[i] > mid) {
      cnt++;
      sum = 0;
    }
    sum += money[i];
  }

  if (sum > 0) cnt++;

  cnt <= M ? (max = mid - 1) : (min = mid + 1);
}

console.log(min);
