#  /*
# * O(n) -> Time Complexity
# * O(n) -> Space Complexity
# * Approach -> Sort the array first, then find the minimum difference between any two numbers
# * Loop through the array and check if curr and next numb's different is equal to minimum diff
# * Edge Case / Questions to Ask
# * 1. What if the array be empty?
# * 2. Is the arr sorted?
# * 3. Will there be negative numbers?
# */

class Solution:
    def minimumAbsDifference(self, arr: List[int]) -> List[List[int]]:
        arr.sort()
        newArr = []
        minAbs = 1000000

        for i in range(len(arr) - 1):
            minAbs = min(abs(arr[i + 1] - arr[i]), minAbs)

        for i in range(len(arr) - 1):
            if ( abs(arr[i + 1] - arr[i]) == minAbs):
                newArr.append( [arr[i], arr[i + 1]] )

        return newArr
