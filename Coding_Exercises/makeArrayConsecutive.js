function makeArrayConsecutive2(statues) {
  let sortedArr = statues.sort(function (a, b) {
    return a - b;
  });
  let count = 0;
  let min = sortedArr[0];
  let max = sortedArr[sortedArr.length - 1];

  for(let i = min; i < max; i++) {
    if(statues.indexOf(i) === -1) {
      count++;
    }
  }
  return count;
}
makeArrayConsecutive2([6 , 2, 3, 8, 13, 4, 17]);
