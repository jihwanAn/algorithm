let input = require("fs")
  .readFileSync("5086.txt")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < input.length - 1; i++) {
  let answer = "";
  let [fir, sec] = input[i].split(" ").map(Number);

  if (fir % sec === 0) {
    answer += "multiple";
  } else if (sec % fir === 0) {
    answer += "factor";
  } else {
    answer += "neither";
  }
  console.log(answer);
}
