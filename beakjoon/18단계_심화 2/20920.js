// 자주 나오는 단어일수록 앞에 배치한
// 단어의 길이가 길수록 앞에 배치
// 사전 순으로 배치

const input = require("fs")
  .readFileSync("20920.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input.shift().split(" ").map(Number);
let wordCnt = {};

input.forEach((word) => {
  word.length >= m ? (wordCnt[word] = (wordCnt[word] || 0) + 1) : 0;
});

let sorted = Object.keys(wordCnt).sort(
  (a, b) => wordCnt[b] - wordCnt[a] || b.length - a.length || a.localeCompare(b)
);

console.log(sorted.join("\n"));
