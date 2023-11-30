const n = parseInt(require("fs").readFileSync("10826.txt").toString().trim());

const fibo = new Array(n + 1).fill(1);
fibo[0] = 0;

for (let i = 3; i <= n; i++) {
  fibo[i] = BigInt(fibo[i - 1]) + BigInt(fibo[i - 2]);
}

console.log(fibo[n].toString());
