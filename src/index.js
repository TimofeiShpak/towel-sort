function turnArr(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 !== 0) {
      newArr.push(arr[i].reverse());
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

module.exports = function towelSort (matrix) {
  let result = [];
  if (matrix) {
    matrix = turnArr(matrix);
    result = [].concat(...matrix);
    while(Array.isArray(result[0])) {
      result = turnArr(result);
      let newArray = [].concat(...result);
      result = newArray;
    }
  }
  return result;
}
