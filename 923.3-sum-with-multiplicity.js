/*
 * @lc app=leetcode id=923 lang=javascript
 *
 * [923] 3Sum With Multiplicity
 */
/**
 * @param {number[]} A
 * @param {number} target
 * @return {number}
 */
//Similar to 3Sum, but with duplicates
//Use a for loop, and start and end counter
//Count the occurence of all of the duplicate and multiply
var threeSumMulti = function(A, target) {
    let res = 0;
    let sortedA = A.sort( (a,b) => a - b);
    const mod = 1e9 + 7;

    for (let i = 0; i < A.length - 2; i++) {
        let start = i + 1;
        let end = A.length - 1;
        while ( start < end ) {
            let currSum = A[i] + A[start] + A[end]
            if ( currSum > target) end--;
            else if (currSum < target) start++;
            else {
                //If same number, then the diff is end - start , 4 - 7 -> 7 - 4 + 1 = 4 elements, 4,5,6,7
                if (A[start] === A[end] ) {
                    let numCount = (end - start + 1);
                    count += ( numCount * (numCount-1) / 2) % mod;
                    break;
                } else {
                    //Else if number are different, then we find out how much of each occurence does the number have
                    let startC = 1;
                    let endC = 1;
                    while( start + 1 < end && A[start] === A[start + 1]) {start++; startC++};
                    while( end - 1 > start && A[end] === A[end - 1]) {end--; endC++};
                    count += (startC * endC) % mod;
                    start++;
                    end--;
                }
            }
        }
        res = (res + count) % mod;
    }
    return res;
};

