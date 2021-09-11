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
/*
  // Could be used to display data - debugging
  afterEach(() => {
    hashTableTest.display();
  });
*/
  describe('constructor', function () {
    it('should build hashtable with 1024 positions when passing 1024 as param', () => {
      const valueTest = 1024;
      const hashTable = new HashTable(valueTest);
      
      expect(hashTable.table.length).toBe(valueTest);
    });
  });
  describe('set method', function () {
    it('should set as { value: 123 } when hash does not exists', () => {
      const valueTest = { value: 123 };
      const keyTest = 'insert-test';

      hashTableTest.set('insert-test', valueTest);
      const value = hashTableTest.get(keyTest);

      expect(value).toBe(valueTest);
    });

    it('should set as "ASDASDSDA" when hash already exists', () => {
      const valueTest = 'ASDASDSDA';
      const keyTest = 'Spain';
      const currentValue = hashTableTest.get(keyTest);

      expect(currentValue).toBe(110);
      hashTableTest.set(keyTest, valueTest);
      const newValue = hashTableTest.get(keyTest);

      expect(newValue).toBe(valueTest);
    });
  });

  describe('get method', function () {
    it('should return null when hash does not exists', () => {
      const value = hashTableTest.get('mypersonalTest');

      expect(value).toBeNull();
    });

    it('should get value when collision does not happen to get a key', () => {
      const value = hashTableTest.get('key');

      expect(value).toBe(123);
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

    it('should return true when hash does exists and there are records', () => {      
      const result = hashTableTest.remove('Spain');

      expect(result).toBeTruthy();
    });

    it('should return false when hash does exists but there are not records', () => {      
      hashTableTest.table[251] = [['other-key', 21321]];
      const result = hashTableTest.remove('Spain');
      
      expect(result).toBeFalsy();
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
