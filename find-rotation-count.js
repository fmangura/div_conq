function findRotationCount(arr) {
    let start = 0
    let end = arr.length - 1
    
    while (start <= end){
        let mid = Math.floor((start + end)/2)

        if(arr[mid] < arr[mid - 1] && arr[mid] < arr[mid + 1]) {
            return mid
        }

        if (arr[mid] > arr[mid + 1]){
            return mid + 1
        } else if (arr[mid] < arr[start]) {
            start = mid + 1
        } else {
            end = midIdx - 1;
        }
    }
}

module.exports = findRotationCount;
