function findFloor(arr, x) {
    let start = 0
    let end = arr.length - 1
  
    while (start <= end){
        let mid = Math.floor((start + end)/2)
  
        if (arr[mid] < x && x < arr[mid + 1] || arr[mid] < x && arr[mid] == arr[arr.length - 1]) {
            return arr[mid]
        }
        if (arr[mid] > x) {
            end = mid - 1;
  
        } else {
            start = mid + 1;
        }
    }
    return -1
  }

module.exports = findFloor