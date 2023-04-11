const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data) {
    this.data = data;
    this.head = null;
    this.tail = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = addNode(this.rootNode, data);

    function addNode(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (data < node.data) {
        node.head = addNode(node.head, data);
      } else {
        node.tail = addNode(node.tail, data);
      }

      return node;
    }
  }

  has(data) {
    let value = this.rootNode;
    
    while (value) {
      if (value.data === data) {
        return true;
      } else if (data < value.data) {
        value = value.head;
      } else {
        value = value.tail;
      }
    }
    
    return false;
  }

  find(data) {
    let val = this.rootNode;

    while (val) {
      if (val.data === data) {
        return val;
      } else if (data < val.data) {
        val = val.head;
      } else {
        val = val.tail;
      }
    }

    return null;
  }

  remove(data) {
    this.rootNode = removeEl(this.rootNode, data);

    function removeEl(node, data) {
      if (!node) {
        return null;
      } else if (data > node.data) {
        node.tail = removeEl(node.tail, data);
        return node;
      } else if (data < node.data) {
        node.head = removeEl(node.head, data);
        return node;
      } else {
        if (!node.head && !node.tail) {
          return null;
        } else if (!node.head && node.tail) {
          return node = node.tail;
        } else if (!node.tail && node.head) {
          return node = node.head;
        }

        let del = node.tail;

        while (del.head) {
          del = del.head;
        }

        node.data = del.data;
        node.tail = removeEl(node.tail, del.data);

        return node;
      }
    }
  }

  min() {
    let minNode = this.rootNode;

    while (minNode.head) {
      minNode = minNode.head;
    }

    return minNode.data;
  }

  max() {
    let maxNode = this.rootNode;

    while (maxNode.tail) {
      maxNode = maxNode.tail;
    }

    return maxNode.data;
  }
}

module.exports = {
  BinarySearchTree
};