const N = +require("fs").readFileSync("1904.txt").toString();
const arr = Array(N + 1);
arr[1] = 1;
arr[2] = 2;

for (let i = 3; i < arr.length; i++) {
  arr[i] = (arr[i - 1] + arr[i - 2]) % 15746;
}
console.log(arr[N]);
