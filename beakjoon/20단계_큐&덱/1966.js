let input = require("fs")
  .readFileSync("1966.txt")
  .toString()
  .trim()
  .split("\n");

input.shift();
input = input.map((e) => e.split(" ").map(Number));
let ans = "";

for (let i = 0; i < input.length; i += 2) {
  let cnt = 0;
  const priorities = input[i + 1];
  let location = input[i][1];

  while (true) {
    const max = Math.max(...priorities);
    const num = priorities.shift();
    if (num === max) {
      cnt++;
      if (location === 0) {
        ans += cnt + "\n";
        break;
      }
    } else {
      priorities.push(num);
    }

    if (location === 0) {
      location = priorities.length - 1;
    } else {
      location--;
    }
  }
}

console.log(ans.trim());
