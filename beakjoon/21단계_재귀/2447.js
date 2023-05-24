const N = +require("fs").readFileSync("2447.txt").toString().trim();

let tempCnt = 3;
function makeRect(depth, current) {
  if (3 ** depth === N) return current;

  const nextRect = current.split("\n").map((rows) => {
    return rows.repeat(3);
  });

  current.split("\n").map((rows) => {
    nextRect.push(rows + " ".repeat(tempCnt) + rows);
  });

  current.split("\n").map((rows) => {
    nextRect.push(rows.repeat(3));
  });

  tempCnt *= 3;
  return makeRect(depth + 1, nextRect.join("\n"));
}

function sol() {
  let ans;
  const init = "***\n* *\n***";
  ans = makeRect(1, init);
  return ans;
}

console.log(sol());
