const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Queue {
  constructor() {
    this.node = 0;
    this.buffer = [];
  }

  getUnderlyingList() {
    return this.node;
  }

  enqueue(value) {
    if (this.node) {
      let num = this.node;

      while (num.next) {
        num = num.next;
      }

      num.next = new ListNode(value);
      
    } else {
      this.node = new ListNode(value);
    }
  }

  dequeue() {
    const res = this.node.value;
    this.node = this.node.next;
    return res;
  }
}

module.exports = {
  Queue
};
