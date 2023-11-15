let N = +require("fs").readFileSync("1699.txt").toString();

// N보다 작은 제곱수 중 최대값 X,
// → N보다 작은 제곱수들을 뺀 결과들 중 최소값

let arr = [];

for (let i = 0; i <= N; i++) {
  arr.push(i);
}

for (let i = 1; i <= N; i++) {
  for (let j = 1; j ** 2 <= i; j++) {
    arr[i] = Math.min(arr[i], arr[i - j ** 2] + 1);
    console.log(arr[i], "", arr[i - j ** 2] + 1);
  }
}

// 가장 마지막 n번째의 최소 제곱수 합 반환
console.log(arr.pop());
