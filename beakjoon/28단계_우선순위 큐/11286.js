const input = require("fs")
  .readFileSync("11286.txt")
  .toString()
  .trim()
  .split("\n");

const N = input[0];
let arr = input.slice(1).map(Number);

const heap = [0];

function push(val) {
  heap.push(val);

  let parentIdx = 0;
  let i = heap.length - 1;

  while (i > 1) {
    parentIdx = i >> 1;
    if (
      Math.abs(heap[i]) < Math.abs(heap[parentIdx]) ||
      (Math.abs(heap[i]) == Math.abs(heap[parentIdx]) &&
        heap[i] < heap[parentIdx])
    )
      [heap[i], heap[parentIdx]] = [heap[parentIdx], heap[i]];
    else break;
    i = parentIdx;
  }
}

function pop() {
  if (heap.length == 1) return 0;
  if (heap.length == 2) return heap.pop();

  const top = heap[1];
  heap[1] = heap.pop();

  let i = 1;

  while (i < heap.length) {
    const leftIdx = i << 1;
    const rightIdx = leftIdx + 1;

    let target = i;
    if (leftIdx > heap.length - 1) break;
    else if (rightIdx > heap.length - 1) target = leftIdx;
    else
      target =
        Math.abs(heap[leftIdx]) < Math.abs(heap[rightIdx]) ||
        (Math.abs(heap[leftIdx]) == Math.abs(heap[rightIdx]) &&
          heap[leftIdx] < heap[rightIdx])
          ? leftIdx
          : rightIdx;

    if (
      Math.abs(heap[i]) > Math.abs(heap[target]) ||
      (Math.abs(heap[i]) == Math.abs(heap[target]) && heap[i] > heap[target])
    ) {
      [heap[i], heap[target]] = [heap[target], heap[i]];
      i = target;
    } else break;
  }
  return top;
}

let result = [];

arr.map((x) => {
  if (x == 0) {
    if (heap.length == 1) result.push(0);
    else result.push(pop());
  } else {
    push(x);
  }
});

console.log(result.join("\n"));
