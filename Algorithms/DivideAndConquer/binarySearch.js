/*
Write a function called binarySearch, which accepts array ofsorted intergers and a number n.
The function should return the index where the number is found. return -1 if not found.
(Use divide and conquer technique)
*/

function binarySearch(arr, target) {  // O(log n)
   let left = 0, right = arr.length - 1

  while(left <= right) {
     let mid = Math.floor((left + right)/2);
     if(target === arr[mid]) {
        return mid;
     } else if(target < arr[mid]) {
          right = mid - 1 ;
     } else {
         left = mid + 1;
     }

  }
  return -1
}

console.log(binarySearch([1,2,3,4,5,6], 4)) // 3
console.log(binarySearch([1,2,3,4,5,6], 6)) // 5
console.log(binarySearch([1,2,3,4,5,6], 11)) // -1
console.log(binarySearch([1,2,3,4,5,6], 1)) // 0
