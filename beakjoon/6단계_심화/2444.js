let N = +require("fs").readFileSync("2444.txt");

// N = 5

for (let i = 1; i < N; i++) {
  console.log(" ".repeat(N - i) + "*".repeat(i + (i - 1)));
}

// ____*
// ___***
// __*****
// _*******

for (let j = N; j > 0; j--) {
  console.log(" ".repeat(N - j) + "*".repeat(j + (j - 1)));
}

// *********
// _*******
// ...
