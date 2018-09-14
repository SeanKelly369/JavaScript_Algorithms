function quickSort2(arr) {
  let arrLen = arr.length-1;
  if(arrLen <=1) return arr;
  let pivot = arr[arrLen];
  let left = [];
  let right = [];

  for (let i = 0; i < arrLen;i++){
    if(arr[i] < pivot){
      left.push(arr[i])
    } else {
        right.push(arr[i]);
    }
  }
  return [...quickSort2(left), pivot, ...quickSort2(right)];
}

// test case
quickSort2([44,67, 12, 41, 66, 128, 23]);
