let input = require("fs")
  .readFileSync("4948.txt")
  .toString()
  .trim()
  .split("\n");
input.pop();

for (let i = 0; i < input.length; i++) {
  let n = Number(input[i]);
  let n2 = n * 2;

  let isPrimeNum = Array(n2 + 1).fill(true);
  isPrimeNum[0] = isPrimeNum[1] = false;

  function PrimeNum() {
    for (let i = 2; i <= Math.ceil(Math.sqrt(n2)); i++) {
      if (isPrimeNum[i]) {
        let m = 2;
        while (i * m <= n2) {
          isPrimeNum[i * m] = false;
          m++;
        }
      }
    }

    let results = [];

    for (let i = n + 1; i <= n2; i++) {
      if (isPrimeNum[i]) {
        results.push(i);
      }
    }
    console.log(results.length);
  }

  PrimeNum();
}
