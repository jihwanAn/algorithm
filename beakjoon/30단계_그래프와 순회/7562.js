const input = require("fs")
  .readFileSync("7562.txt")
  .toString()
  .trim()
  .split("\n");
const TC = Number(input[0]);
let idx = 1;

for (let i = 0; i < TC; i++) {
  let board_size = Number(input[idx]);
  let board = new Array(board_size);

  for (let j = 0; j < board.length; j++) {
    board[j] = new Array(board_size).fill(0);
  }
  let curX = Number(input[idx + 1].split(" ")[0]);
  let curY = Number(input[idx + 1].split(" ")[1]);
  let nextX = Number(input[idx + 2].split(" ")[0]);
  let nextY = Number(input[idx + 2].split(" ")[1]);
  board[curX][curY] = 1;

  function BFS() {
    let L = 0;
    let dx = [2, 2, -2, -2, 1, 1, -1, -1];
    let dy = [1, -1, 1, -1, 2, -2, 2, -2];
    let queue = [];
    queue.push([curX, curY]);

    while (queue.length) {
      let len = queue.length;

      for (let i = 0; i < len; i++) {
        let v = queue.shift();

        if (v[0] === nextX && v[1] === nextY) {
          return L;
        }
        for (let i = 0; i < 8; i++) {
          let nx = v[0] + dx[i];
          let ny = v[1] + dy[i];
          if (
            nx >= 0 &&
            nx < board_size &&
            ny >= 0 &&
            ny < board_size &&
            board[nx][ny] === 0
          ) {
            board[nx][ny] = 1;
            queue.push([nx, ny]);
          }
        }
      }
      L++;
    }
  }
  console.log(BFS());
  idx += 3;
}
