let input = require("fs").readFileSync("5622.txt").toString();

// 1 = 2초 +1초

let dial = {
  ABC: 3,
  DEF: 4,
  GHI: 5,
  JKL: 6,
  MNO: 7,
  PQRS: 8,
  TUV: 9,
  WXYZ: 10,
};

let num = 0;

for (let i = 0; i < input.length; i++) {
  for (let x in dial) {
    if (x.includes(input[i])) {
      num += dial[x];
    }
  }
}

console.log(num);
