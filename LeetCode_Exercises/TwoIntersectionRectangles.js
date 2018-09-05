/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {

    // Find out what value needs to be added to allow calculations
    let unsortedArr = [];
    let sortedArr = [];

    unsortedArr.push(A, B, C, D, E, F, G, H);


    sortedArr = unsortedArr.sort(Test);

    let minValue = sortedArr[0];
    let toAdd = Math.abs(minValue);

    function Test(a,b)
{
    return a > b ? true : false;
}

    for(let i = 0; i < sortedArr.length; i++) {
        unsortedArr[i] = i + toAdd;
    }

    // Remove the minus values to allow calculations
    let tA = A + toAdd;
    let tB = B + toAdd;
    let tC = C + toAdd;
    let tD = D + toAdd;
    let tE = E + toAdd;
    let tF = F + toAdd;
    let tG = G + toAdd;
    let tH = H + toAdd;

    // Find numbers to calculate rectangles' area
    let point1 = tC - tA;
    let point2 = tD - tB;

    let point3 = tG - tE;
    let point4 = tH - tF;

    let area1 = point1 * point2;
    let area2 = point3 * point3;

    // Find third rectangle area
    let area3 = (D - H) * (C);
    let answer = ( (area1 + area1) - (area3 / 2) );
    console.log(`The points are ${point1} , ${point2} , ${point3} and ${point4}`);
    console.log(`Full area is ${answer}`);

    return answer;
};
