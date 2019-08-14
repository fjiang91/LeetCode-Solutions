/*
 * @lc app=leetcode id=341 lang=javascript
 *
 * [341] Flatten Nested List Iterator
 */
/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
//Create an arr and index to store the flatten list
var NestedIterator = function(nestedList) {
  this.index = 0;
  this.arr = flatNested(nestedList)
  return this;
};
//Recursively flatten the nestedList
const flatNested = (nestedList) => {
  let newArr = [];
      for (let i = 0; i < nestedList.length; i++){
          if (nestedList[i].isInteger()) {
              newArr.push(nestedList[i].getInteger());
          } else {
              newArr = newArr.concat(flatNested(nestedList[i].getList()));
          }
      }
  return newArr;
};


/**
* @this NestedIterator
* @returns {boolean}
*/
NestedIterator.prototype.hasNext = function() {
  return this.index < this.arr.length;
};

/**
* @this NestedIterator
* @returns {integer}
*/
NestedIterator.prototype.next = function() {
  return this.arr[this.index++];
};

/**
* Your NestedIterator will be called like this:
* var i = new NestedIterator(nestedList), a = [];
* while (i.hasNext()) a.push(i.next());
*/


var NestedIterator = function(nestedList) {
    this.stack = [];
    for (let i = nestedList.length - 1; i >= 0; i--){
        this.stack.push(nestedList[i]);
    }
    return this;
};

/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function() {
    while (this.stack.length > 0) {
        let lastElem = this.stack.length - 1;
        if(this.stack[lastElem].isInteger()){
            return true;
        }  else {
            let lastElemList = this.stack.pop();
            this.stack = this.stack.concat(lastElemList.getList().reverse());
        }
    };

    return false;
};

/**
 * @this NestedIterator
 * @returns {integer}
 */
NestedIterator.prototype.next = function() {
    return this.stack.pop().getInteger();
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
*/


//Faster version using a stack and iterate only when needed
var NestedIterator = function(nestedList) {
  this.stack = [];
  //Create a stack and push it in reverse order, so when we pop we'll have the first elem at the end of the stack
  for (let i = nestedList.length - 1; i >= 0; i--){
      this.stack.push(nestedList[i]);
  }
  return this;
};

/**
* @this NestedIterator
* @returns {boolean}
*/
NestedIterator.prototype.hasNext = function() {
  while (this.stack.length > 0) {
    //Check if last elem is an integer
      let lastElem = this.stack.length - 1;
      if(this.stack[lastElem].isInteger()){
          return true;
      }  else {
        //If last elem is not integer, then pop it off and add its nested list into the stack in reverse order (since we reverse the nestedList originally as well)
          let lastElemList = this.stack.pop();
          this.stack = this.stack.concat(lastElemList.getList().reverse());
      }
  };

  return false;
};

/**
* @this NestedIterator
* @returns {integer}
*/
NestedIterator.prototype.next = function() {
  return this.stack.pop().getInteger();
};

/**
* Your NestedIterator will be called like this:
* var i = new NestedIterator(nestedList), a = [];
* while (i.hasNext()) a.push(i.next());
*/
