// ES5
function swap(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index1];
  arr[index2] = temp;
}

// ES2015
const swap = (arr, index1, index2) => {
  [arr[index1], arr[index2]] = [arr[index2], arr[index2]];
}

// Optimised with noSwaps variable
function bubbleSort(arr) {
  let noSwaps;
  for(let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for(let j = 0; j < (i - 1); j++) {
      if(arr[j] > arr[j + 1]) {
        console.log(arr, arr[j], arr[j+1]);
        // swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if(noSwaps) break;
  }
  return arr;
}

bubbleSort([8, 22, 45, 37, 29]);
