const input = require("fs")
  .readFileSync("1365.txt")
  .toString()
  .trim()
  .split("\n");
const N = Number(input[0]);
const poles = input[1].split(" ").map(Number);

let LIS = [poles[0]];
let ans = 0;

// 1 2 3 4
// 2 3 4 1
const BinarySearch = (num) => {
  let L = 0;
  let R = LIS.length - 1;

  while (L <= R) {
    let mid = parseInt((L + R) / 2);

    if (LIS[mid] === num) return mid;
    else if (LIS[mid] > num) R = mid - 1;
    else L = mid + 1;
  }

  return L;
};

for (let pole of poles) {
  LIS[LIS.length - 1] < pole
    ? LIS.push(pole)
    : (LIS[BinarySearch(pole)] = pole);
}

ans = N - LIS.length;
console.log(ans);
