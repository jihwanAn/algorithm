let input = require("fs").readFileSync("11654.txt").toString();

// 아스키 코드값 출력
// 알파벳 소문자 [97 - 122] , 대문자 [65 - 90], 숫자 0-9 [48 - 57]

console.log(input.charCodeAt());
