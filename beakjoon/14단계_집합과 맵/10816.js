const input = require("fs")
  .readFileSync("10816.txt")
  .toString()
  .trim()
  .split("\n");

const cards = input[1].split(" ");
const check = input[3].split(" ");

let cardMap = new Map();

cards.forEach((card) => {
  cardMap.has(card)
    ? cardMap.set(card, cardMap.get(card) + 1)
    : cardMap.set(card, 1);
});

let ans = [];

check.forEach((card) => {
  cardMap.has(card) ? ans.push(cardMap.get(card)) : ans.push(0);
});

console.log(ans.join(" "));
