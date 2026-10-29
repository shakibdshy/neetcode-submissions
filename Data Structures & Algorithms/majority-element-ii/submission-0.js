class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    majorityElement(nums) {
        let candidate1 = null;
        let candidate2 = null;
        let count1 = 0;
        let count2 = 0;

        for (const num of nums) {
            if (candidate1 === num) {
                count1++;
            } else if (candidate2 === num) {
                count2++;
            } else if (count1 === 0) {
                candidate1 = num;
                count1 = 1;
            } else if (count2 === 0) {
                candidate2 = num;
                count2 = 1;
            } else {
                count1--;
                count2--;
            }
        }

        let realCount1 = 0;
        let realCount2 = 0;

        for (const num of nums) {
            if (num === candidate1) {
                realCount1++;
            } else if (num === candidate2) {
                realCount2++;
            }
        }

        const threshold = Math.floor(nums.length / 3);
        const result = [];

        if (realCount1 > threshold) {
            result.push(candidate1);
        }

        if (realCount2 > threshold) {
            result.push(candidate2);
        }

        return result;
    }
}
