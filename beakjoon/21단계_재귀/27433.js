const N = require("fs").readFileSync("27433.txt").toString();

const factorial = (n) => {
  if (n <= 1) return 1;

  return factorial(n - 1) * n;
};

console.log(factorial(N));
