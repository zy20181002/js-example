function mergeSort(arr) {
  if (arr.length === 1) return arr;
  const middle = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, middle));
  const right = mergeSort(arr.slice(middle, arr.length));
  return merge(left, right);
}
function merge(l, r) {
  let i = 0,
    j = 0;
  const result = [];
  while (i < l.length && j < r.length) {
    result.push(l[i] < r[j] ? l[i++] : r[j++]);
  }
  return result.concat(i < l.length ? l.slice(i) : r.slice(j));
}

console.time("create array");
const arr = [];
for (let i = 0; i < 100000; i++) {
  arr.push(Math.floor(Math.random() * 100000));
}
console.timeEnd("create array");
console.log("test array", arr);
console.time("mergeSortTimer");
console.log(mergeSort(arr));
console.timeEnd("mergeSortTimer");
