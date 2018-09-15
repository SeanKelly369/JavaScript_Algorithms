//input = 2;
//output = ["re", "rp", "rs", "pr", "pp", "ps", "sr", "sp", "ss"]

// Test input
let maple = rps(3);
maple;

function rps(rounds) {
  // array variable to store result
  let results = [];

  // Array of combination possibilities
  let possibilities = ['r', 'p', 's', 'x'];
  let possLen = possibilities.length;

  function play(playedSoFar, rounds) {

    // End the play function when the number of rounds are complete
    if(rounds === 0) {
      results.push(playedSoFar);
      return;
    }
    // Run through the total number of possible combinations until the number of rounds reaches 0.  Combinations get recursively placed on a call stack until no new combinations remain.
    for(let i = 0; i < possLen; i++) {
      play(playedSoFar + possibilities[i], rounds - 1);
    }
  }

  play('', rounds);
  return results;
}
