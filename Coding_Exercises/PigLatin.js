// My solution in JavaScript
function pigLatin(str) {
  let tempStr = '';
  let startCharNo = 0;
  if(str[0].match(/[aeiou]/)) {
    return str = `${str}way`;

  } else if(!(str[0].match(/[aeiou]/))) {
      for(i = 0; i < str.length; i++) {
        if(str[i].match(/[aeiou]/)) {
          startCharNo = str[i];
          tempStr = str.split(str[i], str.length);
          break;
        }
      }
      str = `${str[i]}${tempStr[1]}${tempStr[0]}ay`;
      return str;
  }
}
pigLatin("eight");
//pigLatin("glove");

// Dylan Israel solution in TypeScript
// function pigLatin2(str: string: string) {
//   const letters = str.split('');
//   const vowelRegex = /[aeiou]/;

//   if(vowelRegex.test(str[0])) {
//     return `${str}way`;
//   }

//   while(true) {
//     if(!vowelRegex.test(letters[0])) {
//       letters.push(letters.splice(0,1));
//     }
//   }
//   return str;
// }
// pigLatin2("eight");
// pigLatin2("glove");
