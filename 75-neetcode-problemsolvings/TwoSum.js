/*
1. Two Sum

You are given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

*/ 

function TwoSum (nums, target) {

    let i=0 , k, l;
    let j=0; 
    let sum = 0 , res  = 0;
 
    while(i<nums.length)
    {
      for (j =i+1 ; j<nums.length ; j++)
          {

            sum = nums[i]+ nums[j];

            if ( target === sum) {
             return [i,j]
            }
                
          }
 i++
    }

    return false;

}
console.log(TwoSum([4,5,1,7,8,9999] , 10000));



/*usinghashmaps
 time = O(N)
  memory = O(N)


*/
function TwoSumHasmap(nums, target)

{
let map =new Map();

for (i=0; i<nums.length ; i++)
{
    diff= target - nums[i]
    if (map.has(diff))
        return [map.get(diff) , i]
    else 
        map.set(nums[i] , i)
   
}

}

console.log(TwoSumHasmap([4,5,1,7,8,9999] , 10000));
