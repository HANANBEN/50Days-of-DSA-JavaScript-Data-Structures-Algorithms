

/**
 * recursion leap of faith : 
 * 
 * 1. understand the problem  ==> print 321123
 * 2.Identify subproblem  ==> print 2112
 * 3.trust // fail  ===>  you dont need to unroll the recursion
 * 4. Link 1 and 2  ==> 321123
 * 4.Base conditon    ==> for 0 , return 
 */


/**
 * let's explain this algorithm ,, it's quite interessting 
 * 
 * /**
 * Recursion "leap of faith" to print mirror numbers (ex: 321123 for n=3)
 * 
 * 1. Base case: when n == 0, return (stop recursion).
 * 2. Print n before the recursive call (on the way down).
 * 3. Make the recursive call with n-1.
 * 4. The code after recursion does not run immediately.
 *    It waits until the *last recursive call returns*.
 * 5. Once the base case returns, recursion "calls back":
 *    it starts executing the code after recursion in each
 *    pending function call (on the way up the stack).
 * 6. That’s why we see the numbers printed again in reverse
 *    order → 321123.
 
 */

function testRecursion(n){
     


     if( n ==0) return 0 ;
       

      console.log(n);
    testRecursion(n-1); 
      console.log(n);



    }



testRecursion(5);