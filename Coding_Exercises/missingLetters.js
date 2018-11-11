function missingLetters(str) {
  const chars = str.split('');
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split('');

  for(let i = 0; i < chars.length; i++) {
    if(chars[i] !== alphabet[i]) {
      return alphabet[i];
    }
  }
  return undefined;
}
missingLetters("abce");
missingLetters("abcdefghijklmnopqrstuvwxyz");
