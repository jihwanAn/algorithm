const input = require("fs")
  .readFileSync("1759.txt")
  .toString()
  .trim()
  .split("\n");

// 4 6
const [L, C] = input[0].split(" ").map(Number);
const alph = input[1].split(" ").sort();

const minOne = ["a", "e", "i", "o", "u"];
let result = [];

const sol = (str, k) => {
  if (str.length === L) {
    let cnt = 0;
    for (let i = 0; i < str.length; i++) {
      if (minOne.includes(str[i])) cnt++;
    }
    if (cnt > 0 && cnt <= L - 2) result.push(str);
  } else {
    for (let i = k; i < C; i++) {
      sol(str + alph[i], i + 1);
    }
  }
};

sol("", 0);

console.log(result.join("\n"));
