// MenOfPassion(A[], n) {
//   sum <- 0;
//   for i <- 1 to n
//       for j <- 1 to n
//           for k <- 1 to n
//               sum <- sum + A[i] × A[j] × A[k]; # 코드1
//   return sum;
// }

let n = BigInt(require("fs").readFileSync("24266.txt").toString().trim());

console.log(`${n * n * n}`);
console.log("3");
