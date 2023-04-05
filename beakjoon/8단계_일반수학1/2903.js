let N = +require("fs").readFileSync("2903.txt").toString().trim();

// console.log(Math.pow(Math.pow(2, N) + 1, 2));

function checkDotCount(n) {
  let dotCountOfSide = 2;

  for (i = 0; i < n; i++) {
    dotCountOfSide += Math.pow(2, i);
  }
  return dotCountOfSide * dotCountOfSide;
}

console.log(checkDotCount(N));
