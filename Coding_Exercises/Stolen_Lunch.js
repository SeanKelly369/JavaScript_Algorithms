// When you recently visited your little nephew, he told you a sad stor, there's a bully at school who steals his lunch every day, and locks it away in his locker.  He also leaves a note with a strange, coded message.  Your nephew gave you one of the notes in hope that you can decipher it for him.  And you did, it looks like all the digits in it are replaced with letters and vice versa.  Digit 0 is replaced with 'a', 1 is replaced with 'b' and so on, with digit 9 replaced by 'j'.

// The note is different every day, so you decide to write a function that will decipher it for your nephew on an ongoing basis.

stolenLunch("you'll n4v4r 6u4ss 8t: cdja");

function stolenLunch(note) {
  console.log(note);
  const chars = note.split('');
  let translatedMessage = '';
  const codeDictionary = {
    '0': 'a', '1': 'b', '2': 'c', '3': 'd', '4': 'e', '5': 'f', '6': 'g', '7': 'h', '8': 'i', '9': 'j', 'a': '0', 'b': '1', 'c': '2', 'd': '3', 'e': '4', 'f': '5', 'g': '6', 'h': '7', 'i': '8', 'j': '9'
  };

  for(let char of chars){
    if(codeDictionary.hasOwnProperty(char)){
      translatedMessage += codeDictionary[char];
    } else {
      translatedMessage += char;
    }
  }
  console.log(translatedMessage);

  return translatedMessage;
}
