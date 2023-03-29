function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}

function swap(arr, a, b) {
  [arr[a], arr[b]] = [arr[b], arr[a]];
}
console.time("create array");
const arr = [];
for (let i = 0; i < 100000; i++) {
  arr.push(Math.floor(Math.random() * 100000));
}
console.timeEnd("create array");
console.log("test array", arr);
console.time("bubbleSortTimer");
console.log(bubbleSort(arr));
console.timeEnd("bubbleSortTimer");
