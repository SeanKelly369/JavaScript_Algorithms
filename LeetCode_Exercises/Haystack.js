/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
//Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

const strStr = (haystack, needle) => {

    if (needle === '') return 0;
    if (haystack.length < needle.length) return -1;

    for (let i = 0; i < haystack.length - needle.length + 1; i+= 1) {

        if (haystack.charAt(i) === needle.charAt(0)) {

            let matches = true;
            for (let j = 1; j < needle.length; j++) {
                if (haystack.charAt(i + j) !== needle.charAt(j)) matches = false;
            }
            if (matches) return i;
        }
    }

    return -1;
};
