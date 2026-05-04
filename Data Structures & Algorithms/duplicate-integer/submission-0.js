class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const setValue = new Set()
        for (const num of nums) {
            if(setValue.has(num)) return true
            setValue.add(num)
        }
        return false
    }
}
