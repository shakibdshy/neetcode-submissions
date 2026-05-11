class MyHashMap {
    constructor() {
        this.size = 1000; // bucket size
        this.buckets = Array.from({ length: this.size }, () => []);
    }

    _hash(key) {
        return key % this.size;
    }

    put(key, value) {
        const hash = this._hash(key);
        for (let pair of this.buckets[hash]) {
            if (pair[0] === key) {
                pair[1] = value; // update existing
                return;
            }
        }
        this.buckets[hash].push([key, value]); // insert new
    }

    get(key) {
        const hash = this._hash(key);
        for (let pair of this.buckets[hash]) {
            if (pair[0] === key) return pair[1];
        }
        return -1;
    }

    remove(key) {
        const hash = this._hash(key);
        this.buckets[hash] = this.buckets[hash].filter((pair) => pair[0] !== key);
    }
}

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */
