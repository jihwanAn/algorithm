let [_, ...input] = require("fs")
  .readFileSync("9086.txt")
  .toString()
  .trim()
  .split("\n");

// for (let i = 1; i <= Number(input[0]); i++) {
//   console.log(
//     input[i].substring(0, 1) +
//       input[i].substring(input[i].length - 1, input[i].length)
//   );
// }

for (let i of input) {
  console.log(`${i.at(0)}${i.at(-1)}`);
}
