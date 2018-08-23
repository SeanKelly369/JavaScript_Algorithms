// Input: let s = "MCMXCIV";
// Output: 1994

function romanToInt (s) {

    let count = 0;

    for(let i = 0; i < s.length; i++) {

        switch( s.substring(i, i + 2) ) {
          case "CM": count += 900; i++; break;
          case "CD": count += 400; i++; break;
          case "XC": count += 90; i++; break;
          case "XL": count += 40; i++; break;
          case "IX": count += 9; i++; break;
          case "IV": count += 4; i++; break;
          default:
            switch( s.substring( i, i + 1 ) ) {
              case "M": count += 1000; break;
              case "D": count += 500; break;
              case "C": count += 100; break;
              case "L": count += 50; break;
              case "X": count += 10; break;
              case "V": count += 5; break;
              case "I": count += 1;
            }
        }
    }
    console.log(count);
    return count;
};
