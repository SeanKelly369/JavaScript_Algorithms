//Checks for duplicates

areThereDuplicates(1, 2, 3) // false
areThereDuplicates(1, 2, 2) // true
areThereDuplicates('a', 'b', 'c', 'a') // true

// Frequency Counter
function areThereDuplicates() {
  let collection = {};
  for(let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
  }
  for(let key in collection) {
    if(collection[key] > 1) return true;
  }
  return false;
}

// Multiple Pointers
function areThereDuplicates(...args) {
  args.sort((a,b) => a > b);
  let start = 0;
  let next = 1;
  while(next < args.length) {
    if(args[start] === args[next]) {
      return true;
    }
    start++;
  }
  return false;
}

// One Liner Solution
function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}
