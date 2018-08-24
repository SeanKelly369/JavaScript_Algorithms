// Sample input
let chars = ['a','a','b','b','c','c','c'];

function compress(chars) {

let writerIdx = 0;
let startIdx = 0;
let endIdx = 0;

while (endIdx <= chars.length) {

    if (chars[startIdx] !== chars[endIdx] || endIdx === chars.length) {
        let digits = (endIdx - startIdx).toString();
        console.log(digits);
        chars[writerIdx++] = chars[startIdx];

        if (digits !== '1') {
            for (let i = 0; i < digits.length; i++) {
              chars[writerIdx++] = digits[i];
            }
        }
        startIdx = endIdx;
    }
    endIdx++;
    console.log(writerIdx);
}
chars.splice(writerIdx);

return writerIdx;
};
