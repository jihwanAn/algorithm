const input = require("fs")
  .readFileSync("17103.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const n = input.shift();

const prime = Array(Math.max(...input))
  .fill(true)
  .fill(false, 0, 2);

for (let i = 2; i < Math.sqrt(prime.length); i++) {
  if (prime[i]) {
    for (let j = i + i; j < prime.length; j += i) {
      prime[j] = false;
    }
  }
}

let ans = "";
for (let i = 0; i < n; i++) {
  const N = input[i];
  let cnt = 0;
  for (let j = 1; j <= N / 2; j++) {
    if (prime[N - j] && prime[j]) {
      cnt++;
    }
  }
  ans += cnt + "\n";
}
console.log(ans);
