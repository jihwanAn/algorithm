let input = require("fs")
  .readFileSync("2738.txt")
  .toString()
  .split("\n")
  .map((v) => v.trim().split(" ").map(Number));

const [n, m] = input.shift();

let array = Array.from(Array(n), () => Array(m).fill(0));

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    array[i][j] = input[i][j] + input[i + n][j];
  }
}

let result = "";

for (let i = 0; i < n; i++) {
  for (let j = 0; j < m; j++) {
    result += array[i][j].toString() + " ";
  }
  result += "\n";
}
console.log(result);
