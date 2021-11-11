/* eslint-disable */
const arr = [1, 2, 3, 4, 5];

// Javascript array map method.
function customMap(arr, fn) {
  const newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    newArr.push(fn(arr[i], i, arr));
  }
  return newArr;
}

// Javascript array forEach method.
function customForEach(arr, fn) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = fn(arr[i]);
  }
  return arr;
}

// Javascript array filter method.
function customFilter(arr, fn) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// Javascript array reduce method.
function customReduce(arr, fn) {
  let all = arr[0];
  for (let i = 1; i < arr.length; i++) {
    all = fn(all, arr[i], i, arr);
  }
  return all;
}
