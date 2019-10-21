/*
 * @lc app=leetcode id=735 lang=javascript
 *
 * [735] Asteroid Collision
 */

// @lc code=start
/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function(asteroids) {
  let stack = [];

  for (let i = 0; i < asteroids.length; i++) {
    let num = asteroids[i];
    stack.push(num);
    while (
      stack.length > 1 &&
      stack[stack.length - 1] < 0 &&
      stack[stack.length - 2] > 0
    ) {
      let lastNum = stack.pop();
      let secondNum = stack.pop();
      let lastAbs = Math.abs(lastNum);
      let secondAbs = Math.abs(secondNum);
      if (secondAbs < lastAbs) {
        stack.push(lastNum);
      } else if (secondNum > lastAbs) {
        stack.push(secondNum);
      } else break;
    }
  }
  return stack;
};

module.exports = asteroidCollision;
// @lc code=end
