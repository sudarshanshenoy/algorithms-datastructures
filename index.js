import { Stack } from "./src/Datastructures/stack.js";
import { Set } from "./src/Datastructures/set.js";
import { Queue } from "./src/Datastructures/queue.js";
import { PriorityQueue } from "./src/Datastructures/priorityqueue.js";
import { BST } from "./src/Datastructures/binarysearchtree.js";

/**
 * Stack
 */
console.log("\n", "***Stack***", "\n");
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
console.log("\n", "***Set***", "\n");
const mySet = new Set();

console.log(mySet.values());
mySet.add(5);
mySet.add(5);
mySet.add(4);
mySet.add(1);
mySet.add(9);
console.log(mySet.values());
console.log(mySet.has(1));
console.log(mySet.has(2));

const mySet2 = new Set();
mySet2.add(2);
mySet2.add(3);
mySet2.add(5);
mySet2.add(7);

console.log(mySet2.values());
console.log(mySet.union(mySet2).values());
console.log(mySet.intersection(mySet2).values());
console.log(mySet.difference(mySet2).values());
console.log(mySet2.difference(mySet).values());

/**
 * Queue
 */
console.log("\n", "***Queue***", "\n");
const myQueue = new Queue();
myQueue.enque(1);
myQueue.enque(2);
myQueue.enque(3);
myQueue.print();
myQueue.deque();
myQueue.print();

/**
 * Priority Queue
 */
console.log("\n", "***Priority Queue***", "\n");
const myPrioQueue = new PriorityQueue();
myPrioQueue.enque(["a", 1]);
myPrioQueue.enque(["c", 1]);
myPrioQueue.enque(["b", 2]);
myPrioQueue.enque(["e", 1]);
myPrioQueue.enque(["f", 5]);
myPrioQueue.print(); // expected order f,b,a,c,e
myPrioQueue.deque();
myPrioQueue.print(); // expected order b,a,c,e

/**
 * Binary Search Tree
 */
console.log("\n", "***Binary Search Tree***", "\n");
const myBST = new BST();
myBST.add(25);
myBST.add(10);
myBST.add(40);
myBST.add(5);
myBST.add(11);
myBST.add(29);
myBST.add(49);
myBST.add(3);
myBST.add(7);
myBST.add(12);
myBST.add(45);
myBST.add(50);

myBST.print();
myBST.remove(50);
console.log("After remove");
myBST.print();
myBST.remove(10);
console.log("After remove");
myBST.print();
