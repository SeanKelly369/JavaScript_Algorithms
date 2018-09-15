//input = 2;
//output = ["re", "rp", "rs", "pr", "pp", "ps", "sr", "sp", "ss"]

// Test input
rps(3);

function rps(rounds) {
  // array variable to store result
  let results = [];

  // Array of combination possibilities
  let mix = ['r', 'p', 's', 'x'];

  function play(playedSoFar, rounds) {

    // End the play function when the number of rounds are complete
    if(rounds === 0) {
      results.push(playedSoFar);
      return;
    }
    // Run through the total number of possible combinations until the number of rounds reaches 0.  Combinations get recursively placed on a call stack until no new combinations remain.
    for(let i in mix) {
      play(playedSoFar + mix[i], rounds - 1);
    }
  }

  play('', rounds);
  return results;
}
