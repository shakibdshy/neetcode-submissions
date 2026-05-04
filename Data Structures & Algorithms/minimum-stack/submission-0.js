class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.stack.push(val);
        if (this.minStack.length === 0) {
            this.minStack.push(val);
        } else {
            const curMin = this.minStack[this.minStack.length - 1];
            this.minStack.push(val < curMin ? val : curMin);
        }
    }

    /**
     * @return {void}
     */
    pop() {
        if (this.stack.length === 0) {
            return;
        }
        this.stack.pop();
        this.minStack.pop();
    }

    /**
     * @return {number}
     */
    top() {
        if (this.stack.length === 0) {
            return NaN;
        }
        return this.stack[this.stack.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        if (this.minStack.length === 0) {
            return NaN;
        }
        return this.minStack[this.minStack.length - 1];
    }
}
