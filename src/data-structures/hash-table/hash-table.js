export default class HashTable {
  constructor() {
    this.table = new Array(128);
    this.size = 0;
  }

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
