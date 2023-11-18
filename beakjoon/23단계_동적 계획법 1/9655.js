const N = +require("fs").readFileSync("9655.txt").toString();

// 1 → SK 승
// 2 → SK가 1개 가져가고, CY 승
// 3 → SK 승
// 4 → SK가 1 or 3 가져가도, CY 승
// 5 →
// SK가 1, CY가 1 or 3 가져가도, SK 승
// SK가 3, CY가 1, SK 승

// 홀수일때 "SK", 짝수일때 "CY"

N % 2 === 0 ? console.log("CY") : console.log("SK");
