/*
Write a function called maxSubarraySum, which accepts array of intergers and a number n.
The function should maximum sum of n consecutive elements in the array
*/

function maxSubarraySum(arr, windowSize) { // O(n*m) 
    if(arr.length === 0 || arr.length < windowSize) {
       return null;
    }
    let largestSum = null;
    for(let i = 0; i < arr.length - windowSize + 1; i++) {
        let sum = null;
        for(let j = i; j< i + windowSize; j++ ) {
            sum += arr[j]
        }

        if(!largestSum || sum > largestSum ) {
            largestSum = sum;
        }
    }
    return largestSum;
}

console.log(maxSubarraySum([1,2,5,2,8,1,10], 2)) // 10
console.log(maxSubarraySum([1,2,5,2,8,1,5], 4)) // 17
console.log(maxSubarraySum([4,2,1,6],1)) // 6
console.log(maxSubarraySum([4,2,1,6,2],4)) // 13
console.log(maxSubarraySum([],4)) // null


function maxSubarraySum1(arr, windowSize) { // O(n) 
    if(arr.length === 0 || arr.length < windowSize) {
       return null;
    }

    let maxsum = null;

    for(let i = 0; i < windowSize; i++) {
        maxsum += arr[i]
    }

    let tempsum = maxsum;
    for(let i = windowSize; i < arr.length; i++) {
        tempsum = tempsum - arr[i-windowSize] + arr[i]
        maxsum = Math.max(maxsum, tempsum)
    }
    return maxsum;
}

console.log(maxSubarraySum1([1,2,5,2,8,1,10], 2)) // 10
console.log(maxSubarraySum1([1,2,5,2,8,1,5], 4)) // 17
console.log(maxSubarraySum1([4,2,1,6],1)) // 6
console.log(maxSubarraySum1([4,2,1,6,2],4)) // 13
console.log(maxSubarraySum1([],4)) // null