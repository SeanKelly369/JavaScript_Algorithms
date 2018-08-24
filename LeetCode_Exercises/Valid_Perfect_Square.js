function isPerfectSquare (num) {
    let start = 0;
    let end = num;

    if( num <= 0 ) {
        return false;
    }

    while( (start + 1) < end ) {
        let mid = Math.floor(start + ((end - start) / 2));
        console.log("The middle is " + mid);
        if(mid > (num / mid)) {
            end = mid;
        } else {
            start = mid;
            console.log("The start now is " + start);
        }
    }

    if (( start * start === num ) || ( end * end === num )) {
        return true;
    }

    return false;

};
