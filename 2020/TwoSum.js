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