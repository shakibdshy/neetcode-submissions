class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        let rows = [];
        let cols = [];
        let boxes = [];

        for (let i = 0; i < 9; i++) {
            rows.push(new Set());
            cols.push(new Set());
            boxes.push(new Set());
        }

        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                let num = board[i][j];

                if (num === ".") continue;

                let boxIdx = Math.floor(i / 3) * 3 + Math.floor(j / 3);

                if (rows[i].has(num) || cols[j].has(num) || boxes[boxIdx].has(num)) {
                    return false;
                }

                rows[i].add(num);
                cols[j].add(num);
                boxes[boxIdx].add(num);
            }
        }

        return true;
    }
}
