export class Set {
  constructor() {
    this.storage = [];
  }

  has = (value) => this.storage.indexOf(value) !== -1;

  add = (value) => {
    if (this.has(value)) {
      return;
    }

    this.storage.push(value);
  };

  delete = (value) => {
    const index = this.storage.indexOf(value);
    if (index !== -1) {
      this.storage.splice(index, 1);
    }
  };

  clear = () => (this.storage = []);

  size = () => this.storage.length;

  values = () => [...this.storage];

  union = (anotherSet) => {
    let newSet = new Set();

    for (let value of this.storage) {
      newSet.add(value);
    }

    for (let value of anotherSet.values()) {
      newSet.add(value);
    }

    return newSet;
  };

  intersection = (anotherSet) => {
    let newSet = new Set();
    let thisSetValues = this.values();
    for (let value of thisSetValues) {
      if (anotherSet.has(value)) {
        newSet.add(value);
      }
    }

    return newSet;
  };
}
