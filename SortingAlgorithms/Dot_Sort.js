function numberCompare(num1, num2) {
  return num2 - num1;
}

[ 6, 4, 15, 10].sort(numberCompare);

function compareByLen(str1, str2) {
  return str1.length - str2.length;
}

[ "Steele", "Colt", "Data Structures", "Algorithms"].sort(compareByLen);
