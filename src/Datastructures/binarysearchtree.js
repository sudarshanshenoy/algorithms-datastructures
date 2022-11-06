class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

export class BST {
  constructor() {
    this.root = null;
  }

  add = (value) => {
    const node = this.root;

    if (!node) {
      this.root = new Node(value);
      return;
    }

    const searchTreeAndAdd = (node) => {
      if (value < node.data) {
        if (node.left === null) {
          node.left = new Node(value);
          return;
        }
        return searchTreeAndAdd(node.left);
      }

      if (value >= node.data) {
        if (node.right === null) {
          node.right = new Node(value);
          return;
        }
        return searchTreeAndAdd(node.right);
      }
    };

    return searchTreeAndAdd(node);
  };

  search = (value) => {
    const node = this.root;

    if (!node) {
      return -1;
    }

    const searchTree = (node) => {
      if (value === node.data) {
        return node;
      }
      if (value < node.data) {
        if (node.left === null) {
          return -1;
        }
        return searchTree(node.left);
      }

      if (value > node.data) {
        if (node.right === null) {
          return -1;
        }
        searchTree(node.right);
      }
    };

    return searchTree(node);
  };

  findMin = (node = this.root) => {
    if (!node) {
      return -1;
    }

    if (!node.left) {
      return node;
    }

    return this.findMin(node.left);
  };

  findMax = (node = this.root) => {
    if (!node) {
      return -1;
    }

    if (!node.right) {
      return node;
    }

    return this.findMax(node.right);
  };

  isPresent = () => {
    const node = this.root;

    if (!node) {
      return false;
    }

    const searchTree = (node) => {
      if (value === node.data) {
        return true;
      }
      if (value < node.data) {
        if (node.left === null) {
          return false;
        }
        return searchTree(node.left);
      }

      if (value > node.data) {
        if (node.right === null) {
          return false;
        }
        searchTree(node.right);
      }
    };

    return searchTree(node);
  };

  //TODO: Can be improved
  remove = (value, node = this.root) => {
    if (!node) {
      return -1;
    }

    if (node.data === value) {
      node = null;
      return;
    }

    const searchTree = (node) => {
      if (value === (node.left && node.left.data)) {
        if (!node.left.left && !node.left.right) {
          node.left = null;
          return;
        }

        if (!node.left.left) {
          node.left = node.left.right;
          return;
        }

        if (!node.left.right) {
          node.left = node.left.left;
          return;
        }

        let current = node.left;

        const leftMax = this.findMax(current.left);
        let newValue = leftMax.data;

        this.remove(leftMax.data, current);
        current.data = newValue;
      }

      if (value === (node.right && node.right.data)) {
        if (!node.right.left && !node.right.right) {
          node.right = null;
          return;
        }

        if (!node.right.left) {
          node.right = node.right.right;
          return;
        }

        if (!node.right.right) {
          node.right = node.right.left;
          return;
        }

        let current = node.right;

        const rightMin = this.findMin(current.right);
        let newValue = rightMin.data;
        this.remove(rightMin.data, current);
        current.data = newValue;
      }

      if (value < node.data) {
        if (node.left === null) {
          return -1;
        }
        return searchTree(node.left);
      }

      if (value > node.data) {
        if (node.right === null) {
          return -1;
        }
        searchTree(node.right);
      }
    };

    return searchTree(node);
  };

  print = (node = this.root) => {
    if (!node) {
      return;
    }
    console.log(node.data);
    this.print(node.left);
    this.print(node.right);
  };
}
