const input = require("fs")
  .readFileSync("1700.txt")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input[0].split(" ").map(Number);
const item = input[1].split(" ").map(Number);
let plugs = [];
let cnt = 0; // 플러그 빼는 횟수

for (let i = 0; i < K; i++) {
  const now = item[i];

  if (plugs.includes(now)) continue;
  if (plugs.length < N) {
    plugs.push(now);
  } else {
    let tar; // 가장 나중에 사용될 item
    let idx = 0;

    plugs.forEach((p) => {
      let next = Number.MAX_SAFE_INTEGER;

      for (let j = i + 1; j < K; j++) {
        if (item[j] === p) {
          next = j;
          break;
        }
      }
      // p가 가장 나중에 사용될 것인지 확인
      if (idx < next) {
        tar = p;
        idx = next;
      }
    });

    // plugs배열에서 tar 제거, now 추가
    plugs = plugs.filter((p) => p !== tar);
    plugs.push(now);
    cnt++;
  }
}
console.log(cnt);
