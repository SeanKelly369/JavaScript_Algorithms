// "abc"
// input -> string
// output -> array
// -holds all possible anagrams ["abc", "acb", "bac", "bca", "cab", "cba"]

// Test input
let maple = allAnagrams("abcde");
maple;

function allAnagrams(string) {
  if (string.length === 0) {
    return [''];
  }
  let result = {};

  string.split('').forEach(function(letter, i) {
    let remainingLetters = string.slice(0, i) + string.slice(i + 1);

    // For each anagram of the remaining letter
    allAnagrams(remainingLetters).forEach(function(anagram) {
      result[letter + anagram] = true;
    });
  });
  return Object.keys(result);
}
