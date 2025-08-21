

/*
given an array of integers in which each subsequest value is 
not less than the previous value , write a function that takes 
the array as an input and returns a new array with the squares of each number 
sorted in ascending order.

*/

function sortedSquaredArray(array){
 
    let newArray= new Array();
    let i=0;

    array.forEach(element => {
        newArray[i]=Math.pow(element , 2);
        i++;
    });
             
return newArray;
}


console.log(sortedSquaredArray([1,2,3])); 


console.log("this approach is only if all the numbers are positif else we need to sort it , that will add the time complexity to nlog(n) :)"); 




function sortedSquaredArray2(array){
 
    let newArray= new Array();
    let i=0;

    array.forEach(element => {
        newArray[i]=Math.pow(element , 2);
        i++;
    });
          

    //sort methiod in an descending 
     newArray.sort((a , b )=>
          a -b
     );
return newArray;
}

console.log(sortedSquaredArray2([-3,1,2,3])); 


console.log("sorted perfectly");



/**
 * so we can improve the complexity  how ?
 * using two pointer and comparing the values 
 * see code 
 *  */



function sortedSquaredArray3(array){
 
    let newArray= new Array();
    let i=1;
    let left=0;
    let right= array.length-1; 

    while(left <= right) {

        if(Math.pow(array[right] , 2) > Math.pow(array[left] , 2) )
        {
            newArray[array.length-i] = Math.pow(array[right] , 2);
            right = right - 1;
            i++ ;
        }
        else {
              newArray[array.length-i] = Math.pow(array[left] , 2);
               left = left + 1;
               i++;
        }
    }

        return newArray;
    }


console.log(sortedSquaredArray3([-10,-9,1,2,3 , 10000, 600009])); 


// Complexity
// Time: O(n) → each element is compared and inserted exactly once.
// Space: O(n) → new array of same size as input.