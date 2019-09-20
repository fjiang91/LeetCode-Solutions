/**
 * @param {string} time
 * @return {string}
 */

/*
* Two Version of the Same Solution
* Shorter Version - inspired by others
* Longer version with a forloop
* O(1) -> Time Complexity -> At Max 4 * 4 * 4 * 4
* Total of 4 digits and each digit we can check it with other 3/4 digits available within the arr
* O(n) -> Space Complexity -> map to keep track of digits
* Array to keep track of the final array
* Approach -> Go from back to front -> Check if there is a number that is larger than the currNum and make sure if its within bound depending on the index
* For Example: HH:M_ -> last digits needs to be within 0-9
* HH:_M -> 3rd digit needs to be within 0-5 to be valid
* We know that if there's no digits bigger than current,
* then set the currNum to lowestValue since, check next value
* Edge Case / Questions to Ask
* 1. Will the format always be valid? For example: HH:MM
* 2. How about 0?
*/

var nextClosestTime = function(time) {
  const numMap = {};
  let lowestNum = Number.MAX_SAFE_INTEGER;
  let lowestArr = [];
  for (let i = 0 ; i < time.length; i++){
      lowestArr[i] = Number(time[i]);
    if (time[i] !== ':') {
        numMap[time[i]] = true;
        lowestNum = Math.min(lowestNum, Number(time[i]));
    };
  };
  lowestArr[2] = ':'


  lowestArr[4] = findNextClosest(numMap, lowestArr[4], 9, lowestNum);
  if(lowestArr[4] !== lowestNum) return lowestArr.join('');

  lowestArr[3] = findNextClosest(numMap, lowestArr[3], 5, lowestNum);
  if(lowestArr[3] !== lowestNum) return lowestArr.join('');

  lowestArr[1] = lowestArr[0] === 2 ? findNextClosest(numMap, lowestArr[1], 3, lowestNum) : findNextClosest(numMap, lowestArr[1], 9, lowestNum);
  if(lowestArr[1] !== lowestNum) return lowestArr.join('');

  lowestArr[0] = findNextClosest(numMap, lowestArr[0], 2, lowestNum);

  return lowestArr.join('')
};

function findNextClosest(numMap, num, upperBound, lowestNum) {
  let minDiff = Number.MAX_SAFE_INTEGER;
  let minValue = Number.MAX_SAFE_INTEGER
  for (let i in numMap){
      i = Number(i);
      if (i > num && Math.abs(i - num) < minDiff) {
         minDiff = Math.abs(i - num);
         minValue = i;
      };
  };

  if (minValue !== Number.MAX_SAFE_INTEGER && minValue <= upperBound )
      return minValue
  else {
      return lowestNum
  }
};

/**
 * @param {string} time
 * @return {string}
 */
var nextClosestTime = function(time) {
  const numMap = {};
  let lowestNum = Number.MAX_SAFE_INTEGER;
  let lowestArr = [];
  for (let i = 0 ; i < time.length; i++){
      lowestArr[i] = time[i];
    if (time[i] !== ':') {
        numMap[time[i]] = true;
        lowestNum = Math.min(lowestNum, Number(time[i]));
    };
  };

  for (let i = 4; i >= 0; i--) {
      if (i == 2) continue;
      let intNum = Number(time[i]);
      let closestNum = findNextClosest(numMap, intNum);
      if (i === 4) {
          if (closestNum > -1) {
              lowestArr[i] = closestNum
               break
          } else {
              lowestArr[i] = lowestNum;

          };
      } else if ( i === 3) {
          if (closestNum > - 1 && closestNum < 6) {
              lowestArr[i] = closestNum;
              break
          } else {
            lowestArr[i] = lowestNum;

          };
      } else if (i === 1) {

          if (closestNum > - 1) {
              if (lowestArr[0] == 2 && closestNum <= 3) {
                  lowestArr[i] = closestNum;
              } else if (lowestArr[0] == 2 && closestNum > 3){
                      lowestArr[i] = lowestNum;
              } else lowestArr[i] = closestNum;
              break;
          } else {
            lowestArr[i] = lowestNum;
          };
      } else if (i === 0) {
          if (closestNum > - 1 && closestNum <= 2) {
              lowestArr[1] = lowestNum;
              lowestArr[i] = closestNum;
              break
          } else {
            lowestArr[i] = lowestNum;
          };
      };
  }
  return lowestArr.join('')
};

function findNextClosest(numMap, num) {
  let minDiff = Number.MAX_SAFE_INTEGER;
  let minValue = Number.MAX_SAFE_INTEGER
  for (let i in numMap){
      i = Number(i);
      if (i > num && Math.abs(i - num) < minDiff) {
         minDiff = Math.abs(i - num);
          minValue = i;
      };
  };
  return minValue === Number.MAX_SAFE_INTEGER ? -1 : minValue
};
