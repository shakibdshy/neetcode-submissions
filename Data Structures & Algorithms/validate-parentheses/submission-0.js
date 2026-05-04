class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];

        for(let i = 0; i < s.length; i++){
            const ch = s[i]
            switch (ch){
                case '(': stack.push(')'); 
                    break;
                case '{': stack.push('}'); 
                    break;
                case '[': stack.push(']'); 
                    break;
                default:
                    const top = stack.pop();
                    if(ch !== top) return false;
            }
        }
        return stack.length === 0;
    }
}
