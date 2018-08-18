//1.  Given two words, beginWord and endWord, and a wordList of approved words, find the length of the shortest transformation sequence from beginWord to endWord such that:
//2 * Only one letter can be changed at a time
//3 * Each transformed word must exist in the wordList.
//4 Return the length of the shortest transformation sequence, or 0 if no such transformation sequence exists.
//5 Note: beginWord does not count as a transformed word.  You can assume that beginWord and endWord are not empty and are not the same.

//6 Example
// For beginWord = "hit", endWord = "cog", and wordList = ["hot", "dot", "dog", "lot", "log", "cog"], the output should bewordLadder(beginWord, endWord, wordList) = 5.

//7  The shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog" with a length of 5.

// step 1 -
//})

// beginWord = "hit"
// endWord = "cog"
// wordList = ["hot", "dot", "dog", "lot", "log", "cog"]

var wordTransformer = function(beginWord, endWord, wordList) {
  var counter = 0;
  var notFound = true;
  var answer = wordList.length;

  var oneOff = function(base, list) {
    var result = [];
    list.forEach(word => {
      var counter = 0;
      word.split("").forEach((letter, i) => {
        if (base[i]) !== letter) {
          counter++;
        }
      })
      if (counter === 1) {
        result.push(word);
      }
    })
    return result;
  };

  var inner = function(base, list) {
    counter++;
    if(base === endWord) {
      notFound = false;
      answer = Math.min(answer, counter)
      return;
    }
    var approvedList = oneOff(base, list)
    if(approvedList.length === 0) {
      return;
    }
    for(var i = 0; i < approvedList.length; i++) {
      inner(approvedList[i], list.slice(0, list.indexOf(approvedList[i])).concat(list.slice(list.indexOf(approvedList[i]) + 1)))
      counter--;
    }
  };
  inner(beginWord, wordList)
  return notFound === true ? 0 : answer;
}
