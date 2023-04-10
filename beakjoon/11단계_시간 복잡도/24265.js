// MenOfPassion(A[], n) {
//   sum <- 0;
//   for i <- 1 to n - 1
//       for j <- i + 1 to n
//           sum <- sum + A[i] × A[j]; # 코드1
//   return sum;
// }

let input = +require("fs").readFileSync("24265.txt").toString().trim();

console.log(((input - 1) * input) / 2);
console.log(2);
