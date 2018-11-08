function sumOddFibonacciNums(num){
  let result = 0; let previous = 0; let current = 1;

  while(current <= num) {
    if(current % 2 !== 0){
      result += current;
      console.log(result);
    }

    const nextCurrent = current + previous;
    console.log(`nextCurrent is ${nextCurrent}`);
    previous = current;
    current = nextCurrent;
  }

  return result;
}

sumOddFibonacciNums(300);
