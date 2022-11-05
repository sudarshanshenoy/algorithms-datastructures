import { Stack } from "./src/Datastructures/stack.js";
import { Set } from "./src/Datastructures/set.js";

/**
 * Stack
 */
const myStack = new Stack();

myStack.push(5);
myStack.push(2);
myStack.push(4);
myStack.push(7);

console.log("Size:", myStack.size());
console.log("Top:", myStack.peek());
myStack.pop();
console.log("Size after pop:", myStack.size());

/**
 * Set
 */
const mySet = new Set();

console.log(mySet.values());
mySet.add(5);
mySet.add(5);
mySet.add(4);
mySet.add(1);
console.log(mySet.values());
console.log(mySet.has(1));
console.log(mySet.has(2));

const mySet2 = new Set();
mySet2.add(2);
mySet2.add(3);
mySet2.add(5);

console.log(mySet2.values());
console.log(mySet.union(mySet2).values());
