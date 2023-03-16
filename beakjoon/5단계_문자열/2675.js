let input = require("fs").readFileSync("2675.txt").toString().split("\n");

let mainIter = Number(input[0]);

for (let i = 1; i <= mainIter; i++) {
  let inputData = input[i].split(" ");
  let iter = Number(inputData[0]);
  let str = inputData[1];

  let result = "";

  for (let j = 0; j < str.length; j++) {
    for (let k = 0; k < iter; k++) {
      result += str[j];
    }
  }
  console.log(result);
}

//* repeat 메서드 사용으로 주어진 횟수만큼 반복

// for (let i = 0; i < mainIter; i++) {
//   let result = "";

//   const [iter, str] = input[i].split(" ");

//   for (let j = 0; j < str.length; j++) {
//     result += str[j].repeat(iter);
//   }

//   console.log(result);
// }
