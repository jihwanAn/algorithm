let [a, b] = require("fs")
  .readFileSync("13241.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const aNum = a;
const bNum = b;

while (a % b !== 0) {
  let r = a % b;
  if (r !== 0) {
    a = b;
    b = r;
  }
}
console.log((aNum * bNum) / b);
