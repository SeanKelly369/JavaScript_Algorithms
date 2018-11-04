// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

solution('SMS msgs are really short', 12);

function solution(S, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    
    let slicedMessages = [];
    
    let SMS_Count = 0;
    
    // Using.trim() to remove empty spaces either side
    let trimmedMessage = S.trim();
    
    // Dealing with edge cases
    if(trimmedMessage.length <= 0) {
        return -1;
    }    
    
    
    //Find out where to split SMS if its length is greater than K.  May not be split within words
    
    // creating variable for S.length to shave off compilation time by a few nanoseconds
    let messLen = trimmedMessage.length;
    var j = K;
    var splitPoint = 0;
    var matchPattern = /\s/g;

    for(var i = 0; i < messLen+1; i++) {
      if(i == j){
        // Although the code seamingly works correctly, it splits up words, I'll attempt to fix this little issue.
        for(var m = i; m <= i; m--){
            if(trimmedMessage.charAt(m).match(matchPattern)) {
              console.log(m)
                splitPoint = m + 1;
              console.log(`splitPoint is ${splitPoint}`)
            }
        }
        
        slicedMessages.push(trimmedMessage.slice(splitPoint, j));
        splitPoint = j;
        j = j + K;
        SMS_Count++;
      }
    }
    slicedMessages.push(trimmedMessage.slice((SMS_Count * K), messLen));
        
    return slicedMessages.length;
}
