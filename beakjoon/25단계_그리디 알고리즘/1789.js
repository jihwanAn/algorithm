const n = +require("fs").readFileSync("1789.txt").toString();
let i = 1,
  cnt = 0;

while (cnt <= n) {
  cnt += i;
  i++;
}
console.log(i - 2);
