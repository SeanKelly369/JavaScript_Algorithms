// In Thumbtack, users are able to rate Pros based on their experience working with them.  Each rating is an integer ranging from 1 to 5, and all ratings are averaged to produce a single number rating for any Pro.  Those Pros who have a rating lower than a specified threshold are manually reviewed by Thumbtack staff to ensure high quality of service


// My solution was much the same as Dylan Israels
function ratingThreshold(threshold, ratings) {
  const toBeReviewed = [];
  for(let i = 0; i < ratings.length; i++) {
    let ratingsTotal = 0;
    for(let j = 0; j < ratings[i].length; j++) {
       ratingsTotal += ratings[i][j];
       console.log(ratingsTotal);
    }
      let ratingsAverage = ratingsTotal / ratings[i].length;
      console.log("average is " + ratingsAverage);
      if(ratingsAverage < threshold) {
        toBeReviewed.push(i);
      }
  }

  return toBeReviewed;
}

ratingThreshold(3.5, [[3,4], [3,3,3,4], [4]]);
