class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        // const res = {}

        // for(let s of strs){
        //     const key = s.split('').sort().join('');

        //     if(!res[key]){
        //         res[key] = [];
        //     }
        //     res[key].push(s)
        // }

        // return Object.values(res)

        const map = new Map()

        for(let s of strs){
            const count = new Array(26).fill(0);
            for(let c of s){
                count[c.charCodeAt(0) - 97]++;
            }

            const key = count.join(',');
            if(!map.has(key)){
                map.set(key, []);
            }
            map.get(key).push(s)  
        }

        return Array.from(map.values())
    }
}
