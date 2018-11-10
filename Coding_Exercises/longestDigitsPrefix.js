function longestDigitsPrefix(inputString) {
  const chars = inputString.split('');
  const prefix = [];
  let maxCount = 0;
  let tempCount = 0;
  let subStringStartLoc = 0;

  for(let i = 0; i < chars.length; i++) {
    if(chars[i].match(/[\d]/)) {
      prefix.push(chars[i]);
      tempCount++;
      if(tempCount > maxCount) {
        maxCount = tempCount;
      }
    }
    if(chars[i].match(/[\D]/)) {
      tempCount = 0; 
    }
    if(chars[i].match(/[\D]/) && maxCount > 0) {
      subStringStartLoc = (i - maxCount) - 1;
    }
  }
  let maxDigitsPrefix = inputString.slice(subStringStartLoc, subStringStartLoc + maxCount);

  return maxDigitsPrefix;
}

longestDigitsPrefix('h123ab1');
longestDigitsPrefix('h4t4t21w423ab1');
