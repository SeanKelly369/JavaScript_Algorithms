let str = "Hello world";

function reverseString(str) {

  return str.split('').reverse().join('');
  //console.log(str);

}
reverseString(str);


let pal = "navan";

function isPalindrome(pal){
  let left = 0;
  let right = pal.length-1;
  let middle = Math.floor(right/2)+1;
  let flag = false;
  console.log(middle);
  for(let i = 0; i< middle;i++){

    if(pal[left] === pal[right]){
      flag = true;

    } if(pal[left] !== pal[right]) {
        flag = false;
        break;
    }
  }
  left++;
  right--;
  return flag;
}

isPalindrome(pal);

let int = 2378;


function reverseInt(int){
  let tStr = int.toString();
  console.log(tStr);
  tStr = tStr.split('').reverse().join('');
  revInt = parseInt(tStr);
  return revInt;
}

reverseInt(int);

let word = "On the ground"

function CapitaliseLetters(word){
  return word = word.toUpperCase();
}

CapitaliseLetters(word);

function fizzBuzz(){
  let num = 0
  while(num <= 100){
    if(num % 3 === 0 && num % 5 === 0){
      console.log("FizzBuzz");
    } else if(num % 3 === 0){
      console.log("Fizz");
    } else if(num % 5 === 0){
      console.log("Buzz");
    } else {
      console.log(num);
    }
    num++;
  }

  return fb;
}

fizzBuzz();
