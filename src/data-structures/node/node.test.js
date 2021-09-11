import Node from './node';

describe('data-structures/node', function () {
  const valueReference = { myTest: { complexObject: [1, 2, 3] } };

  describe('constructor', function () {
    let value;

    beforeEach(() => {
      value = new Node(valueReference);
    });

    it('should create a node reference when invoked with reference', () => {
      expect(value.data).toBe(valueReference);
    });
    it('should create a node reference when invoked without next reference', () => {
      expect(value.next).toBeNull();
    });
  });
});
