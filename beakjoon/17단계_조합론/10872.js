const N = +require("fs").readFileSync("10872.txt").toString().trim();

let result = 1;
for (let i = 2; i <= N; i++) {
  result *= i;
}
console.log(result);
