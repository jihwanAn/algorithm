const [N, M] = require("fs")
  .readFileSync("1929.txt")
  .toString()
  .split(" ")
  .map(Number);

let isPrimeNum = Array(M + 1).fill(true);
isPrimeNum[0] = false;
isPrimeNum[1] = false;

for (let i = 2; i <= M; i++) {
  if (isPrimeNum[i]) {
    let a = 2;
    while (i * a <= M) {
      isPrimeNum[i * a] = false;
      a++;
    }
  }
}

let ans = "";

for (let i = N; i <= M; i++) {
  if (isPrimeNum[i]) {
    ans += `${i}\n`;
  }
}

console.log(ans);
