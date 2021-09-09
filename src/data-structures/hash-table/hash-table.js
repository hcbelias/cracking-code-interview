// References:
// Nathan Sebhastian - https://www.freecodecamp.org/news/javascript-hash-table-associative-array-hashing-in-js/
// Notes:
// Page 88
// 1. First, compute the key's hash code, which will usually be an int or long.
//    Note that two different keys could have the same hash code, as there may be an infinite number of keys and a finite number of ints.
// 2. Then, map the hash code to an index in the array.
//    This could be done with something like hash(key) % array_length. Two different hash codes could, of course, map to the same index.
// Algorithm	Average	Worst case
// Space	    O(n)	  O(n)
// Search	    O(1)	  O(n)
// Insert	    O(1)	  O(1)
// Delete	    O(1)	  O(n)

/**
 * JS HashTable implemntation for studies
 */
export default class HashTable {
  /**
   * Has bucket's array and size props as defaults
   */
  constructor() {
    this.table = new Array(256);
    this.size = 0;
  }

  /**
   * Hashfunction
   * @param {string} key Hash code key
   * @returns array index reference
   */
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    // Mod operation enforce index to array's bounds
    return hash % this.table.length;
  }

  /**
   * Set value
   * @param {string} key Key used in hash function
   * @param {any} value Value to be set
   * @returns
   */
  set(key, value) {
    const index = this._hash(key);
    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          this.table[index][i][1] = value;
          return;
        }
      }
      this.table[index].push([key, value]);
    } else {
      this.table[index] = [];
      this.table[index].push([key, value]);
    }
    this.size++;
  }

  /**
   * Get value
   * @param {string} key Key passed to hash function
   * @returns {any|undefined} Value stored in hashtable
   */
  get(key) {
    const index = this._hash(key);
    if (this.table[index]) {
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[index][i][0] === key) {
          return this.table[index][i][1];
        }
      }
    }
    return undefined;
  }

  /**
   * Remove value
   * @param {string} key Key passed to hash function
   * @returns True if found register, false if not
   */
  remove(key) {
    const index = this._hash(key);

    if (this.table[index] && this.table[index].length) {
      for (let i = 0; i < this.table.length; i++) {
        if (this.table[index][i][0] === key) {
          this.table[index].splice(i, 1);
          this.size--;
          return true;
        }
      }
    } else {
      return false;
    }
  }

  /**
   * Print Hashtable
   */
  display() {
    console.table(this.table);
  }
}
