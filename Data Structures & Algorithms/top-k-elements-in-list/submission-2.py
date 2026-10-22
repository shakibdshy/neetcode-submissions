class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        count_map = Counter(nums)

        n = len(nums)
        buckets = [[] for _ in range(n + 1)]

        for num, freq in count_map.items():
            buckets[freq].append(num)

        result = []

        for i in range(n, -1, -1):
            if buckets[i]:
                result.extend(buckets[i])

                if len(result) >= k:
                    break

        return result[:k]
