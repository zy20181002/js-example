function quickSort(arr) {
  if (arr.length <= 1) return arr;
  const middleIdx = Math.floor(arr.length / 2);
  const leftArr = [];
  const rightArr = [];
  const middle = arr[middleIdx];
  arr.forEach((item, index) => {
    if (index !== middleIdx) {
      item < middle ? leftArr.push(item) : rightArr.push(item);
    }
  });
  return [...quickSort(leftArr), middle, ...quickSort(rightArr)];
}

console.time("create array");
const arr = [];
for (let i = 0; i < 100000; i++) {
  arr.push(Math.floor(Math.random() * 100000));
}
console.timeEnd("create array");
console.log("test array", arr);
console.time("quickSortTimer");
console.log(quickSort(arr));
console.timeEnd("quickSortTimer");
