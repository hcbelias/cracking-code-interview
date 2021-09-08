// Notes:
// Page 88
// 1. First, compute the key's hash code, which will usually be an int or long. 
//    Note that two different keys could have the same hash code, as there may be an infinite number of keys and a finite number of ints.
// 2. Then, map the hash code to an index in the array. 
//    This could be done with something like hash(key) % array_length. Two different hash codes could, of course, map to the same index.

/**
 * JS HashTable implemntation for studies
 */
export default class HashTable {
  /**
   * Has bucket's array and size props as defaults
   */
  constructor() {
    this.table = new Array(128);
    this.size = 0;
  }

  /**
   * Lookup for values based on the key
   * @param {string} Key 
   * @returns {Object} Value 
   */
  get(key) {
    const index = this._hash(key);

    return this.table[index];
  }

  set(key, value) {
    const index = this._hash(key);

    this.table[index] = value;
  }

  // Using a basic hash example
  // https://www.freecodecamp.org/news/javascript-hash-table-associative-array-hashing-in-js/
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }

    return hash % this.table.length;
  }
}
