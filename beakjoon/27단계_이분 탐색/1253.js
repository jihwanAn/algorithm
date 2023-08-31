const input = require("fs")
  .readFileSync("1253.txt")
  .toString()
  .trim()
  .split("\n");

//투포인터
function sol(arr, num) {
  let start = 0;
  let end = N - 1;

  // 두 수가 만나면 안됨
  while (start < end) {
    let sum = arr[start] + arr[end];

    if (sum === num) return 1;
    if (sum < num) start++; // num보다 작다면 start++
    else end--; // 아니면 end--
  }
  return 0; // 결국 num과 같지 않다면 return 0
}

const N = input[0];
const arr = input[1]
  .split(" ")
  .map(Number)
  .sort((a, b) => a - b);
let cnt = 0;

for (let i = 0; i < N; i++) {
  let num = arr[i]; // 현재 요소
  let newarr = arr.slice(0, i).concat(arr.slice(i + 1)); // num만 없는 새로운 배열

  if (sol(newarr, num) === 1) cnt++;
  else continue;
}
console.log(cnt);
