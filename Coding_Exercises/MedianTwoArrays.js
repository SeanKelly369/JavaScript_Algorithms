let arr1 = [4,6,1,6,12,31];
let arr2 = [8,4,1,76,13,28];

mediumOfArrays(arr1, arr2);

function mediumOfArrays(...args){
  let arr1Len = arr1.length;
  let arr2Len = arr2.length;
  let totalLen = arr1Len + arr2Len;
  console.log(`totalLen is ${totalLen}`);
  let medium = 0;
  if(totalLen <= 0) return medium;

  let sum = 0;
  for(let i = 0; i < arr1Len;i++){
      sum += arr1[i];
      console.log(sum);
  }
  for(let i = 0; i < arr2Len; i++){
    sum+= arr2[i];
    console.log(sum);
  }

  medium = sum/totalLen;
  return medium;
}
