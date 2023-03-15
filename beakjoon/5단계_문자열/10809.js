let S = require("fs").readFileSync("10809.txt").toString().trim();

let result = [];

// 아스키코드 97 ~ 122

for (let i = 97; i <= 122; i++) {
  result.push(S.indexOf(String.fromCharCode(i)));
}
console.log(result.join(" "));
