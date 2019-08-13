/*
 * @lc app=leetcode id=332 lang=javascript
 * Code Inspired by Cat Rocket
 * [332] Reconstruct Itinerary
 */
/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
  //Create a hashMap to store all of the departure airports map to their arrival airport
  let hashMap = {};

  for (let i = 0; i < tickets.length; i++) {
    let currIt = tickets[i];
    let dept = currIt[0];
    let arriv = currIt[1];
    if (!hashMap[dept]) {
      //Map each of the arrival airport to their destination within an array inside a hashMap
      hashMap[dept] = [];
      hashMap[dept].push(arriv);
    } else {
      hashMap[dept].push(arriv);
    }
  }

  for (let i in hashMap) {
    //Localecompare - compares two strings and store them in descending order (smallest in the back of the array) to be used with pop.
    hashMap[i] = hashMap[i].sort((a, b) => b.localeCompare(a));
  }

  let res = [];
  //DFS helper function to traverse the hashMap starting with JFK
  reconstructHelper(hashMap, 'JFK', res);
  //Reverse the arr since DFS/Backtracking pushes the last arrival within the array first
  return res.reverse();
};

const reconstructHelper = (hashMap, currIt, res) => {
  let currAirport = hashMap[currIt] || [];
  while (currAirport.length > 0) {
    let next = currAirport.pop();
    reconstructHelper(hashMap, next, res);
  }
  res.push(currIt);
};
