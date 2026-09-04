/**
 * remarque: 
 * left pointer is always gonna be the min value in the whole array . Because more its a min value more the profit is larger, doesnt matter when we sell (of course it has to be the larger ).
 * 
 *  sell  value always has to be after the min value. because even if its larger , we need to make sure we buy first then worry when to sell.
 * 
 * so basacly find when to but (min value ) , when to sell is the larger value om the rest of values in this segment [minvalue , rest of items]
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */




function BestTimeToBuyAndSellStock(nums){

    

    let l=0;

    let max=0;

    for (let r=1 ; r<nums.length; r++)
    {
            if(max < nums[r] - nums[l]){
                max=nums[r] -nums[l];
                return nums[r]
            } else 
                l=r;

                
       }

       return max;
       
    }



console.log(BestTimeToBuyAndSellStock([7,1,5,3,6,4]))