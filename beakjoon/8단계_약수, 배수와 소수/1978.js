// 1보다 크고, 약수가 1과 자신만

const input = require("fs").readFileSync("1978.txt").toString().trim();
const [c, nums] = input.split("\n");

const isPrime = (n) => {
  if (n == 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

console.log(nums.split(" ").filter((v) => isPrime(v)).length);
