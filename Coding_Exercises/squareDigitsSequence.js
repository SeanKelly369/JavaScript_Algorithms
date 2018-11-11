function squareDigitsSequence(a0) {
  let count = 1;
  const uniqueNums = [a0];

  while(true) {
    count++;
    a0 = digitPower(a0);
    if(uniqueNums.includes(a0)) {
      return count;
    }
    uniqueNums.push(a0);
  }
}

function digitPower(num) {
  const digits = num.toString().split('').map((element) => element ** 2);
  const sum = digits.reduce((a, b) => a + b);

  return sum;
}
squareDigitsSequence(16);
//squareDigitsSequence(169);
