

/*
* recursion tree :
     multiple branches like a tree 
  recrusion call stack : when a function is called , memory 
  has to be allocated to remember ==> IT FOLLOWS THE APPROACH of LIFO 
    -> local variables 
    -> function parameters 
    -> return addresses etc .



    example : the facturial 
*/

function fac(n) {

 if (n == 1 ) return 1 

 return fac(n-1)*n;
}  

console.log(fac(5));