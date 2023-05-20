const N = +require("fs").readFileSync("10870.txt").toString().trim();
const resultArr = [0, 1];

for (let i = 0; i < N; i++) {
  resultArr.push(resultArr[i] + resultArr[i + 1]);
}

console.log(resultArr[resultArr.length - 2]);
