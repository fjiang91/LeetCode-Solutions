/**
 * @param {number[]} sticks
 * @return {number}
 */
//Adding the two smallest sticks will generate the minimum cost to connect all sticks
//Sort the array and extract the first two
//Insert the new stick and sort the new stick
//Better Solution will be using minheap, where it always keep the minimum as root
var connectSticks = function(sticks) {
  if (sticks.length < 2) return 0;

  sticks = sticks.sort( (a,b) => a - b);
  let total = 0;
  let totalSticks = [...sticks];
  let index = 0;
  while ( totalSticks.length > 1) {
      let currTotal = totalSticks.shift() + totalSticks.shift();
      total += currTotal;
      totalSticks.unshift(currTotal);
      sortFirstElem(totalSticks);
  }

  return total
};

const sortFirstElem = ( arr ) => {
  let firstElem = 0;
  let index = 1;
  while(arr[firstElem] > arr[index]) {
      [arr[firstElem], arr[index]] = [arr[index], arr[firstElem]]
      firstElem++;
      index++;
  }
  return arr;
};
