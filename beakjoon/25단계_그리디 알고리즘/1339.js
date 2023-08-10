const [N, ...words] = require("fs")
  .readFileSync("1339.txt")
  .toString()
  .trim()
  .split("\n");
const obj = {};

for (let i = 0; i < N; i++) {
  let word = words[i];

  for (let j = 0; j < word.length; j++) {
    let val = 10 ** (word.length - 1 - j);

    obj[word[j]] ? (obj[word[j]] += val) : (obj[word[j]] = val);
  }
}
let sorted = Object.values(obj).sort((a, b) => b - a);

console.log(
  sorted.reduce((acc, cur, idx) => {
    return acc + cur * (9 - idx);
  }, 0)
);
