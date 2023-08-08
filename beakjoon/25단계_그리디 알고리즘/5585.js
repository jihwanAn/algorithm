const n = +require("fs").readFileSync("5585.txt").toString();
const coins = [500, 100, 50, 10, 5, 1];
let money = 1000 - n,
  ans = 0;

for (let i = 0; i < coins.length; i++) {
  let temp = Math.floor(money / coins[i]);
  money -= temp * coins[i];
  ans += temp;
}

console.log(ans);
