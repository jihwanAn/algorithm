const input = require("fs")
  .readFileSync("4134.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

input.shift();

const isPrime = (n) => {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};

const ans = input.map((n) => {
  while (true) {
    if (isPrime(n)) {
      break;
    } else {
      n++;
    }
  }
  return n;
});

console.log(ans.join("\n"));
