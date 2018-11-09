isTandemRepeat('tandemtandem');
isTandemRepeat('xxxxx');
isTandemRepeat('tandemtantem');

function isTandemRepeat(word) {
  const halfWay = word.length / 2;
  const wordLen = word.length;
  console.log(wordLen);
  if(wordLen % 2 === 0) {
    const firstHalf = word.slice(0, halfWay);
    const secondHalf = word.slice(halfWay, wordLen);
    return firstHalf === secondHalf;
  }

  return false;
}
