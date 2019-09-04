/*
 * @lc app=leetcode id=380 lang=javascript
 *
 * [380] Insert Delete GetRandom O(1)
 */
/**
 * Initialize your data structure here.
 */

/*
* O(1) -> Time Complexity on Average
* O(n) -> HashMap to store the index and value for constant loop up, Array/Set for generateRandom function
* Approach ->
* Insert -> Directly push the into our array/set and use a HashMap to store the index of the value and it's index(lastIndex) into our hashMap for O(1) generateRandom number()
* Remove -> Get the removeIndex from the hashMap. Swap the set/array's lastIndex with the removeIndex. Update the hashMap for the lastIndex's value to the new removeIndex's index.
* generateRandom() -> Since, we have an array/set, we can directly use Math.random() to generate a number between 0 and the set's length for O(1) time
* 1. Will there be cases there nothing adds up to k, if so what should be returned?
* 2. Is negative values within the array?
* 3. Can the k be negative?
* 4.
*/
var RandomizedSet = function() {
  //Use a hash for instant access
  this.hashMap = new Map();
  //Use set/array for random number genereator with size
  this.set = [];
};

/**
* Inserts a value to the set. Returns true if the set did not already contain the specified element.
* @param {number} val
* @return {boolean}
*/
RandomizedSet.prototype.insert = function(val) {
  //Insert if not found
  //Push the val into set and set it's current index as the last value
  //Set the index of the val, so we can use for removal afterwards
  if(!this.hashMap.has(val)) {
      this.set.push(val);
      this.hashMap.set(val, this.set.length - 1);
      return true;
  }
  return false;
};

/**
* Removes a value from the set. Returns true if the set contained the specified element.
* @param {number} val
* @return {boolean}
*/
RandomizedSet.prototype.remove = function(val) {
  //if hashMap has value then try and remove it
  //Else return false
  if (this.hashMap.has(val)) {
      //Get val's index
      const removeIndex = this.hashMap.get(val);

      //Get the index and value of the lastIndex within the set
      const lastIndex = this.set.length - 1;
      const lastValue = this.set[lastIndex];

      //Update the lastValue's index to the index of the val that needs to be removed
      //To Swap their location
      this.hashMap.set(lastValue, removeIndex);

      //Swap the lastIndex and the index of the val
      this.swap(this.set, removeIndex, lastIndex);

      //After swap, our remove val will be at the last index, just pop it off
      //And remove from the hashMap
      this.set.pop();
      this.hashMap.delete(val);
      return true;
  };

  return false;
};

RandomizedSet.prototype.swap = function (set, i, j) {
  return [set[i], set[j]] = [set[j], set[i]];
}

/**
* Get a random element from the set.
* @return {number}
*/
RandomizedSet.prototype.getRandom = function() {
  //Generate a random number with the set's length and return the number in that index
  const randomNum = Math.floor(Math.random() * this.set.length);
  return this.set[randomNum];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

