export class Stack {
  constructor() {
    this.storage = {};
    this.count = 0;
  }

  push = (value) => {
    this.storage[this.count] = value;
    this.count += 1;
  };

  pop = () => {
    if (this.count === 0) {
      return undefined;
    }

    this.count -= 1;
    const value = this.storage[this.count];
    delete this.storage[this.count];

    return value;
  };

  size = () => this.count;

  peek = () => this.storage[this.count - 1];
}
