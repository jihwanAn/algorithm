const input = require("fs").readFileSync("2352.txt").toString().split("\n");
const N = Number(input[0]);
let ports = input[1].split(" ").map(Number);

let LIS = [ports[0]];

const binarySearch = (L, R, tar) => {
  let mid = 0;

  while (L < R) {
    mid = Math.floor((L + R) / 2);

    LIS[mid] < tar ? (L = mid + 1) : (R = mid);
  }
  return R;
};

let i = 1;
let j = 0;

while (i < N) {
  if (LIS[j] < ports[i]) {
    LIS[j + 1] = ports[i];
    j++;
  } else {
    let idx = binarySearch(0, j, ports[i]);
    LIS[idx] = ports[i];
  }
  i++;
}

console.log(LIS.length);
