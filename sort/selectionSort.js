function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIdx = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    swap(arr, i, minIdx);
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
console.time("selectionSortTimer");
console.log(selectionSort(arr));
console.timeEnd("selectionSortTimer");
