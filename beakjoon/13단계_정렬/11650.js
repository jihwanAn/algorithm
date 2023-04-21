let input = require("fs").readFileSync("11650.txt").toString().split("\n");

const N = Number(input.shift());

let arr = [];
let result = [];

for (let i = 0; i < N; i++) {
  arr.push(input[i].split(" ").map((v) => Number(v)));
}

arr.sort((a, b) => {
  if (a[0] === b[0]) return a[1] - b[1];
  else return a[0] - b[0];
});

for (let i = 0; i < N; i++) {
  let num = arr[i].join(" ");
  result.push(num);
}

console.log(result.join("\n"));
