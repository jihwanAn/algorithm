const N = +require("fs").readFileSync("9656.txt").toString();

// 1 → SK 패
// 2 → SK가 1개 가져가고, CY 패
// 3 → SK 패
// 4 → SK가 1 or 3 가져가도, CY 패
// 5 →
// SK가 1, CY가 1 or 3 가져가도, SK 패
// SK가 3, CY가 1, SK 패

// 홀수일때 "CY", 짝수일때 "SK"

N % 2 === 0 ? console.log("SK") : console.log("CY");
