// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

// Sample input
//let A = [1,3,6,4,1,2];
let A = [1,2,3];
//let A = [-1,-3];

solution(A);

function solution(A) {

    function numSort(num1, num2) {
        return num1 - num2;
    }
    let smallestInt = 0;

    A.sort(numSort);
    // write your code in JavaScript (Node.js 8.9.4)
    console.log(A);

    for(let i = 1; i < A.length; i++) {

        if ( !(A[i + 1] > A[i]) && (i > -1)) {
          console.log(A[i - 1]);
          smallestInt = Math.floor((A[i] + A[i - 1]) / 2);
          console.log("Smallest integer is " + smallestInt);
          return smallestInt;
        } else if ( A[i] < 0 ) {
            console.log("test");
            return smallestInt = 1;

        } else {
          return smallestInt = A.length + 1;
        }
    }

    console.log(A);
}
