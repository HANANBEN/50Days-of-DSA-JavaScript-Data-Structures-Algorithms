
/*Given an integer array `nums`, return `true` if any value appears **at least twice** in the array, and return `false` if every element is distinct.

### Examples

**Example 1:**

```text
Input: nums = [1, 2, 3, 1]
Output: true
```

Because the value `1` appears twice.

**Example 2:**

```text
Input: nums = [1, 2, 3, 4]
Output: false
```

Because every element is distinct.

**Example 3:**

```text
Input: nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]
Output: true
```

Because several values appear more than once.

### Goal

Solve the problem and consider the **time complexity** and **space complexity** of your solution.

*/

function containsDuplicate(nums)

{
let i=0;
let set = new Set();
    while(i<nums.length){
               set.add(nums[i])
               i++;
    }
   return set.size < nums.length

}


function containsDuplicate2(nums)

{
let i=0;
let set = new Set();
    for(i=0 ;i<nums.length; i++){
        if(set.has(nums[i]))
            return true 
    set.add(nums[i])
            
    }
   return false

}


console.log(containsDuplicate([2,1,4,5,5]));

console.log(containsDuplicate2([2,1,4,8]));


/*This is a solution where we use some extra space in memory because of the `Set`, but the time complexity is around **O(n)**.

There are other ways to solve this:

1. **By checking every element against the others:**
   Time complexity: **O(n²)**

2. **By sorting the array first:**
   Time complexity: **O(n log n)**
*/