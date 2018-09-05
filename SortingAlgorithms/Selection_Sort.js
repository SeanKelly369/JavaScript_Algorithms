function selectionSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    let lowest = 1;
    for(let j = (i+1); j < arr.length; j++) {
      if( arr[j] < arr[lowest] ) {
        lowest = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[lowest];
    arr[lowest] = temp;
  }
  return arr;
}

function numberCompare(num1, num2) {
  return num2 - num1;
}

selectionSort([34,22,10,19,17]);
