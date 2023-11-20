const input = parseInt(require("fs").readFileSync("12852.txt").toString(), 10);
const d = new Array(input + 1).fill(0);

d[1] = 0;

for (let i = 2; i <= input; i++) {
  d[i] = d[i - 1] + 1;

  if (i % 3 === 0) {
    d[i] = Math.min(d[i], d[i / 3] + 1);
  }
  if (i % 2 === 0) {
    d[i] = Math.min(d[i], d[i / 2] + 1);
  }
}

console.log(d[input]);

const ans = [];
let i = input;

while (i > 1) {
  ans.push(i);

  if (i % 3 === 0 && d[i / 3] === d[i] - 1) {
    i = i / 3;
  } else if (i % 2 === 0 && d[i / 2] === d[i] - 1) {
    i = i / 2;
  } else {
    i = i - 1;
  }
}
ans.push(1);

console.log(ans.join(" "));
