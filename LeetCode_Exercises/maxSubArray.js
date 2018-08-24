//Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

/**
 * @param {number[]} nums
 * @return {number}
 */

// Test input
let nums = [-2,1,-3,4,-1,2,1,-5,4];


function maxSubArray (nums) {
        let sum = nums[0];
        let max = sum;
        for(let i = 1; i < nums.length ; i++) {
            console.log("The sum is " + sum);
            console.log("The max is " + max);
            sum = (sum + nums[i]) > nums[i] ? ( sum + nums[i] ) : nums[i];
            max = sum > max ? sum : max;
        }
        return max;
};
