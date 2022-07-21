// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

var intersect = function(nums1, nums2) {
    let map = {}, result = []
    
    for(let idx of nums1) {
        if(!map[idx]) {
            map[idx] = 1 
        } else {
            map[idx]++
        }
    }
    
    for(let idx of nums2) {
        if(map[idx] > 0) {
            result.push(idx)
            map[idx]--
        }
    }
    
    return result
};
console.log()



//https://leetcode.com/problems/intersection-of-two-arrays-ii/
//https://leetcode.com/problems/search-insert-position/
//https://leetcode.com/problems/remove-duplicates-from-sorted-list/