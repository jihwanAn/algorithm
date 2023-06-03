const [n, as, ops] = require("fs")
  .readFileSync("14888.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v, i) => (!i ? +v : v.split(" ").map(Number)));

function solution(n, as, ops) {
  const ans = [];

  function dfs(curCnt, result, ops) {
    if (curCnt === n) {
      ans.push(result);
    } else {
      for (let i = 0; i < 4; i++) {
        if (ops[i] > 0) {
          ops[i]--;

          dfs(
            curCnt + 1,
            !i
              ? result + as[curCnt]
              : i === 1
              ? result - as[curCnt]
              : i === 2
              ? result * as[curCnt]
              : ~~(result / as[curCnt]),
            ops
          );

          ops[i]++;
        }
      }
    }
  }

  dfs(1, as[0], ops);

  return Math.max(...ans) + "\n" + Math.min(...ans);
}

console.log(solution(n, as, ops));
