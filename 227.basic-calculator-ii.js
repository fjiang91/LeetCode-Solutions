/*
 * @lc app=leetcode id=227 lang=javascript
 *
 * [227] Basic Calculator II
 */
/**
 * @param {string} s
 * @return {number}
 */
//Uses a stack and sign variable to keep track of num/signs
var calculate = function(s) {
  //Keep track of last Sign, default '+' to make sure if no signs before the first number, push it as positive number into the stack
  //Use a stack to keep track of values we computed (mostly for '*' and '/');
  let sign = '+';
  let numStr = '';
  let stack = [];

  for (let i = 0; i < s.length; i++){
      let char = s[i];
      let isNum = Number.isInteger(Number(char));
      //Skip if empty char
      if ( char === '' ) continue;

      //Add the current char into our numStr -> 443 + 4 => 4434
      if ( isNum ) {
          numStr += char
      }

      //Process the number according to the last sign
      if ( !isNum || i === s.length - 1 ) {
          let num = Number(numStr);
          if ( sign == '-' ) {
              stack.push(-num);
          } else if (sign == '+') {
              stack.push(num);
          } else if ( sign == '/') {
              let tempRes = stack.pop() / num;
              if (tempRes > 0) tempRes = Math.floor(tempRes);
              else tempRes = Math.ceil(tempRes);
              stack.push(tempRes);
          } else {
              let tempRes = stack.pop() * num;
              if (tempRes > 0) tempRes = Math.floor(tempRes);
              else tempRes = Math.ceil(tempRes);
              stack.push(tempRes);
          }
          sign = char;
          numStr = '';
      }
  }

  return stack.reduce( (accum, curr) => accum + curr, 0);
};


