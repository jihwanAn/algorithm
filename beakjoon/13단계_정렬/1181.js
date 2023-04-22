const s = require("fs").readFileSync("1181.txt").toString().trim().split("\n");

sol(s);

function sol(input) {
  let answer = [];
  let arr = input;
  arr.shift();

  // 중복제어
  arr = Array.from(new Set(arr));

  let sorted = arr.sort((a, b) => {
    // 길이별 정렬
    // 길이가 짧은 것 부터
    if (a.length !== b.length) {
      return a.length - b.length;
    }
  });
  for (let i = 1; i <= sorted[sorted.length - 1].length; i++) {
    // 같은 길이면 사전순 정렬
    let temp = sorted.filter((el) => el.length === i);
    answer.push(...temp.sort());
  }
  for (let word of answer) {
    console.log(word);
  }
}
