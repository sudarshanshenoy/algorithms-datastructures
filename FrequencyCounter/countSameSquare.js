/*
Write a function called countSameSquare, which accepts two arrays.
The function should return true if every value in the array has it's corresponding value squared in the second array.
The frequency of values must be the same.
*/

function countSameSquare(arr1, arr2) {
    
   //if length of both arr's are different then return false
   if(!arr1 || !arr2 || arr1.length !== arr2.length) {
       return false;
   }

   //Sq each value in arr1
   arr1 = arr1.map(eachValue => eachValue*eachValue)

   //Create a table to store
   const table = {} 

   // record the frequecy of value in arr1 in the table and subtract the frequecy in table for values in arr2
   for(let i = 0; i< arr1.length; i++) {
       if(table.hasOwnProperty(arr1[i])) {
        table[arr1[i]] += 1
       } else {
        table[arr1[i]] = 1
       }
       if(table.hasOwnProperty(arr2[i])) {
        table[arr2[i]] -= 1
       } else {
        table[arr2[i]] = -1
       }
   }

   // If any value in the table is non zero then update result to false;
    for(let key in table) {
        if(table[key] !== 0) {
           return false;
        }
    }

    return true;
}



console.log(countSameSquare([1,2,3], [4,1,9])); //true
console.log(countSameSquare([1,2,3], [1,9])) //false
console.log(countSameSquare([1,2,1], [4,4,1])) //false

