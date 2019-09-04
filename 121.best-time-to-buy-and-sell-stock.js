/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */
/**
 * @param {number[]} prices
 * @return {number}
 */
/**
 * O(n) -> Time Complexity -> Only need to iterate once
 * O(1) -> Space Complexity
 * Approach -> Keep a minPrice and maxProfit
 * Record the minPrice when we found a new min/low stock price
 * else, then we found a higher price than minPrice
 * Take the max of our current max or the new stockPrice - minPrice
 */
var maxProfit = function(prices) {
  let minPrice = Number.MAX_SAFE_INTEGER;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++){
      const stockPrice = prices[i];
      if (stockPrice < minPrice) minPrice = stockPrice
      else maxProfit = Math.max(maxProfit, stockPrice - minPrice)
  };

  return maxProfit;
};

