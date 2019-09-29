/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
  let stack = [];

  for (let i = 0; i < s.length; i++){
      let char = s[i];
      let lastLen = stack.length - 1
      if ( stack.length === 0 || stack[lastLen][0] !== char) {
          stack.push([char, 1]);
      } else {
          stack[lastLen][1]++;
          if (stack[lastLen][1] === k) stack.pop();
      }
  };

  return stack.map( elem => elem[0].repeat(elem[1]) ).join('')
};

module.exports = removeDuplicates;
