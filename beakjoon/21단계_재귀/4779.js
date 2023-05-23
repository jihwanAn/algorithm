const num = require("fs")
  .readFileSync("4779.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const cantor = (N) => {
  if (N === 1) return "-";
  const result = cantor(N / 3);
  return result + " ".repeat(N / 3) + result;
};

num.forEach((N) => console.log(cantor(3 ** N)));
