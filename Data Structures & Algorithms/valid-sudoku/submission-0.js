class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = new Array(9).fill(0);
        const cols = new Array(9).fill(0);
        const boxes = new Array(9).fill(0);

        for(let i = 0; i < 9; i++){
            for(let j = 0; j < 9; j++){
                const cell = board[i][j]
                
                if(cell === '.') continue;

                const num = parseInt(cell);
                const bit = 1 << (num - 1);
                const boxIdx = Math.floor(i / 3) * 3 + Math.floor(j / 3);

                if((rows[i] & bit) !== 0) return false;
                if((cols[j] & bit) !== 0) return false;
                if((boxes[boxIdx] & bit) !== 0) return false;

                rows[i] |= bit;
                cols[j] |= bit;
                boxes[boxIdx] |= bit;
            }
        }

        return true;
    }
}
