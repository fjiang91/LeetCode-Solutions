/*
 * @lc app=leetcode id=622 lang=javascript
 *
 * [622] Design Circular Queue
 */

// @lc code=start
/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
class Node{
  constructor(val, prev = null, next = null) {
      this.val = val;
      this.prev = prev;
      this.next = next;
  }
}

var MyCircularQueue = function(k) {
  this.maxSize = k;
  this.currSize = 0;
  this.dummyFront = new Node(null);
  this.dummyRear = new Node(null);

  this.resetLinkedList();
};

/**
* Insert an element into the circular queue. Return true if the operation is successful.
* @param {number} value
* @return {boolean}
*/
MyCircularQueue.prototype.enQueue = function(value) {
  if (this.isFull()) return false;
  let newNode = new Node(value);
  this.dummyRear.prev.next = newNode;
  newNode.prev = this.dummyRear.prev;

  newNode.next = this.dummyRear;
  this.dummyRear.prev = newNode;
  this.currSize++;

  return true;
};

MyCircularQueue.prototype.resetLinkedList = function() {
  this.dummyFront.next = this.dummyRear;
  this.dummyFront.prev = this.dummyRear;

  this.dummyRear.next = this.dummyFront;
  this.dummyRear.prev = this.dummyFront;
};

/**
* Delete an element from the circular queue. Return true if the operation is successful.
* @return {boolean}
*/
MyCircularQueue.prototype.deQueue = function() {
  if (this.isEmpty()) return false;
  let currFront = this.dummyFront.next;
  if (this.currSize === 1) {
      this.resetLinkedList();
  } else {
      this.dummyFront.next = currFront.next;
  }
  currFront.next = null;
  currFront.prev = null;
  this.currSize--;
  return true;
};

/**
* Get the front item from the queue.
* @return {number}
*/
MyCircularQueue.prototype.Front = function() {
  if (this.isEmpty()) return -1;
  return this.dummyFront.next.val;
};

/**
* Get the last item from the queue.
* @return {number}
*/
MyCircularQueue.prototype.Rear = function() {
  if (this.isEmpty()) return -1;
  return this.dummyRear.prev.val;
};

/**
* Checks whether the circular queue is empty or not.
* @return {boolean}
*/
MyCircularQueue.prototype.isEmpty = function() {
  return this.currSize === 0;
};

/**
* Checks whether the circular queue is full or not.
* @return {boolean}
*/
MyCircularQueue.prototype.isFull = function() {
  return this.currSize === this.maxSize;
};

module.exports = MyCircularQueue;

/**
* Your MyCircularQueue object will be instantiated and called as such:
* var obj = new MyCircularQueue(k)
* var param_1 = obj.enQueue(value)
* var param_2 = obj.deQueue()
* var param_3 = obj.Front()
* var param_4 = obj.Rear()
* var param_5 = obj.isEmpty()
* var param_6 = obj.isFull()
*/

// @lc code=end

// /**
//  * Initialize your data structure here. Set the size of the queue to be k.
//  * @param {number} k
//  */
// var MyCircularQueue = function(k) {
//   this.queue = new Array(k);
//   this.front = 0;
//   this.rear = -1;
//   this.currSize = 0;
//   this.qSize = k;
// };

// /**
// * Insert an element into the circular queue. Return true if the operation is successful.
// * @param {number} value
// * @return {boolean}
// */
// MyCircularQueue.prototype.enQueue = function(value) {
//   if (this.isFull()) return false;

//   this.rear++;
//   this.rear %= this.qSize;
//   this.queue[this.rear] = value;
//   this.currSize++;

//   return true;
// };

// /**
// * Delete an element from the circular queue. Return true if the operation is successful.
// * @return {boolean}
// */
// MyCircularQueue.prototype.deQueue = function() {
//   if (this.isEmpty()) return false;

//   this.front++;
//   this.front %= this.qSize;
//   this.currSize--;

//   return true;
// };

// /**
// * Get the front item from the queue.
// * @return {number}
// */
// MyCircularQueue.prototype.Front = function() {
//   if (this.isEmpty()) return -1;
//   return this.queue[this.front];
// };

// /**
// * Get the last item from the queue.
// * @return {number}
// */
// MyCircularQueue.prototype.Rear = function() {
//   if (this.isEmpty()) return -1;
//   return this.queue[this.rear];
// };

// /**
// * Checks whether the circular queue is empty or not.
// * @return {boolean}
// */
// MyCircularQueue.prototype.isEmpty = function() {
//   return this.currSize === 0;
// };

// /**
// * Checks whether the circular queue is full or not.
// * @return {boolean}
// */
// MyCircularQueue.prototype.isFull = function() {
//   return this.currSize === this.qSize;
// };

/**
* Your MyCircularQueue object will be instantiated and called as such:
* var obj = new MyCircularQueue(k)
* var param_1 = obj.enQueue(value)
* var param_2 = obj.deQueue()
* var param_3 = obj.Front()
* var param_4 = obj.Rear()
* var param_5 = obj.isEmpty()
* var param_6 = obj.isFull()
*/
