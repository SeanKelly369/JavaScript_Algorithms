// Sample input 
let s = ", , , ,        a, eaefa";

function countSegments(s) {

    let count = 1;
    let tempArr = [];
    s = s.trim();

    if(s.length === 0) {
        count = 0;
        return count;
    }

    for(let i = 0; i < s.length; i++) {
        if(s[i] === ' ') {
            tempArr = s.split(" ");
        }
    }
    console.log(tempArr);

    if(tempArr.length === 0) {
        return count;
    }

    let count2 = 0;
    for(let i = 0; i < tempArr.length; i++) {
        if(tempArr[i] != '') {
            count2++;
        }

    }
    console.log(count2);

    return count2;

};
