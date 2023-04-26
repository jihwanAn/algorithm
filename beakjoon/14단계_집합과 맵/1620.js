const input = require("fs")
  .readFileSync("1620.txt")
  .toString()
  .trim()
  .split(/\s/);

const n = +input[0];

const arr = input.slice(2, n + 2);
const poketMap = new Map(arr.map((v, i) => [v, i + 1]));
const quest = input.slice(n + 2); // '25', 'Raichu', '3', 'Pidgey', 'Kakuna'
const ans = [];

quest.forEach((v) => {
  Number.isNaN(+v) ? ans.push(poketMap.get(v)) : ans.push(arr[+v - 1]);
});

console.log(ans.join("\n"));
