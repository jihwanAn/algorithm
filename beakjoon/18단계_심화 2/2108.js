const num = require("fs")
  .readFileSync("2108.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const N = num.shift();

num.sort((a, b) => a - b);

// N개 수의 합을 N으로 나눈 값
const avg = Math.round(num.reduce((a, b) => a + b) / N);

// 증가 순서로 나열하고 그 중앙에 위치하는 값
const center = num[Math.floor(N / 2)];

// 가장 많이 나타나는 값
function getMostValue() {
  const map = new Map();
  for (let n in num) {
    !map.has(num[n])
      ? map.set(num[n], 1)
      : map.set(num[n], map.get(num[n]) + 1);
  }

  let maxValue = 0;
  let arr = [];
  map.forEach((el, key) => {
    if (maxValue < el) {
      maxValue = el;
      arr = [];
      arr.push(key);
    } else if (maxValue === map.get(key)) {
      arr.push(key);
    }
  });
  return arr.length !== 1 ? arr[1] : arr[0];
}

// 최댓값과 최솟값의 차이
const range = Math.abs(num[0] - num[N - 1]);

console.log(`${avg}\n${center}\n${getMostValue()}\n${range}`);
