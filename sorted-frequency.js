function sortedFrequency(arr, srch) {
    let srchIdx = arr.indexOf(srch)
    let nxtNum = arr.indexOf(srch + 1)
  
    if(srchIdx !== -1 && nxtNum !== -1){
        return nxtNum - srchIdx
    } else if (nxtNum == -1) {
        return arr.length - srchIdx
    } else {
        return -1
    }
}

module.exports = sortedFrequency