const N = +require("fs").readFileSync("1436.txt").toString().trim();

let n = N;
let Number = 665;

while (n > 0) {
  Number++;

  if (Number.toString().includes("666")) {
    n--;
  }
}

console.log(Number);
