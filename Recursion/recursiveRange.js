// SAMPLE INPUT/OUTPUT
// recursiveRange(6) // 21
recursiveRange(8) // 35

function recursiveRange(x){
   if (x === 0 ) return 0;
   console.log(x);
   return x + recursiveRange(x-1);
}
