/*
 * @lc app=leetcode id=91 lang=javascript
 *
 * [91] Decode Ways
 */
/**
 * @param {string} s
 * @return {number}
 */
//Brute Force approach
//O(2^n) - Time Complexity
//O(n) - Space
//At each stage we know that we need to make two choice and check if the current num version of it is valid
//1. Check the first char and pass the rest downward
//2. Check the first two char and pass the rest downward
//If we hit
var numDecodings = function(s) {
  //Use a hashmap to keep track of all of the counts for valid solution
  let hashMap = {count: 0}
  numDecode(s, hashMap);
  return hashMap.count;
};

const numDecode = (s, hashMap) => {
  if (!s.length) {
      hashMap['count']++
      return;
  }

  //Reduce the size of the string each time if valid
  let firstWay = s[0];
  if (Number(firstWay) <= 26 && firstWay != '0') {
    numDecode(s.slice(1), hashMap);
  }
  if (s.length >= 2) {
    let secondWay = s[0] + s[1];
    if (Number(secondWay) <= 26) {
      numDecode(s.slice(2), hashMap);
    }
  }
};

//DP Approach: Code Inspired by Benyam Ephrem
var numDecodings = function(s) {
  //Initalized an dp arr to keep track toavoid any extra calculation
  let dp = new Array(s.length).fill(-1)
  return numDecode(s, 0, dp);
};

const numDecode = (s, currPointer, dp) => {
  //Use a pointer to indicate where we're currently at
  //if over, then we have hit a valid solution and return 1
  if (currPointer >= s.length) return 1;
  //Return if its alrady computed
  if (dp[currPointer] > -1) return dp[currPointer]

  //The number of ways for the current index
  let currDecodeWays = 0;

  //Check first char and see if its valid
  let firstWay = s.slice(currPointer, currPointer + 1);
  if (validateNum(firstWay)){
      currDecodeWays += numDecode(s, currPointer + 1, dp);
  }

  //Check the first two char and see if valid
  //make sure currPointer + 2 is valid
  if(currPointer + 2 <= s.length){
      let secondWay = s.slice(currPointer, currPointer + 2);
      if (validateNum(secondWay)){
          currDecodeWays += numDecode(s, currPointer + 2, dp);
      }
  }

  dp[currPointer] = currDecodeWays;
  //Return the first index that contains the total # of ways
  return dp[currPointer];
};

const validateNum = (numStr) => {
  if (!numStr.length || Number(numStr[0]) === 0) return false;
  let num = Number(numStr);
  return num >= 1 && num <= 26
};

