const input = require("fs")
  .readFileSync("1202.txt")
  .toString()
  .trim()
  .split("\n");

const [N, K] = input.shift().split(" ").map(Number);
const jewel = input.slice(0, N).map((e) => e.split(" ").map(Number));
const bag = input.slice(N, N + K).map(Number);
let result = 0;

class MaxHeap {
  constructor() {
    this.heap = [null];
    this.cnt = 0;
  }

  push(v) {
    // 아래서 위로
    this.heap.push(v);
    this.cnt++;

    let currentIdx = this.heap.length - 1;
    let parentIdx = Math.floor(currentIdx / 2);

    while (parentIdx !== 0 && this.heap[parentIdx] < v) {
      const temp = this.heap[parentIdx];
      this.heap[parentIdx] = this.heap[currentIdx];
      this.heap[currentIdx] = temp;

      currentIdx = parentIdx;
      parentIdx = Math.floor(currentIdx / 2);
    }
  }

  pop() {
    if (this.cnt !== 0) this.cnt--;
    if (this.heap.length === 2) return this.heap.pop(); // 루트 정점만 남은 경우

    // 위에서 아래로
    let returnV = this.heap[1];
    this.heap[1] = this.heap.pop();
    let currentIdx = 1;
    let leftIdx = 2;
    let rightIdx = 3;

    while (
      this.heap[currentIdx] < this.heap[leftIdx] ||
      this.heap[currentIdx] < this.heap[rightIdx]
    ) {
      const temp = this.heap[currentIdx];

      if (this.heap[leftIdx] < this.heap[rightIdx]) {
        this.heap[currentIdx] = this.heap[rightIdx];
        this.heap[rightIdx] = temp;
        currentIdx = rightIdx;
      } else {
        this.heap[currentIdx] = this.heap[leftIdx];
        this.heap[leftIdx] = temp;
        currentIdx = leftIdx;
      }

      leftIdx = currentIdx * 2;
      rightIdx = leftIdx + 1;
    }

    return returnV;
  }

  top() {
    return this.heap[1];
  }

  return() {
    return this.heap;
  }

  size() {
    return this.cnt;
  }
}

const maxheap = new MaxHeap();

bag.sort((a, b) => a - b);
jewel.sort((a, b) => a[0] - b[0]);

let idx = 0;

for (let i = 0; i < K; i++) {
  //  보석의 무게와 가방의 무게를 비교하며 최대힙에 보석 push
  while (idx < N && jewel[idx][0] <= bag[i]) {
    maxheap.push(jewel[idx][1]);
    idx++;
  }

  // 최대힙에 보석이 하나 이상 들어갔다면, 보석 중 가장 큰 값을 pop
  if (maxheap.size()) result += maxheap.pop();
}

console.log(result);
