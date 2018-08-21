recurse();

function recurse() {
  let counter = 0;
  function inner() {

    // Use base case to end recursive function calls
    if(counter === 10)
    {
      return;
    }
    console.log("Hello");
    counter++;
    inner();
  }
  inner();
}
