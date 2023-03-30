let input = +require("fs").readFileSync("11653.txt").toString();

// input 을 소수인 인수로만 나눠 나간다.

// 초기 소인수 설정
// let divider = 2;

// while (input !== 1) {
//   if (input % divider === 0) {
//     console.log(divider);
//     input /= divider;
//   } else {
//     divider++;
//   }
// }

if (input === 1) return;

outer: while (true) {
  for (let i = 2; i <= Math.sqrt(input); i++) {
    if (!(input % i)) {
      input = input / i;
      console.log(i);
      continue outer;
    }
  }
  break;
}
console.log(input);
