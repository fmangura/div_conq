function countZeroes(arr) {
  let fstZeroID = arr.indexOf(0);

  if (fstZeroID !== -1){
    return arr.length - fstZeroID;
  }
  return 0
}

module.exports = countZeroes;
