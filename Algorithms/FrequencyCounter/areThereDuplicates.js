/*
Write a function called areTherDuplicates, which accepts variable number of arguments, 
and checks whether there are any duplicates among the arguments passed in.
*/

function areTherDuplicates(...args) {

    if(args.length === 0) {
        return false
    }

    const table = {}

    for(let i = 0; i < args.length; i++) {
       if(args[i] in table) {
        return true
       } else {
        table[args[i]] = 1
       }
    }

    return false;
}


console.log(areTherDuplicates(1,2,3)) // false
console.log(areTherDuplicates(1,2,2)) // true
console.log(areTherDuplicates('a','b','c','a')) //true