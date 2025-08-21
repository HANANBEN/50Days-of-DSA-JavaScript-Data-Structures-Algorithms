

function monotonic_array(){

    /**
      test cases : 

       1. is the array is empty : 
       return true: 

       2.if the array is
    
     */
       let inCounter=false; 
       let decCounter=false;


      for(let i=1 ; i<nums.length ; i++){

            if(nums[i-1] < nums[i] ){
                inCounter = true;
            }

         
             if (nums[i-1] > nums[i]){
                    decCounter= true;
       }
       }
       
         return !(inCounter && decCounter); 
    
    
      

}

//here the DS challenge is if the array is monotonic how ? 

/*
  An array is monotonic if it is either monotone increasing 
  or monotone decreasing. An array is monotone increasing if all its 
  elements from left to right are non-decreasing. An array is monotone
   decreasing if all  its elements from left to right are non-increasing. 
   Given an integer array return true if the given array is monotonic, or false otherwise.

  * so for a solution it can not be  monotone
   decreasing and monotone increasing at the same time ===> inCounter && decCounter must have diff boolean value .
*/