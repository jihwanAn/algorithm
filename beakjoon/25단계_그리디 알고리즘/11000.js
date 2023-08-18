const input = require("fs")
  .readFileSync("11000.txt")
  .toString()
  .trim()
  .split("\n");
input.shift();

let schedule = [];
let room = 0;
let ans = 0;

input.forEach((i) => {
  const [start, end] = i.split(" ").map(Number);
  // 수업 시작 시간
  schedule.push([start, 1]);
  // 수업 종료 시간
  schedule.push([end, -1]);
});

// 시작 시간을 기준으로 오름차순 정렬 (시간이 같으면 종료 시간이 앞에)
schedule.sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));

for (let i = 0; i < schedule.length; i++) {
  // 강의 시작 → room ++ , 강의 끝 --
  schedule[i][1] === 1 ? room++ : room--;

  // 사용하는 방의 최대 개수
  ans = Math.max(room, ans);
}

console.log(ans);
