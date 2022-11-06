export class Queue {
  constructor() {
    this.storage = [];
  }

  print = () => console.log(this.storage);

  enque = (value) => this.storage.push(value);

  deque = () => this.storage.shift();

  front = () => this.storage[0];

  size = () => this.storage.length;

  isEmpty = () => this.storage.length === 0;
}
