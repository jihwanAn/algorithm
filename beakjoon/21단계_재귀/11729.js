const N = +require("fs").readFileSync("11729.txt").toString();

let ans = "";

const hanoi = (n, start, end) => {
  if (n < 2) ans += `${start} ${end}\n`;
  else {
    hanoi(n - 1, start, 6 - start - end);
    ans += `${start} ${end}\n`;
    hanoi(n - 1, 6 - start - end, end);
  }
};

ans += `${2 ** N - 1}\n`;
hanoi(N, 1, 3);

console.log(ans);
