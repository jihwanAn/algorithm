const input = require("fs")
  .readFileSync("1927.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const N = input.shift();

let minheap = [],
  ans = "";

function insert(heap, num) {
  heap.push(num);
  let idx = heap.length;

  while (idx > 1) {
    if (heap[Math.floor(idx / 2) - 1] > heap[idx - 1]) {
      const temp = heap[idx - 1];
      heap[idx - 1] = heap[Math.floor(idx / 2) - 1];
      heap[Math.floor(idx / 2) - 1] = temp;
      idx = Math.floor(idx / 2);
    } else {
      break;
    }
  }
  return heap;
}

function del(heap) {
  heap[0] = heap[heap.length - 1];
  heap.pop();
  const len = heap.length;
  let idx = 1;

  while (idx * 2 <= len) {
    if (
      heap[idx - 1] > heap[idx * 2 - 1] &&
      (heap[2 * idx] === undefined || heap[idx * 2 - 1] < heap[idx * 2])
    ) {
      const temp = heap[idx * 2 - 1];
      heap[idx * 2 - 1] = heap[idx - 1];
      heap[idx - 1] = temp;
      idx = idx * 2;
    } else if (heap[idx - 1] > heap[idx * 2]) {
      const temp = heap[idx * 2];
      heap[idx * 2] = heap[idx - 1];
      heap[idx - 1] = temp;
      idx = idx * 2 + 1;
    } else break;
  }
  return heap;
}

input.forEach((val) => {
  if (val === 0) {
    if (minheap.length > 0) {
      ans += `${minheap[0]}\n`;
      minheap = del(minheap);
    } else {
      ans += "0\n";
    }
  } else minheap = insert(minheap, val);
});

console.log(ans.trim());
