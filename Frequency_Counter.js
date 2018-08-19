// Write a function called SAME, which accepts two arrays.  The function should return true if every value in the array has it's corresponding value squared in the second array.  The frequency of values must be the same.

// Test 1
let array1 = [1,2,3];
let array2 = [4,1,9];


function same(array1, array2) {
  let sameLength = false;
  let lengthCount = array1.length;
  let counter = 0;

  if(array1.length !== array2.length) {
    return false;
  } else if {
    for(let i = 0; i < array1.length; i++) {

      while (counter <= lengthCount) {
        if(array1[i] = array2[i * i] ) {
          return true;
        } else if (array1[i + 1] = array2[i * i]) {
          return true;
        } else {
          return false;
        }      
      }

    }
  }
}
