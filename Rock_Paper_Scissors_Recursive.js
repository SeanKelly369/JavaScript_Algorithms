//input = 3;
//output = ["re", "rp", "rs", "pr", "pp", "ps", "sr", "sp", "ss"]


var rps = function(rounds) {
  var results = [];
  var possibilities = ['r', 'p', 's'];

  var play = function(playedSoFar, rounds) {
    if(rounds === 0) {
      results.push(playedSoFar);
      return;
    }
    for(var i = 0; i < 3; i++) {
      play(playedSoFar + possibilities[i], rounds - 1);
    }
  }

  play('', rounds);
  return results;
}

var maple = rps(3);
maple;
