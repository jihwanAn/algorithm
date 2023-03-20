let input = require("fs").readFileSync("4344.txt").toString().split("\n");

let tc = Number(input[0]);

for (let i = 1; i <= tc; i++) {
  let [stuNums, ...scoreArr] = input[i].split(" ").map(Number);

  let avgOfStuArr = scoreArr.reduce((acc, cur) => acc + cur) / stuNums;
  let filterStuAvg = scoreArr.filter((ele) => {
    return ele > avgOfStuArr;
  });

  console.log(((filterStuAvg.length / stuNums) * 100).toFixed(3) + "%");
}

// let num = Number(input[0]);

// for (let i = 1; i <= num; i++) {
//   let sum = 0;
//   let count = 0;

//   scores = input[i].split(" ").map(Number);

//   const n = scores[0];

//   for (let j = 1; j <= n; j++) {
//     sum += scores[j];
//   }

//   const avg = sum / n;

//   for (let k = 1; k <= n; k++) {
//     if (scores[k] > avg) {
//       count++;
//     }
//   }
//   console.log(((count / n) * 100).toFixed(3) + "%");
// }
