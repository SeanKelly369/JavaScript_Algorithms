function validAnagram(first, second) {
  // If the length of the two strings is different it can't be an anagram
  if(first.length !== second.length) {
    return false;
  }
  // Use objects to reduce big O complexity
  const lookup = {};

  for(let i = 0; i < first.length; i++) {

    let letter = first[i];

    // If letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }
  console.log(lookup);

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];

    // Cannot find letter or letter is zero, in this case it is not anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}
// { a: 3, n: 1, g: 1, r: 1, m: 1 }

validAnagram('anagram', 'nagaram')
