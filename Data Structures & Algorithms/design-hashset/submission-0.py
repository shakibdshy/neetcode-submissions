class MyHashSet:

    def __init__(self):
        self.size = 769
        self.buckets = [[] for _ in range(self.size)]
    
    def _has(self, key: int) -> int:
        return key % self.size

    def add(self, key: int) -> None:
        idx = self._has(key)
        bucket = self.buckets[idx]

        if key not in bucket:
            bucket.append(key)

    def remove(self, key: int) -> None:
        idx = self._has(key)
        bucket = self.buckets[idx]

        if key in bucket:
            bucket.remove(key)        

    def contains(self, key: int) -> bool:
        idx = self._has(key)
        return key in self.buckets[idx]


# Your MyHashSet object will be instantiated and called as such:
# obj = MyHashSet()
# obj.add(key)
# obj.remove(key)
# param_3 = obj.contains(key)