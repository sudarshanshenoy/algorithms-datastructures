/*
Write a function called countUniqueValues, which accepts sorted array of intergers.
The function should count the unique values in the array.
*/

function countUniqueValues(arr) {
    
    if(arr.length === 0) {
        return 0;
    }
    if(arr.length === 1) {
        return 1;
    }
 
    let i = 0, j = arr.length-1;
    const uniqueValObject = {}

    while(i < j) {
       const value1 = arr[i];
       const value2 = arr[j]
       if(uniqueValObject.hasOwnProperty(value1)) {
         i++
       } else {
        uniqueValObject[value1] = 1
       }
       if(uniqueValObject.hasOwnProperty(value2)) {
        j--
      } else {
       uniqueValObject[value2] = 1
      }
    }
    return Object.keys(uniqueValObject).length
 }

console.log(countUniqueValues([1,1,1,1,1,2])) // 2
console.log(countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])) // 7
console.log(countUniqueValues([])) // 0
console.log(countUniqueValues([-2,-1,-1,0,1])) // 4


function countUniqueValues2(arr) {
    
    if(arr.length === 0) {
        return 0;
    }
    if(arr.length === 1) {
        return 1;
    }
 
    let i = 0;

    for(let j = 1; j < arr.length; j++) {
         if(arr[i] !== arr[j]) {
             i++;
             arr[i] = arr[j]
         }
    }

    return i+1
 }

console.log(countUniqueValues2([1,1,1,1,1,2])) // 2
console.log(countUniqueValues2([1,2,3,4,4,4,7,7,12,12,13])) // 7
console.log(countUniqueValues2([])) // 0
console.log(countUniqueValues2([-2,-1,-1,0,1])) // 4