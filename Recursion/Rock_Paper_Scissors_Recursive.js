//input = 2;
//output = ["re", "rp", "rs", "pr", "pp", "ps", "sr", "sp", "ss"]

// Test input
let maple = rps(2);
maple;

function rps(rounds) {
  // array variable to store result
  let results = [];

  // Array of combination possibilities
  let possibilities = ['r', 'p', 's', 'e'];


  function play(playedSoFar, rounds) {

    // End the play function when the number of rounds are complete
    if(rounds === 0) {
      results.push(playedSoFar);
      return;
    }
    // Run through the total number of possible combinations until the number of rounds reaches 0
    for(let i = 0; i < possibilities.length; i++) {
      play(playedSoFar + possibilities[i], rounds - 1);
    }
  }

  play('', rounds);
  return results;
}
