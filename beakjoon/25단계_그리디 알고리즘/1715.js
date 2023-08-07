const [N, ...cards] = require("fs")
  .readFileSync("1715.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let cnt = 0;

class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  swap(a, b) {
    const temp = this.heap[a];
    this.heap[a] = this.heap[b];
    this.heap[b] = temp;
  }

  push(val) {
    const { heap } = this;
    heap.push(val);
    let idx = heap.length - 1;
    let parent = Math.floor((idx - 1) / 2);

    while (idx > 0 && heap[idx] < heap[parent]) {
      this.swap(idx, parent);
      idx = parent;
      parent = Math.floor((idx - 1) / 2);
    }
  }

  pop() {
    const { heap } = this;
    if (heap.length <= 1) {
      return heap.pop();
    }

    const output = heap[0];
    heap[0] = heap.pop();
    let idx = 0;

    while (idx * 2 + 1 < heap.length) {
      let left = idx * 2 + 1;
      let right = idx * 2 + 2;
      let next = idx;

      if (heap[left] < heap[next]) {
        next = left;
      }

      if (right < heap.length && heap[right] < heap[next]) {
        next = right;
      }

      if (idx === next) {
        break;
      }

      this.swap(idx, next);
      idx = next;
    }

    return output;
  }
}

const queue = new PriorityQueue();

cards.forEach((card) => {
  queue.push(card);
});

while (queue.heap.length > 1) {
  const sum = queue.pop() + queue.pop();
  queue.push(sum);
  cnt += sum;
}

console.log(cnt);
