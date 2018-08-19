// Sean Kelly's solution
function countUniqueValues(arr) {
  if(arr.length === 0) {
    return 0;
  }

  let count = 0;
  let temp = [];

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] !== arr[i + 1]) {
      temp.push(arr[i]);
    }
  }
  console.log(temp);
  count = temp.length;
  return console.log(count);
}

countUniqueValues([1, 1, 1, 2, 2, 3, 3, 3, 10])

// Udemy instructor's solution : both order of N, but this solution has a smaller space complexity
function countUniqueValuesB(arr) {
  if(arr.length === 0) {
    return 0;
  }
  
  var i = 0;
  for(var j = 1; j < arr.length; j++) {
    if(arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  console.log(i + 1);
  return(i + 1);
}

countUniqueValuesB([1,1,2,3,3,4,5,6,6,7])
