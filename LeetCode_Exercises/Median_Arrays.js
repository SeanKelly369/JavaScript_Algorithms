function findMedianSortedArrays (nums1, nums2) {
    let totalSum = 0;
    let joinedArray = 0;
    if(!(num1 = null) || !(num1 = null)) {
    joinedArray = nums1.concat(nums2);
    console.log("joined array elements are " + joinedArray);
    } else if(nums1 === null) {
        joinedArray = nums2;
    } else if(nums2 === null) {
        joinedArray = nums1;      
    }

    let testNum = nums2[0] + nums2[1];
    console.log("test numbers is " + testNum);

    for(let i = 0; i < joinedArray.length; i++ ) {
      totalSum += joinedArray[i];
      console.log(totalSum);
    }
    let medium = totalSum / joinedArray.length;
    if(medium === 0) {
      medium = -1;
      return medium;
    }
    console.log(medium);
    return medium;
};

findMedianSortedArrays([4,5,6,8,9], []);
//findMedianSortedArrays([3], [-2, -1]);
//findMedianSortedArrays([1,3], [2]);
//findMedianSortedArrays([8, -22, 45, 37, 29], [5, 18, 12, 6, 3]);
