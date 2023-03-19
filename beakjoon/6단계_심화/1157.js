let input = require("fs").readFileSync("1157.txt").toString().toUpperCase();

// 가장 많이 사용된 알파벳, 대문자 출력
// 다중일 경우, ? 출력

// 알파벳 대문자 개수 만큼 원소 개수를 가지는 배열 생성 후 0으로 초기화

const count = new Array(26).fill(0);

// 아스키 코드 번호로 전환
for (let i = 0; i < input.length; i++) {
  count[input.charCodeAt(i) - 65]++;
}

const max = Math.max(...count); // 가장 높은 수 추출

// 역순으로 탐색해도 max가 같을때
if (count.indexOf(max) === count.lastIndexOf(max)) {
  console.log(String.fromCharCode(count.indexOf(max) + 65));
} else console.log("?");
