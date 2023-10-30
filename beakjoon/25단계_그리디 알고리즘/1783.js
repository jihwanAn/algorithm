const [H, W] = require("fs")
  .readFileSync("1783.txt")
  .toString()
  .trim()
  .split(" ");

// 항상 오른쪽으 방향으로만 움직임

// 세로 길이 1 → 이동 불가능
if (H === 1) console.log(1);
// 세로 길이 2 → 2, 3번만 가능
else if (H === 2) {
  console.log(Math.min(4, parseInt((W + 1) / 2)));
}

// 세로 길이 3 이상
else {
  // 세로가 3 이상이지만 가로가 6 보다 작다면 최대로 움직일려면 1, 4번만 가능
  if (W <= 6) {
    console.log(Math.min(4, W));
  }
  // 세로 길이 3 이상, 가로 길이 6 이상 → 모두 가능
  else {
    console.log(W - 2);
  }
}
