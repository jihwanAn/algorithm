const input = require("fs")
  .readFileSync("2263.txt")
  .toString()
  .trim()
  .split("\n");
const N = Number(input[0]);
const inOrder = input[1].split(" ").map(Number);
const postOrder = input[2].split(" ").map(Number);
let nodeIdx = Array.from({ length: N + 1 }, () => -1);
let ans = [];

for (let i = 0; i < N; i++) {
  let num = inOrder[i];
  nodeIdx[num] = i;
}

const preorder = (instart, inend, poststart, postend) => {
  if (instart > inend || poststart > postend) return;

  let root = postOrder[postend];
  let rootidx = nodeIdx[root];

  let leftsize = rootidx - instart;
  let rightsize = inend - rootidx;

  ans.push(root);

  //왼쪽 서브트리 탐색
  preorder(
    instart,
    instart + leftsize - 1,
    poststart,
    poststart + leftsize - 1
  );
  //오른쪽 서브트리 탐색
  preorder(inend - rightsize + 1, inend, postend - rightsize, postend - 1);
};

preorder(0, N - 1, 0, N - 1);
console.log(ans.join(" "));
