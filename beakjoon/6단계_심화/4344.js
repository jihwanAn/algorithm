let input = require("fs").readFileSync("4344.txt").toString().split("\n");

let total = Number(input[0]);

for (let i = 1; i <= total; i++) {
  let [nums, ...scoreArr] = input[i].split(" ").map(Number);
  // 평균 구하기
  let avg = scoreArr.reduce((a, c) => a + c) / nums;

  // 평균을 넘는 학생
  let filterAvg = scoreArr.filter((e) => {
    return e > avg;
  });

  console.log(((filterAvg.length / nums) * 100).toFixed(3) + "%");
}
