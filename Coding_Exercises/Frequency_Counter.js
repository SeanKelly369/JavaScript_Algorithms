// Given two positive integers, find out if the two numbers have the same frequency of digits.

// Solution MUST be of O(N)

//Same inputs

sameFrequency(182, 281)
// sameFrequency(34, 14)
// sameFrequency(3589578, 5879385)
// sameFrequency(22, 222)

function sameFrequency(num1, num2) {
  // Convert the numbers to strings
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();

  // If the two strings aren't the same length, then end function
  if(strNum1.length !== strNum2.length) {
    return false;
  }

  // Use objects so the Big O Notation is at O(N)
  let countNum1 = {};
  let countNum2 = {};
  

  for(let i = 0; i < strNum1.length; i++) {
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1;
  }

  for(let j = 0; j < strNum1.length; j++) {
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1;
  }

  for(let key in countNum1) {
    if(countNum1[key] !== countNum2[key]) {
      return false;
    }
  }
  return true;
}
