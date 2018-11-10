// My solution in JavaScript
function lateRide (n) {

  let mins = n % 60;
  let hours = ((n-mins) / 60);

  if(hours < 10) {
    hours = '0' + hours;
  } 
  if(mins < 10) {
    mins = '0' + mins;
  }
  let formattedTime = hours + ':' + mins;

  let answer = parseInt(formattedTime[0]) + parseInt(formattedTime[1]) + parseInt(formattedTime[3]) + parseInt(formattedTime[4]);

  return answer;
}
lateRide(242);

// Dylan solution in TypeScript
// function lateRide2(n: number): number {
//   const hours = Math.floor(n / 60);
//   const minutes = n % 60;
//   const time = hours.toString().concat(minutes.toString()).split('').map((char) => parseInt(char)
//   );

//   return time.reduce((a, b) => a + b );
// }

// lateRide2(808);
