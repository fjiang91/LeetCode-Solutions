/*
 * @lc app=leetcode id=929 lang=javascript
 *
 * [929] Unique Email Addresses
 */

 /*
* O(n ^ 2) -> Time Complexity -> Loop through the array and perform slice O(n) operation
* O(n) -> Space Complexity -> HashMap
* Approach -> Loop through the email
* Split the domain into leftAt and rightAt
* Replace all . with spaces ''
* Remove all chars on leftAt after + symbol
* Combine leftAt and rightAt and use a hashMap to keep track if email is found already
* Edge Case / Questions to Ask
* 1. What if the string be empty?
* 2. Will all the characters be lower case?
*/

var numUniqueEmails = function(emails) {
  let emailCount = 0;
  let foundEmail = new Map();
  for (let i = 0; i < emails.length; i++){
      let atIndex = emails[i].indexOf('@');
      let leftAt = emails[i].slice(0,atIndex);
      let rightAt = emails[i].slice(atIndex);
      leftAt = leftAt.replace(/\./g, '');
      let plusSign = leftAt.indexOf('+');
      if (plusSign > -1) {
        leftAt = leftAt.slice(0, plusSign);
      };

      let fullDomain = leftAt.concat(rightAt);

      if (!foundEmail.has(fullDomain)){
          emailCount++;
      }
      foundEmail.set(fullDomain, true);
  };
  return emailCount;
};

