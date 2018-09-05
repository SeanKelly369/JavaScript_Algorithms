let str = 'murder redrum';
PalindromeCheck(str);

function PalindromeCheck(str) {
  // Optional, but in this case made case insensitive
  str = str.toLowerCase();

  // Use a left, right and middle to reduce big O complexity by about half
  let left = 0;
  let right = str.length -1;
  let middle = Math.floor(str.length / 2);

  for(let i = 0; i < middle; i++) {

    if(str[left] === str[right]) {
      left++;
      right--;          
    }
    // The iteration has reached the middle of the string with matches on both sides
    if(left === middle) {
      return true;
      break;
    }

    // A difference in character value is found
    if(str[left] !== str[right]) {
      return false;
      break;
    }
  }
}
