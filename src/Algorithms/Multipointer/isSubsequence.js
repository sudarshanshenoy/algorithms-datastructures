 /*
Write a function called isSubsequence, which takes in two strings and checks whether the characters in the first string form a subsequence
of the characters in the second string. (without their order changing)
*/

function isSubsequence(str1, str2) {

    let i = 0;
    let j = 0;

    while(i < str2.length) {
      
      if(str2[i] === str1[j]) {
          i++;
          j++;
      } else {
          i++;
      }
      if(j === str1.length) {
        return true;
      }
    }

    return false;

}


console.log(isSubsequence('hello','hello world')) //true
console.log(isSubsequence('sing', 'sting')) //true
console.log(isSubsequence('abc','abracadabra')) // true
console.log(isSubsequence('abc', 'acb')) //false