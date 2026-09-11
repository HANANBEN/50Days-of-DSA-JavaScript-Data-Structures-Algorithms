function ProductOfArrayAcceptItself(nums) {


let res=[]; 
let postfix=1

for (let i=0 ; i<nums.length ; i++){

  res[i]= nums[i]*postfix
  postfix = nums[i] * res[i]

}

let prefix=1;
for (let i=nums.length-1 ; i <= 0 ; i--){

  res[i]= res[nums.length - 1 - i  ]*prefix
  prefix = nums[i]

}

}