let n = +require("fs").readFileSync("2839.txt").toString().trim();

let count = 0;

while (true) {
  if (n % 5 === 0) {
    console.log(n / 5 + count);
    break;
  }

  if (n < 0) {
    console.log(-1);
    break;
  }

  count++;
  n -= 3;
}
