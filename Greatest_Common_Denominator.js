function gcd (num1, num2) {
    let smaller = Math.min(num1, num2);
    let larger = Math.max(num1, num2);
    // console.log(smaller);
    // console.log(larger);

    // Found it
    if (larger % smaller === 0) {
      return smaller;
    } else {
      // If gcd not found, run recursively until found
      return gcd(smaller, (larger % smaller));
    }
}

// Test input
gcd(12, 4);
