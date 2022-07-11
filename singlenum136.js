// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
// You must implement a solution with a linear runtime complexity and use only constant extra space.
let array = [4, 1, 2, 1, 2]

let singleNumber = function(nums) {
    nums.sort()
    let newArray = nums
    for(let i=0; i<nums.length; i++) {
        if(nums[i - 1] !== nums[i] && nums[i + 1] !== nums[i]){
            return nums[i]
        }
        
    }
    
}
console.log(singleNumber(array))

