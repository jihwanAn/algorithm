const input = require("fs")
  .readFileSync("1654.txt")
  .toString()
  .trim()
  .split("\n");

const [K, N] = input.shift().split(" ");
const lines = input.map(Number).sort((a, b) => a - b); // 이분 탐색은 정렬된 배열에만 적용 가능
const t = +N;

let left = 0;
let right = lines[lines.length - 1];

let ans = Number.MIN_SAFE_INTEGER;

while (left <= right) {
  let mid = Math.floor((left + right) / 2);
  let lineNum = lines.reduce((acc, cur) => acc + Math.floor(cur / mid), 0); //  mid 값에 따라서 구해지는 랜선의 갯수

  // 구해지는 랜선의 개수가 t보다 같거나 많은 경우
  if (lineNum >= t) {
    // mid값 중 최댓값
    if (mid > ans) ans = mid;

    // 구해지는 랜선의 길이를 낮게해야함
    // → 랜선을 나누는 길이를 높여줘야함
    // → left를 증가시켜 줘야 함
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(ans);
