import HashTable from './hash-table';

let hashTableTest;

beforeEach(() => {
  hashTableTest = new HashTable();
  hashTableTest.set('key', 123);
  hashTableTest.set('key2', 234);
  hashTableTest.set('Spain', 110);
  hashTableTest.set('ǻ', 192);
});


describe('data-structures/hash-table', function () {
  describe('set method', function () {
    it('should set 12021 when hash does not exists', () => {
      debugger;
      
    });
    it('should set "asdsd" when hash exists without hash collision', () => {
      debugger;
      
    });

    it('should set "sadsda" when hash exists with hash collision', () => {
      debugger;
      
    });
  });
  describe('get method', function () {
    it('should return null when hash does not exists', () => {
      debugger;
    });

    it('should get value with key collision when collision happens to replace a key', () => {
      debugger;
    });
  });
  describe('_hash method', function () {
    it('adds 1 + 2 to equal 3', () => {
      debugger;
      // expect(HashTable(1, 2)).toBe(7);
    });
  });
});
