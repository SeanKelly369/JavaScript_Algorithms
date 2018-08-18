//Given a 32-bit signed integer, reverse digits of an integer.

/**
 * @param {number} x
 * @return {number}
 */

// test input
var x = 1453;

    var reverse = function(x) {
    var rst;
    if (x < 0) {
        rst = -(('' + x).slice(1).split('').reverse().join(''));
    } else {
        rst = +(('' + x).split('').reverse().join(''));
    }

    if (-Math.pow(2,31) > rst || Math.pow(2,31) -1 < rst) {
        return 0;
    } else {
        return rst;
    }
};
