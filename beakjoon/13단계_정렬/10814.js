let input = require("fs")
  .readFileSync("10814.txt")
  .toString()
  .trim()
  .split("\n");

const iter = input.shift();

// [ '21 Junkyu 0', '21 Dohyun 1', '20 Sunyoung 2' ]
for (let i = 0; i < iter; i++) {
  input[i] += " " + i;
}

let arr = [];

for (let i = 0; i < iter; i++) {
  arr.push(input[i].split(" "));
}

arr.sort((a, b) => {
  if (a[0] === b[0]) {
    return a[2] - b[2];
  } else {
    return a[0] - b[0];
  }
});

let ans = [];

for (let i = 0; i < iter; i++) {
  arr[i].pop();
  ans.push(arr[i].join(" "));
}

console.log(ans.join("\n"));
