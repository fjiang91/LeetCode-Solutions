/**
 * @param {number[][]} items
 * @return {number[][]}
 */
//Sort the grades descending and by their number
var highFive = function(items) {
  let sortedItem = items.sort( (a,b) => {
      if (a[0] === b[0]) {
          return b[1] - a[1]
      } else {
          return a[0] - b[0];
      }
  })

  //Use a count to keep track of top 5 scores only
  let res = [];
  let i = 0;
  while( i < sortedItem.length){
      let count = 0;
      let currId = sortedItem[i][0];
      let score = 0;
      //Group scores together by student and keep track of the count for their grade
      while(i < sortedItem.length && currId === sortedItem[i][0] && count < 5) {
          score += sortedItem[i][1];
          count++;
          i++;
      }
      res[currId - 1] = [currId, Math.floor(score / count) ];
      while(i < sortedItem.length && currId === sortedItem[i][0]) i++;
  }
  return res;
};
