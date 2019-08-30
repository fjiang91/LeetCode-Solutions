/*
 * @lc app=leetcode id=621 lang=javascript
 *
 * [621] Task Scheduler
 */
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
//Greedy Approach -> Always start/keep the maximum task count at the top of array
//O (n * n log n) -> Time Complexity -> Might be better with maxHeap
//O (26) -> O (1) -> for the amount of characters from A - Z and sortedTask
var leastInterval = function(tasks, n) {
  //Create a hashMap for all of the tasks
  const map = {};
  for (let i = 0; i < tasks.length; i++){
      const task = tasks[i];
      map[task] = (map[task] || 0) + 1;
  }

  let count = 0;
  let mapLen = Object.entries(map).length
  while (mapLen > 0) {
      //Resort the sortedTask, so the highest task count is always at top
      const sortedTask = Object.entries(map).sort( (a,b) => b[1] - a[1]);
      let currSize = sortedTask.length;

      //Determine if our current tasks is longer than N
      //if so, then we can repeat the max task without idling
      //Else, then just keep looping until we get through each index
      //within the sortedTask
      let iterateLen = currSize > n ? n + 1 : currSize;
      for (let i = 0; i < iterateLen; i++){
              if ( i < currSize ) {
                  let task = sortedTask[i][0]
                  count++
                  map[task]--;
                  if (map[task] === 0) delete map[task]
              }
      }

      //If only when we have less unique task within our interval
      //then we'll need to idle until n
      //Only push while there's something inside our mapTask
      mapLen = Object.entries(map).length
      if (mapLen > 0) {
          let currTaskLen = sortedTask.length;
          while(currTaskLen <= n) {
              count++;
              currTaskLen++;
          }
      }
  };

  return count
};

