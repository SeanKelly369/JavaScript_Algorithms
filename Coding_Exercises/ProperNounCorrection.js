// My JavaScript solution
function properNounCorrection(noun){
  const firstLetter = noun[0].toUpperCase();
  const correctedWord = `${firstLetter}${noun.slice(1, noun.length).toLowerCase()}`;
  return correctedWord;
}
properNounCorrection("pARiS");

// Dylan Israel TypeScript solution
// function properNounCorrection1(noun:string): string {
//   const firstChar = noun[0].toUpperCase();
//   const restOfWord = noun.slice(1, noun.length).toLowerCase();

//   return firstChar.concat(restOfWord);
// }
// properNounCorrection1("pARiS");
