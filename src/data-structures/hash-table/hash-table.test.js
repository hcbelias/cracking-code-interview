import HashTable from './hash-table';

let hashTableTest;

const mockData = [
  ['key', 123],
  ['key2', 234],
  ['Spain', 110],
  ['ǻ', 192],
];

describe('data-structures/hash-table', function () {
  beforeEach(() => {
    hashTableTest = new HashTable();
    mockData.forEach((item) => {
      hashTableTest.set(item[0], item[1]);
    });
  });

  describe('set method', function () {
    it('should set 12021 when hash does not exists', () => {
      
    });

    it('should set "asdsd" when hash exists without hash collision', () => {
      
    });

    it('should set "sadsda" when hash exists with hash collision', () => {

    });
  });

  describe('get method', function () {
    it('should return null when hash does not exists', () => {
      const value = hashTableTest.get('mypersonalTest');

      expect(value).toBeNull();
    });

    it('should get value with key collision when collision happens to get a key', () => {
      const valueOne = hashTableTest.get('Spain');
      const valueTwo = hashTableTest.get('ǻ');

      expect(valueOne).toBe(110);
      expect(valueTwo).toBe(192);
    });
  });

  describe('remove method', function () {
    it('should return false when hash is undefined', () => {
      const result = hashTableTest.remove();

      expect(result).toBeFalsy();
    });

    it('should return false when hash does not exists', () => {
      const result = hashTableTest.remove('not-existent-record');

      expect(result).toBeFalsy();
    });

    it('should return false when hash does exists but there are not records', () => {
      
      const result = hashTableTest.remove('Spain');

      expect(result).toBeTruthy();

    });


    it('should get value with key collision when collision happens to replace a key', () => {


    });
  });

  describe('display method', function () {
    it('should invoke console.table a single time when display method is triggered', () => {
      const spy = jest.spyOn(global.console, 'table');

      hashTableTest.display();

      expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should invoke console.table passing internal table as parameter when display method is triggered', () => {
      const spy = jest.spyOn(global.console, 'table');

      hashTableTest.display();

      expect(spy).toHaveBeenCalledWith(hashTableTest.table);
    });
  });
});
