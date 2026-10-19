class Solution:
    def encode(self, strs: List[str]) -> str:
        res = ""

        for s in strs:
            res += f"{len(s)}:{s}"

        return res

    def decode(self, s: str) -> List[str]:
        res = []
        i = 0
        n = len(s)
        while i < n:
            # read the length digits up to the '#'
            j = i
            while s[j] != ":":
                j += 1
            length = int(s[i:j])
            # the word is the `length` chars right after '#'
            start = j + 1
            res.append(s[start : start + length])
            i = start + length
        return res
