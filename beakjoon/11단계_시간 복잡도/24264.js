// MenOfPassion(A[], n) {
//   sum <- 0;
//   for i <- 1 to n
//       for j <- 1 to n
//           sum <- sum + A[i] × A[j]; # 코드1
//   return sum;
// }

let input = +require("fs").readFileSync("24264.txt").toString().trim();

console.log(input * input);
console.log(2);
