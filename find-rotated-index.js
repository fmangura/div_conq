function findRotatedIndex(arr, num) {
  let pivot = findPivot(arr);
  let leftSide = search(arr, 0, pivot, num);
  let rightSide = search(arr, pivot, arr.length - 1, num);

  if (leftSide !== -1 && rightSide == -1) {
    return leftSide;
  } else if (leftSide == -1 && rightSide !== -1) {
    return rightSide;
  } else {
    return -1;
  }
}

function search(arr, start, end, val) {
  let leftIdx = start;
  let rightIdx = end;

  while (leftIdx <= rightIdx) {
    let midIdx = Math.floor((leftIdx + rightIdx) / 2);
    let midVal = arr[midIdx];

    if (midVal < val) {
      leftIdx = midIdx + 1;
    } else if (midVal > val) {
      rightIdx = midIdx - 1;
    } else {
      return midIdx;
    }
  }
  return -1;
}

function findPivot(arr) {
  if (arr.length === 1 || arr[0] < arr[arr.length - 1]) return 0;
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let midIdx = Math.floor((start + end) / 2);
    let mid = arr[midIdx];

    if (mid > arr[midIdx + 1]) {
      return midIdx + 1;
    } else if (arr[start] < mid) {
      start = midIdx + 1
    } else {
      end = midIdx - 1;
    }
  }
}

module.exports = findRotatedIndex;
