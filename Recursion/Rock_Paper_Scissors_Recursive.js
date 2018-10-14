//input = 2;
//output = ["re", "rp", "rs", "pr", "pp", "ps", "sr", "sp", "ss"]

// Test input
rps(2);

function rps(round) {
  // array variable to store result
  const results = [];

  // Array of combination possibilities
  const mix = ['r', 'p', 's', 'x'];

  play = (played, round) => {

    // End the play function when the number of rounds are complete
    if(round === 0) return results.unshift(played);

    // Run through the total number of possible combinations until the number of rounds reaches 0.  Combinations get recursively placed on a call stack until no new combinations remain.
    for(let i in mix) {
      play(played + mix[i], round - 1);
    }
  }

  play('', round);
  return results;
}

