// MenOfPassion(A[], n) {
//   sum <- 0;
//   for i <- 1 to n - 2
//       for j <- i + 1 to n - 1
//           for k <- j + 1 to n
//               sum <- sum + A[i] × A[j] × A[k]; # 코드1
//   return sum;
// }

let input = require("fs").readFileSync("24267.txt").toString().trim();

let n = BigInt(input);
let a = (n * (n - 1n) * (n - 2n)) / (2n * 3n);
console.log([a, 3].join("\n"));
