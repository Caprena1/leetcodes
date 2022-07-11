


var topKFrequent = function(nums, k) {
    let tableOne = new Hash_Table()

    for(char in nums) {
        tableOne.insert(nums[char])
    }
    return checkMostFrequent(tableOne, k)
}

topKFrequent(topKFrequent[5,5,5,5,5,4,4,4,1,1,7], 3)