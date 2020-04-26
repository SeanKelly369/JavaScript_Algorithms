// Approach using a HashMap

// twoSum([2,7,11,15], 9);
twoSum([45,2,1,6,9], 3);

function twoSum(nums, target) {
    let map = new Map();
    const arrSize = nums.length;
    for(let i = 0; i < arrSize; i++) {
        let complement = target - nums[i];
        if(map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
};

// Naive brute force N squared solution

// Sample Inputs
//let target = 6;
//let nums = [3,2,4];

function twoSum(nums, target) {
    let tempArr = [];

    for(let i = 0; i < nums.length; i++) {
        
        for(let j =0; j < nums.length; j++) {
            
            if( (i != j) && (nums[i] + nums[j] === target) ){

                tempArr.push(i);
                tempArr.push(j);
                return tempArr;
            }          
        }     
    }
}
