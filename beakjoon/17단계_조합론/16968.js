const N = require("fs").readFileSync("16968.txt").toString().trim();

let ans = [];
N[0] === "c" ? ans.push(26) : ans.push(10);

for (let i = 1; i < N.length; i++) {
  let temp;

  N[i] === "c" ? (temp = 26) : (temp = 10);

  if (N[i] === N[i - 1]) {
    temp--;
  }
  ans.push(temp);
}

console.log(
  ans.reduce((a, c) => {
    return a * c;
  })
);
