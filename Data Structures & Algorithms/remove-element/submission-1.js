class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let k = 0;

        for(const n of nums){
            if (n != val) {
                nums[k] = n
                k++
            }
        }
        return k
    }
}
