function isSubsequence(str1, str2) {
  var i, j = 0;

  // If it is not a string, return true.  Grey area.
  if(!str1) {
    return true;
  }

  while (j < str2.length) {

    // While the substring characters are equal to the full string, increase the value of i
    if(str2[j] === str1[i]) {
      i++;
    }
    // If i is the same length as the full string, then they are both identical.  Not strictly a substring, but return true.
    if (i === str1.length) {
      return true;
      j++;
    }
    // If all else fails, return false
    return false;
  }
}

isSubsequence("Hello", "Hello world")
