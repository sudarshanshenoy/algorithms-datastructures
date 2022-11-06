import { Queue } from "./queue.js";

export class PriorityQueue extends Queue {
  enque = (value) => {
    if (this.isEmpty()) {
      this.storage.push(value);
      return;
    }

    if (value[1] <= this.storage[this.storage.length - 1][1]) {
      this.storage.push(value);
      return;
    }

    for (let i = 0; i < this.storage.length; i++) {
      if (value[1] > this.storage[i][1]) {
        this.storage.splice(i, 0, value);
        break;
      }
    }
  };
}
