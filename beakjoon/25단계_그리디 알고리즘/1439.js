let N = require("fs").readFileSync("1439.txt").toString().split("\n");

let zero = N[0].split("1").filter((res) => res !== "");
let one = N[0].split("0").filter((res) => res !== "");

// console.log("0", zero);
// console.log("1", one);

zero.length > one.length ? console.log(one.length) : console.log(zero.length);
