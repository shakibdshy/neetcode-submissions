class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = "";

        for (let s of strs) {
            res += `${s.length}#${s}`;
        }

        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(s) {
        let res = [];
        let i = 0;
        const n = s.length;

        while (i < n) {
            let j = i;

            while (s[j] !== "#") j++;

            const length = parseInt(s.substring(i, j), 10);
            const start = j + 1;
            res.push(s.substring(start, start + length));
            i = start + length;
        }

        return res;
    }
}
