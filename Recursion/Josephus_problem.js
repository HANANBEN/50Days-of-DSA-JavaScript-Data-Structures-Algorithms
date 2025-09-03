//Medium difficulty problem



/*
The Josephus Problem:

The Josephus problem is a classic theoretical problem in computer science and mathematics.
It describes a situation where n people are standing in a circle, numbered from 1 to n.
Starting from person 1, every kth person is eliminated from the circle until only one person remains.
The task is to find the position of the last remaining person.

This problem can be solved using various approaches, including:
- Recursive method: Using the formula josephus(n, k) = (josephus(n-1, k) + k) % n
- Iterative method: Simulating the elimination process using a data structure like a queue or list
- Mathematical formula: For specific cases, there are closed-form solutions

The recursive approach is elegant and leverages the self-similar nature of the problem.
Base case: When n = 1, the last remaining person is person 1 (or 0 in 0-based indexing).

Example:
For n = 5 people and k = 2 (every 2nd person eliminated):
The elimination order would be: 2, 4, 1, 5, and person 3 remains.

here we start counting the 1st person then by the 2th person the same person will be eliminated not the next one , 
the eliminated person is part of the counting.

This problem has applications in areas like algorithm design, data structures, and even historical anecdotes.
*/


/*
 1. the base case will be if the remaining people is 1
 2. how I'm going to keep the number of the person i will start counting again from. 
*
*/

/**
 * Approach 1  :
 * an array with n elements [1 , 2 , 3, 4 ,5]
 * each element with an index from 0 
 * counting the kth element will be eliminated , so [0 - k - 1]%length => why "%" because its a cycle   [0 - k - 1] this will give us which index we are in after moving k positions
 * but since we have only n elements so we are in cycle so with % we will get the index after cycling number of times depends on the k value
 * 0 is the starting index of wich we started counting , the return will be the index of the removed element 
 * then thanks to that we will have the new index whom we will use to start counting again. 
 * 
 */

function Josephus_problem(n, k){
    // for like n=3 the array will be [1,2,3]
 

    //to fill up teh array 
    let arr = Array.from({length:n},(_,i)=>i+1);
    
    //base case 
function helper(arr , startIndex){
    if(arr.length === 1){
        return arr[0]; 
      //because what will last is 1 item and its going to be at index 0
    }

    //recursive case 
    let indexToremove =(startIndex+k-1)%arr.length;
    arr.splice(indexToremove , 1);
    return helper(arr ,indexToremove);
    }
    return helper(arr , 0); 
}