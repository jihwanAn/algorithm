const input = require("fs")
  .readFileSync("10830.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" "));

const N = +input[0][0];
const B = BigInt(input[0][1]);
const mtrx = input.splice(1).map((v) => v.map((x) => +x % 1000));

const ans = powMtrx(mtrx, B)
  .map((v) => v.join(" "))
  .join("\n");

console.log(ans);

function powMtrx(arr, k) {
  if (k == BigInt(1)) return arr;
  const temp = powMtrx(arr, k / BigInt(2));
  if (k % BigInt(2) == BigInt(0)) {
    return multiMtrx(temp, temp);
  } else {
    return multiMtrx(multiMtrx(temp, temp), arr);
  }
}

function multiMtrx(A, B) {
  const C = changeMtrx(B);
  const ans = [];
  for (let i = 0; i < N; i++) {
    ans.push([]);
    const X = A[i];
    for (let j = 0; j < N; j++) {
      let sum = 0;
      const Y = C[j];
      for (let k = 0; k < N; k++) {
        sum += X[k] * Y[k];
      }
      ans[ans.length - 1].push(sum % 1000);
    }
  }
  return ans;
}

function changeMtrx(arr) {
  const subMtrx = [];
  for (let i = 0; i < arr.length; i++) {
    subMtrx.push([]);
    for (let j = 0; j < arr.length; j++) {
      subMtrx[subMtrx.length - 1].push(arr[j][i]);
    }
  }
  return subMtrx;
}
