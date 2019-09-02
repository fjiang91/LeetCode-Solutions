/*
 * @lc app=leetcode id=207 lang=javascript
 *
 * [207] Course Schedule
 */
/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
//O(n) -> Time Complexitiy -> Visiting each node once and keeps track of it
//O(n) -> 3n -> uses three maps to keep track of allnodes, visited, and visiting

//Makes a map for all of the nodes and their preRequisites
//Visited -> to keep track of all of the nodes we visited and mark true, if true, then we know that this course can be completed
//Use visiting to mark that we're currently visiting this node, if DFS comes back to the node, then we know that we have a cycle

var canFinish = function(numCourses, prerequisites) {
  if(!prerequisites.length) return true;
  const allNodes = {};
  for (let i = 0; i < prerequisites.length; i++){
      const [ currClass, preReClass ] = prerequisites[i];
      if (!allNodes[currClass]) allNodes[currClass] = []
      allNodes[currClass].push(preReClass);
  }
  const visited = new Map();
  const visiting = new Map();
  for (let node in allNodes){
      if(!visited.has(node)) {
          if (helper(allNodes, visited, visiting, node)) return false;
      }
  }
  return true;
};

//DFS Helper, return true if we have a cycle
//otherwise false
const helper = (allNodes, visited, visiting, currClass) => {
  if (visiting.has(currClass)) return true;
  if (visited.has(currClass)) return false;
  if (!allNodes.hasOwnProperty(currClass)) return false

  visiting.set(currClass, true);
  for (let i = 0; i < allNodes[currClass].length; i++){
      const preRe = allNodes[currClass][i];
      if (helper(allNodes, visited, visiting, preRe)) return true;
  }
  visiting.delete(currClass);
  visited.set(currClass, true);

  return false;
};

