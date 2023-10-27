const input = require("fs").readFileSync("1343.txt").toString().trim();

let x = input.replace(/XXXX/g, "AAAA").replace(/XX/g, "BB");

x.includes("X") ? console.log(-1) : console.log(x);
