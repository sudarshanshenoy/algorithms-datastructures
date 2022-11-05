/*
Write a function called sumZero, which accepts sorted array of intergers.
The function should return first pair where sum is zero
*/

function sumZero(arr) {

   if(arr.length < 2) {
       return;
   }

   let i = 0, j = arr.length-1;

   while(i < j) {
      const value1 = Math.abs(arr[i]);
      const value2 = Math.abs(arr[j])
      if(value1 === value2) {
         return [arr[i],arr[j]]
      } else if(value1 > value2) {
          i++;
      } else {
          j--;
      }
   }
}

console.log(sumZero([-3,-2,-1,0,1,2,3])) // [-3,3]
console.log(sumZero([-2,0,1,3])) // undefined
console.log(sumZero([1,2,3])) //undefined
console.log(sumZero([-8,-7,-1,0,1,2,3,4,5,6])) // [-1,1]