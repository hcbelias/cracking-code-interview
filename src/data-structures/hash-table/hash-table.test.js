import HashTable from './hash-table';

describe('data-structures/hash-table', function () {
  describe('set method', function () {
    it('adds 1 + 2 to equal 3', () => {
      debugger;
      const table = new HashTable();
      table.set('key', 123);
      table.set('key2', 234);
      table.set('Spain', 110);
      table.set('ǻ', 192);
      table.display();
debugger
      console.log(table.get('key2'));
      // expect(HashTable(1, 2)).toBe(7);
    });
  });
  describe('get method', function () {
    it('adds 1 + 2 to equal 3', () => {
      debugger;
      // expect(HashTable(1, 2)).toBe(7);
    });
  });
  describe('_hash method', function () {
    it('adds 1 + 2 to equal 3', () => {
      debugger;
      // expect(HashTable(1, 2)).toBe(7);
    });
  });
});
