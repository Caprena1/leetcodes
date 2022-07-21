// Given an array, rotate the array to the right by k steps, where k is non-negative.

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]



var rotate = function(nums, k) {
    k = k % nums.length
    let start = nums.length - k
    //new start is going to be at
    // nums.length - k
    
    //go to end

    let one = nums.slice(start) // 5, 6, 7
    let two = nums.slice(0, start) // 1, 2, 3, 4
    
    nums.length = 0
    nums.push(...one, ...two)
};
    //start at 0
    //1,2,3...
    //go until start -1
    // for(let i= start; i <= nums.length; i++) {
    //     let lastNumber = nums.pop()
    //     nums.unshift(lastNumber)
                
// let numsArray = [1,2,3,4,5,6,7]
// let k = 3
// rotate(nums, k)

// ... IS THE SPREAD OPERATOR AND TAKES IT OUT OF TWO ARRAYS