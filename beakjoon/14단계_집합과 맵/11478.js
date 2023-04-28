const S = require("fs").readFileSync("11478.txt").toString().trim();

let str = new Set();
for (let i = 0; i < S.length; i++) {
  for (let j = i; j < S.length; j++) {
    str.add(S.substring(i, j + 1));
  }
}

console.log(str.size);
