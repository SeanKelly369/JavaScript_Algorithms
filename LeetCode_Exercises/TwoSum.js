/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// Sample Inputs
//let target = 6;
//let nums = [3,2,4];

function twoSum(nums, target) {
    let tempArr = [];

    for(let i = 0; i < nums.length; i++) {

        for(let j = 0; j < nums.length; j++) {

            if( (i != j) && (nums[i] + nums[j] === target) ){

                tempArr.push(i);
                tempArr.push(j);
                return tempArr;
            }
        }
    }
}
