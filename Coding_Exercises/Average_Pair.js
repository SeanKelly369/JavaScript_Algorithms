function averagePair(arr, num){
  let start = 0;
  let end = arr.length-1;
  while(start < end){

    //divide the start and end in half to find the center
    let avg = (arr[start] + arr[end]) / 2;

    // If average matches num return true
    if (avg === num) {
      return true;
    }
    // Increment and decrement from both ends to find the average
    else if (avg < num) {
        start++;
    } else {
        end --;
    }
  // If the average is not found return false
  return false;
}
