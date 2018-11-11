// My solution in JavaScript
function maxMultiple(divisor, bound) {
  let greatestDivisor = 0;
  for(let i = 0; i < bound; i++) {
    if(i % divisor === 0) {
      console.log(`Greatest divisor is ${i}`);
      greatestDivisor = i;
    }
  }
  return greatestDivisor;
}
maxMultiple(3,10);

// Dylan Israel solution in TypeScript
function maxMultiple2(divisor: number, bound: number): number {
  let remainder = bound % divisor;

  return bound - remainder;
}
maxMultiple2(3,10);
