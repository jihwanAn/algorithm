const input = require("fs")
  .readFileSync("25501.txt")
  .toString()
  .trim()
  .split("\n");
input.shift();
let ans = "";

function isPalindrome(str, cur, cnt) {
  const leng = Math.floor(str.length / 2);
  if (cur >= leng) {
    return (ans += `1 ${cnt} \n`);
  } else {
    if (str[cur] === str[str.length - cur - 1])
      isPalindrome(str, cur + 1, cnt + 1);
    else return (ans += `0 ${cnt}\n`);
  }
}

input.forEach((e) => isPalindrome(e, 0, 1));
console.log(ans);
