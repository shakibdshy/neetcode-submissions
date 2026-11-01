class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    sortArray(nums) {
        const n = nums.length;

        // 1. Build a max-heap (start from the last parent node)
        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
            this.heapify(nums, n, i);
        }

        // 2. Repeatedly move the max (root) to the end, then fix the heap
        for (let end = n - 1; end > 0; end--) {
            [nums[0], nums[end]] = [nums[end], nums[0]];
            this.heapify(nums, end, 0);
        }

        return nums;
    }

    // Sift down: push nums[i] down until the subtree rooted at i is a max-heap
    heapify(nums, size, i) {
        while (true) {
            let largest = i;
            const left = 2 * i + 1;
            const right = 2 * i + 2;

            if (left < size && nums[left] > nums[largest]) largest = left;
            if (right < size && nums[right] > nums[largest]) largest = right;

            if (largest === i) return;

            [nums[i], nums[largest]] = [nums[largest], nums[i]];
            i = largest;
        }
    }
}
