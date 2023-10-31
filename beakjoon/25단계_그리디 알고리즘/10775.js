const [G, P, ...gi] = require("fs")
  .readFileSync("10775.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let visited = Array.from({ length: G + 1 }, (v, i) => i);
let cnt = 0; // 도킹시킬 수 있는 최대 비행기 수

// 1 ~ G개의 게이트
// P개의 비행기가 순서대로 도착
// 각각 1 ~ gi 번째 게이트에 도킹 가능

for (let i = 0; i < P; i++) {
  if (!find(gi[i])) break;
  else {
    cnt++;
    visited[find(gi[i])] = find(find(gi[i]) - 1);
  }
}

console.log(cnt);

function find(idx) {
  if (idx === visited[idx]) return idx;

  return (visited[idx] = find(visited[idx]));
}
