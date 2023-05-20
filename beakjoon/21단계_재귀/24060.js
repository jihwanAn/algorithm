const [[_, K], arr] = require("fs")
  .readFileSync("24060.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

let cnt = 0;
let target;

function mergeSort(arr) {
  if (arr.length < 2) return arr;

  const mid = Math.ceil(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid, arr.length));

  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let [i, j] = [0, 0];

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
    cnt++;
    if (cnt === K) target = result[result.length - 1];
  }

  while (i < left.length) {
    result.push(left[i]);
    i++;
    cnt++;
    if (cnt === K) target = result[result.length - 1];
  }

  while (j < right.length) {
    result.push(right[j]);
    j++;
    cnt++;
    if (cnt === K) target = result[result.length - 1];
  }
  return result;
}

mergeSort(arr);
if (!target) target = -1;

console.log(target);
