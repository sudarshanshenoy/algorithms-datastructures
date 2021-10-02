/*
Write a function called averagePair, which accepts sorted interger array and a target average.
Find out if there is pair of values in the array where the average of the pair equals the target average.
*/

function averagePair(arr, target) {
   
    if(arr.length === 0) {
      return false;
    }
    
    const targetSum = 2 * target;
    
    for(let i = 0; i < arr.length && arr[i] <= targetSum; i++ ) {
        
        for(let j = i+1; j < arr.length && arr[i] + arr[j] <= targetSum; j++) {
            
            if(arr[i] + arr[j] === targetSum) {
               return true;
            }

        }

    }

    return false;
}


console.log(averagePair([1,2,3],2.5)) //true
console.log(averagePair([1,3,3,5,6,7,10,12,19],8)) //true
console.log(averagePair([-1,0,3,4,5,6],4.1)) //false
console.log(averagePair([],4)) //false