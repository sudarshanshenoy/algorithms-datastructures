/*
Write a function called isAnagram, which accepts two strings.
The function should return true if the second string is anagram of first.
anagram: string should have same characters and same characters count
*/

function isAnagram(str1, str2) {
    
    //if length of both string's are different then return false
    if(str1.length !== str2.length) {
        return false;
    }

    let result = true;
 
    //Create a table to store
    const table = {} 
 
    // record the frequecy of value in str1 in the table and subtract the frequecy in table for values in str2
    for(let i = 0; i< str1.length; i++) {
        if(table.hasOwnProperty(str1[i])) {
         table[str1[i]] += 1
        } else {
         table[str1[i]] = 1
        }
        if(table.hasOwnProperty(str2[i])) {
         table[str2[i]] -= 1
        } else {
         table[str2[i]] = -1
        }
    }
 
    // If any value in the table is non zero then update result to false;
     for(let key in table) {
         if(table[key] !== 0) {
            result = false;
            break;
         }
     }
 
     return result;
 }
 
 
 
 console.log(isAnagram('', '')); //true
 console.log(isAnagram('aaz', 'zza')) //false
 console.log(isAnagram('anagram', 'nagaram')) //true
 console.log(isAnagram('rat', 'car')); //false
 console.log(isAnagram('awesome', 'awesom')) //false
 console.log(isAnagram('qwerty', 'qeywrt')) //true
 console.log(isAnagram('texttwisttime','timetwisttext')) //true

 
 