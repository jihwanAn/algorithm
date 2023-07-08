const input = require("fs").readFileSync("13305.txt").toString().split("\n");
const n = +input[0];
const distance = input[1].split(" ").map(Number);
const cost = input[2].split(" ").map(Number);

let minCost = cost[0];
for (let i = 1; i < n; i++) {
  minCost = Math.min(minCost, cost[i]);
  cost[i] = minCost;
}

let ans = BigInt(0);
for (let i = 0; i < n - 1; i++) {
  ans += BigInt(distance[i]) * BigInt(cost[i]);
}

console.log(String(ans));
