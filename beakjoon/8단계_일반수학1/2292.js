// 둘러싼 방 6 12 18 (6n 씩 증가)

let n = +require("fs").readFileSync("2292.txt").toString().trim();

let range = 1,
  block = 1;

while (block < n) {
  block += 6 * range;

  range++;
}

console.log(range);
