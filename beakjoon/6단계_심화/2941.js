let input = require("fs").readFileSync("2941.txt").toString().trim();

// str = new RegExp("(c=|c-|dz=|d-|lj|nj|s=|z=)", "g");
// console.log(str);
// console.log(input.replace(str, "Q"));
// console.log(input.replace(str, " ").length);

let croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

function sol(input) {
  // 반복문으로 들어온 croatia 알파벳으로 split
  // 그 자리에 Q를 채워 넣고, length 출력

  for (let alpha of croatia) {
    input = input.split(alpha).join("Q");
  }
  return input.length;
}
console.log(sol(input));

// ljes=njak
// ljes=njak
// ljes=njak
// ljes=njak
// Qes=njak
// Qes=Qak
// QeQQak
// QeQQak
