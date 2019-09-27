/*
 * @lc app=leetcode id=241 lang=javascript
 *
 * [241] Different Ways to Add Parentheses
 */
/**
 * @param {string} input
 * @return {number[]}
 */

 /*
* Divide and Conquer - Inspired by others
* O(n!) -> Time Complexity -> Shorter with Memorization
* O(n) -> Space Complexity
* Approach -> Divide and Conquer -> Divide the string into left and right when we found an operation.
* Recursive compute the left and right side and add the value to the res
* Apply same method to every single operation we found on string
* Edge Case / Questions to Ask
* 1. Will the string always be a valid string? For example, will there be any extra operations or extra numbers?
* 2. Will there be invalid charactes within?
*/

var diffWaysToCompute = function(input, memo = []) {
  if (!input.length) return input;
  if (input.length === 1 || !input.match(/[+|*|-]/)) return [parseInt(input)]

  if (memo[input]) return memo[input];
  let res = [];
  for (let i = 0; i < input.length; i++) {
      if (input[i] === '-' || input[i] === '+' || input[i] === '*') {
          let leftExp = diffWaysToCompute(input.slice(0, i), memo);
          let rightExp = diffWaysToCompute(input.slice(i + 1), memo);
          for (let left = 0; left < leftExp.length; left++){
              for (let right = 0; right < rightExp.length; right++){
                  res.push(opHelper(leftExp[left], rightExp[right], input[i]))
              }
          }
      };
  };
  memo[input] = res;
  return res;
};

function opHelper(num1, num2, op) {
switch(op){
    case "-": return num1 - num2; break;
    case "+": return num1 + num2; break;
    case "*": return num1 * num2; break;
    default: return;
}
};

module.exports = diffWaysToCompute
