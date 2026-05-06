class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = {}

        for(let s of strs){
            const key = s.split('').sort().join('');

            if(!res[key]){
                res[key] = [];
            }
            res[key].push(s)
        }

        return Object.values(res)
    }
}
