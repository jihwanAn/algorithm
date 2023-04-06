let [A, B, V] = require("fs")
  .readFileSync("2869.txt")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

// 낮에 A미터 올라감 , 밤에 B미터 미끄러짐. 또, 정상에 올라간 후에는 미끄러지지 않는다.

// V 거리를 모두 올라가려면

// (높이 - 밤에 미끄러지는 수) / (아침에 이동하는 수 - 밤에 미끄러지는 수)
console.log(Math.ceil((V - B) / (A - B)));
