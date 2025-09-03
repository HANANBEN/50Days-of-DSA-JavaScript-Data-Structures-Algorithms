/**
 * LeetCode 779: K-th Symbol in Grammar
 * 
 * PROBLEM EXPLANATION:
 * 
 * We build a table of n rows (1-indexed). We start by writing 0 in the 1st row.
 * Now in every subsequent row, we look at the previous row and replace each occurrence of:
 * - '0' with "01"
 * - '1' with "10"
 * 
 * For example, for n = 3, the table is:
 * Row 1: 0
 * Row 2: 01
 * Row 3: 0110
 * 
 * Given two integers n and k, return the k-th symbol (1-indexed) in the nth row of the table.
 * 
 * EXAMPLE:
 * Input: n = 3, k = 1
 * Output: 0
 * Explanation:
 * Row 1: 0
 * Row 2: 01
 * Row 3: 0110
 * The 1st symbol in row 3 is 0.
 * 
 * Input: n = 3, k = 4
 * Output: 0
 * Explanation:
 * Row 1: 0
 * Row 2: 01
 * Row 3: 0110
 * The 4th symbol in row 3 is 0 (not 1 as might be incorrectly stated elsewhere).
 * 
 * Let's trace the pattern:
 * Row 1: "0"
 * Row 2: Replace '0' with "01" → "01"
 * Row 3: Replace '0' with "01" and '1' with "10" → "01" + "10" = "0110"
 * 
 * For row 3 "0110":
 * - Position 1: 0
 * - Position 2: 1
 * - Position 3: 1
 * - Position 4: 0
 * 
 * CONSTRAINTS:
 * - 1 <= n <= 30
 * - 1 <= k <= 2^(n-1)
 * 
 * KEY OBSERVATIONS:
 * 1. The grammar follows a recursive pattern where each row is exactly twice the length of the previous row
 * 2. The first half of row n is identical to row n-1
 * 3. The second half of row n is the complement (bitwise NOT) of row n-1
 * 4. This suggests a recursive or mathematical approach rather than building the entire table
 */

/**
 * 2 things to think of : 
 * ---> base case 
 * ---> recurrence relation
 * 
 * 
 * 2 observations :
 * ==>>>>> the first ks of the next row are the previous row + the composite of the previous row 
 * so how should we solve this ?
 * 
 */


function KthSymbolGrammer(n , k) {
           
    if (n==1) return 0; 
    var l = Math.pow(2, n-1); // here we calculated the lenght of 0's and 1's in my row 
    // then based on that we will figure out if k is before or after half of the lenght of each row 
    //l / 2 is the mid 


    if (k <= l / 2)
         
        return KthSymbolGrammer(n-1  , k); 
    else
        return 1 - KthSymbolGrammer(n-1  , k-l) ; 
}

console.log(KthSymbolGrammer(3 , 4)); 


/*
 * This problem highlights the importance of making key observations. 
 * By identifying the repetitive pattern, we can define a recurrence 
 * that naturally reduces the problem until reaching the base case.
 */