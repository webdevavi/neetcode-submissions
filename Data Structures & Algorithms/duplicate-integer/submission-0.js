class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const hash = {}

        for(const num of nums){
            if(hash[num]){
                return true
            }else{
                hash[num] = 1
            }
        }

        return false
    }
}
