largestOfFour([[4,8,1,3], [13, 27, 18, 26], [32, 35, 37, 39]]);

function largestOfFour(nums) {
  const highestNumbers = [];

  for(let numberGroup of nums) {
    let largest = 0;

    for(let number of numberGroup) {
      largest = largest < number ? number: largest;
    }
    highestNumbers.push(largest);
  }
  return highestNumbers;
}
