//PROBLEM 1480 - LEETCODE:
//Have an array called nums
//Create an empty array-for running summ
//Get the length of the array 
//start with 4 loop to iterate through numbers first time
//Will need a 2nd 4 loop to add next
//looking for output to be [0]+[1]
//adding each index to previous index and totaling it to the sum
// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

var runningSum = function(nums) {
    let newArray = []
    let sum=0
    for(let i=0; i<nums.length; i++){
      sum=nums[i]+sum  //sums+=nums[i] (another way of coding this)
        console.log(sum)
        newArray.push(sum)
     }
 
    return newArray
};