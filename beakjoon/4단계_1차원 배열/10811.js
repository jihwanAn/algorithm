// 1 ~ N개의 바구니
// 바구니를 역순으로 (범위를 정하고 역순)

let [[N], ...input] = `${require("fs").readFileSync("10811.txt")}`.trim()
  .split`\n`.map((e) => e.split` `.map(Number));
let basket = [...Array(N)].map((_, i) => i + 1); // 1 2 3 4 5
input.forEach(
  ([a, b]) =>
    (basket = [
      ...basket.slice(0, a - 1),
      ...basket.slice(a - 1, b).reverse(),
      ...basket.slice(b),
    ])
);
console.log(basket.join` `);
