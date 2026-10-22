class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const countMap = new Map();

        for (let num of nums) {
            countMap.set(num, (countMap.get(num) || 0) + 1);
        }

        const n = nums.length;
        const buckets = new Array(n + 1).fill(null).map(() => []);

        for (let [num, freq] of countMap.entries()) {
            buckets[freq].push(num);
        }

        const result = [];
        for (let i = n; i >= 0 && result.length < k; i--) {
            if (buckets[i].length > 0) {
                for (let num of buckets[i]) {
                    result.push(num);
                    if (result.length === k) break;
                }
            }
        }

        return result;
    }
}
