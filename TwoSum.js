/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let i, j;
    for(i=0; i<nums.length; i++){
       for(j=i+1; j<nums.length; j++){
           if(nums[i]+nums[j]===target){
               return [i,j]
           }
       }
    }
    
};

twoSum([3,3], 6); //two loop n times n^2

//test cases cc [] what should be output
//test case2 that does not add up target

//using map
const twoSum_On_Better = (arr, target) => {
	 const indics=new Map();

     for(let i=0; i<arr.length-1; i++){
         const compliment= target-arr[i]
         
         if(indics.has(compliment)){
            return [indics.get(compliment), i]
         }

         indics.set(arr[i], i)
     }
	
}
twoSum_On_Better([2, 7, 11, 15], 9);