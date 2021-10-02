/*
Write a function called sameFrequency, which accepts two positive intergers.
Find out if the two numbers have the same frequency of digits.
*/

function sameFrequency(num1, num2) {
    if(num1 === num2) {
       return true;
    }

    const num1Str = `${num1}`;
    const num2Str = `${num2}`;

    if(num1Str.length !== num2Str.length) {
        return false
    }

    const table = {}

    for(let i = 0; i < num1Str.length; i++) {
       if(num1Str[i] in table) {
        table[num1Str[i]] += 1
       } else {
        table[num1Str[i]] = 1
       }

       if(num2Str[i] in table) {
        table[num2Str[i]] -= 1
       } else {
        table[num2Str[i]] = -1
       }
    }

    for(let key in table) {
       if(table[key] !== 0) {
           return false;
       }
    }

    return true;
}


console.log(sameFrequency(182, 281)) //true
console.log(sameFrequency(34, 14)) //false
console.log(sameFrequency(3589578, 5879385)) //true
console.log(sameFrequency(22, 222)) //false